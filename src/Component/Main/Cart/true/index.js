import Image from "next/image";
import CheckboxComponent from "../../checkbox";
import * as C from "./index.style";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import CartFalse from "../false";

export default function CartTrue(props) {
  const [popup, setPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userId, setUserId] = useState(null);

  const onClickPopup = (item) => {
    setSelectedItem(item);
    setPopup(!popup);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user ? user.uid : null);
    });
    return () => unsubscribe();
  }, []);

  // 상품삭제버튼
  const deleteCheckItem = async (userId, item) => {
    const cartRef = doc(db, "Cart", userId);
    const newItems = props.cart.filter((cartItem) => cartItem.id !== item.id);

    await updateDoc(cartRef, {
      items: newItems.map(({ select, ...rest }) => rest),
    });
    props.setCart(newItems);
  };

  // 개별선택
  const toggleItem = (itemId) => {
    props.setCart((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, select: !item.select } : item,
      ),
    );
  };

  // 실온 전체선택
  const toggleRoomTemperature = () => {
    const allRoomTempSelected = roomTempItems.every((item) => item.select);

    props.setCart((prevItems) =>
      prevItems.map((item) => {
        const isRoomTemp = roomTempItems.some((rt) => rt.id === item.id);
        return isRoomTemp ? { ...item, select: !allRoomTempSelected } : item;
      }),
    );
  };

  // 냉장 전체선택
  const toggleRefrigerated = () => {
    const allRefrigeratedSelected = refrigeratedItems.every(
      (item) => item.select,
    );

    props.setCart((prevItems) =>
      prevItems.map((item) => {
        const isRefrigerated = refrigeratedItems.some(
          (rf) => rf.id === item.id,
        );
        return isRefrigerated
          ? { ...item, select: !allRefrigeratedSelected }
          : item;
      }),
    );
  };

  //모든상품 전체 선택
  const toggleAll = () => {
    const allSelected = props.cart.every((item) => item.select);
    props.setCart((prevItems) =>
      prevItems.map((item) => ({ ...item, select: !allSelected })),
    );
  };

  //수량변경함수
  const updateQuantity = (userId, item, newQuantity) => {
    if (newQuantity < 1) return;

    // 1. UI 상태 즉시 변경 (Recoil)
    props.setCart((prev) => {
      const nextCart = prev.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem,
      );

      // 2. DB 업데이트는 별도로 슬쩍 (화면 렌더링에 영향 안 주게)
      if (userId) {
        const cartRef = doc(db, "Cart", userId);
        updateDoc(cartRef, {
          items: nextCart.map(({ select, product, ...rest }) => rest),
        }).catch((err) => console.error("DB 업데이트 실패", err));
      }

      return nextCart;
    });
  };

  // 증가
  const increaseQuantity = (item) => {
    updateQuantity(userId, item, item.quantity + 1);
  };

  // 감소
  const decreaseQuantity = (item) => {
    updateQuantity(userId, item, item.quantity - 1);
  };

  const roomTempItems = props.displayCart.filter(
    (item) => item.product?.tag?.refrigerated === false,
  );

  const refrigeratedItems = props.displayCart.filter(
    (item) => item.product?.tag?.refrigerated === true,
  );

  return (
    <C.Wrapper>
      {/* 탭 0일 때 (장바구니 true) */}
      {props.activeTab === 0 && (
        <>
          {/* 상품이 하나라도 있을 때만 전체선택 옵션 노출 */}
          {props.displayCart.length > 0 && (
            <C.OptionWrapper>
              <div>
                <CheckboxComponent
                  checked={props.cart.every((item) => item.select)}
                  onChange={toggleAll}
                />
                <strong>전체선택</strong>
              </div>
              <ul>
                <C.RemoveSoldOut>품절삭제</C.RemoveSoldOut>
                <C.RemoveSelected>선택삭제</C.RemoveSelected>
              </ul>
            </C.OptionWrapper>
          )}

          {/* 실온상품 */}
          {roomTempItems.length > 0 && (
            <C.RoomTempWrapper>
              <C.Top>
                <div>
                  <CheckboxComponent
                    text={"실온"}
                    checked={roomTempItems.every((item) => item.select)}
                    onChange={toggleRoomTemperature}
                  />
                  <strong>실온</strong>
                </div>
              </C.Top>
              <C.ItemWrapper>
                {roomTempItems.map((item, index) => (
                  <C.Item key={item.id}>
                    <CheckboxComponent
                      width={"51px"}
                      paddingLeft={"21px"}
                      checked={item.select}
                      onChange={() => toggleItem(item.id)}
                    />
                    <C.ImageWrapper>
                      <div>
                        <Link href={`/product/${item.id}`}>
                          <a>
                            <Image
                              src={item.product.imgSrc[0]}
                              alt={item.product.name}
                              width={120}
                              height={120}
                            />
                          </a>
                        </Link>
                        <Link href={`/product/${item.id}`}>
                          <a>{item.product.name}</a>
                        </Link>
                      </div>
                    </C.ImageWrapper>
                    <C.Quantity_Wrapper>
                      <button
                        onClick={() => decreaseQuantity(item)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input type="number" value={item.quantity} readOnly />
                      <button onClick={() => increaseQuantity(item)}>+</button>
                    </C.Quantity_Wrapper>
                    <C.ItemPrice>
                      <p>
                        {(item.quantity * item.product.price).toLocaleString()}
                        <span>원</span>
                      </p>
                    </C.ItemPrice>
                    <C.removeItem>
                      <button onClick={() => onClickPopup(item)}>✖</button>
                    </C.removeItem>
                  </C.Item>
                ))}
              </C.ItemWrapper>
              <C.OrderMoreWrapper>
                <h3>
                  주문금액&nbsp;
                  {roomTempItems
                    .filter((item) => item.select)
                    .reduce(
                      (total, item) =>
                        total + item.product.price * item.quantity,
                      0,
                    )
                    .toLocaleString()}
                  원
                </h3>
                <Link href="/">
                  <a>실온 상품 더 담고 무료배송 받기</a>
                </Link>
              </C.OrderMoreWrapper>
            </C.RoomTempWrapper>
          )}

          {/* 냉장상품 */}
          {refrigeratedItems.length > 0 && (
            <C.RefrigeratedWrapper
              roomTemperatureItems={roomTempItems.length > 0}
            >
              <C.Top>
                <div>
                  <CheckboxComponent
                    checked={refrigeratedItems.every((item) => item.select)}
                    onChange={toggleRefrigerated}
                  />
                  <strong>냉장 · 냉동</strong>
                </div>
              </C.Top>
              <C.ItemWrapper>
                {refrigeratedItems.map((item, index) => (
                  <C.Item key={item.id}>
                    <CheckboxComponent
                      width={"51px"}
                      paddingLeft={"21px"}
                      checked={item.select}
                      onChange={() => toggleItem(item.id)}
                    />
                    <C.ImageWrapper>
                      <div>
                        <Link href={`/product/${item.id}`}>
                          <a>
                            <Image
                              src={item.product.imgSrc[0]}
                              alt={item.product.name}
                              width={120}
                              height={120}
                            />
                          </a>
                        </Link>
                        <a>{item.product.name}</a>
                      </div>
                    </C.ImageWrapper>
                    <C.Quantity_Wrapper>
                      <button
                        onClick={() => decreaseQuantity(item)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input type="number" value={item.quantity} readOnly />
                      <button onClick={() => increaseQuantity(item)}>+</button>
                    </C.Quantity_Wrapper>
                    <C.ItemPrice>
                      <p>
                        {(item.quantity * item.product.price).toLocaleString()}
                        <span>원</span>
                      </p>
                    </C.ItemPrice>
                    <C.removeItem>
                      <button onClick={() => onClickPopup(item)}>✖</button>
                    </C.removeItem>
                  </C.Item>
                ))}
              </C.ItemWrapper>
              <C.OrderMoreWrapper>
                <h3>
                  주문금액&nbsp;
                  {refrigeratedItems
                    .filter((item) => item.select)
                    .reduce(
                      (total, item) =>
                        total + item.product.price * item.quantity,
                      0,
                    )
                    .toLocaleString()}
                  원
                </h3>
                <Link href="/">
                  <a>냉장 · 냉동 상품 더 담고 무료배송 받기</a>
                </Link>
              </C.OrderMoreWrapper>
            </C.RefrigeratedWrapper>
          )}

          {/* 삭제 팝업 (공통) */}
          {popup && (
            <C.RemovePopup>
              <C.PopupWrapper>
                <C.PopupMessageWrapper>
                  선택하신 상품을 삭제하시겠습니까?
                </C.PopupMessageWrapper>
                <C.PopupButtonWrapper>
                  <button onClick={() => setPopup(false)}>취소</button>
                  <button
                    onClick={() => {
                      deleteCheckItem(userId, selectedItem);
                      setPopup(false);
                    }}
                  >
                    확인
                  </button>
                </C.PopupButtonWrapper>
              </C.PopupWrapper>
            </C.RemovePopup>
          )}

          {/* 장바구니가 완전히 비었을 때 보여줄 UI (옵션) */}
          {props.displayCart.length === 0 && <CartFalse />}
        </>
      )}

      {props.activeTab === 1 && <CartFalse />}
      {props.activeTab === 2 && <CartFalse />}
    </C.Wrapper>
  );
}
