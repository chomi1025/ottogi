import Image from "next/image";
import CheckboxComponent from "../../checkbox";
import * as C from "./index.style";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import CartFalse from "../false";

export default function CartTrue(props) {
  const [popup, setPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // 선택한 상품 저장
  const [userId, setUserId] = useState(null);

  const onClickPopup = (item) => {
    setSelectedItem(item); // 선택한 상품 저장
    setPopup(!popup);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // 로그인한 사용자의 UID 저장
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(userId);
  // 상품삭제버튼
  const deleteCheckItem = async (userId, item) => {
    try {
      const cartRef = doc(db, "Cart", userId);

      // Firestore에서 해당 상품만 제거
      await updateDoc(cartRef, {
        items: arrayRemove({
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          imgSrc: item.product.imgSrc,
          tag: item.product.tag,
        }),
      });

      console.log(`${item.product.name} 삭제 완료`);

      // Recoil 상태에서도 삭제
      props.setCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.product.id !== item.product.id)
      );
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  // 개별선택
  const toggleItem = (itemId) => {
    props.setCart((prevItems) =>
      prevItems.map((item) =>
        item.product.id === itemId
          ? { ...item, select: !item.select } // 선택 상태 토글
          : item
      )
    );
  };

  //실온 전체선택
  const toggleRoomTemperature = () => {
    const allRoomTempSelected = props.cart
      .filter((item) => item.product.tag.refrigerated === false)
      .every((item) => item.select);

    props.setCart((prevItems) =>
      prevItems.map((item) =>
        item.product.tag.refrigerated === false
          ? { ...item, select: !allRoomTempSelected }
          : item
      )
    );
  };

  //냉장 전체선택
  const toggleRefrigerated = () => {
    const allRefrigeratedSelected = props.cart
      .filter((item) => item.product.tag.refrigerated === true)
      .every((item) => item.select);

    props.setCart((prevItems) =>
      prevItems.map((item) =>
        item.product.tag.refrigerated === true
          ? { ...item, select: !allRefrigeratedSelected }
          : item
      )
    );
  };

  //모든상품 전체 선택
  const toggleAll = () => {
    const allSelected = props.cart.every((item) => item.select);
    props.setCart((prevItems) =>
      prevItems.map((item) => ({ ...item, select: !allSelected }))
    );
  };

  //수량변경함수
  const updateQuantity = async (userId, item, newQuantity) => {
    console.log(userId, item, newQuantity);
    if (newQuantity < 1) return; // 최소 수량 제한

    try {
      const cartRef = doc(db, "Cart", userId);

      // Firestore에서 해당 아이템의 quantity만 변경
      await updateDoc(cartRef, {
        items: props.cart.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        ),
      });

      // 리코일 상태 업데이트
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      );
    } catch (error) {
      console.error("수량 업데이트 실패:", error);
    }
  };

  // 증가
  const increaseQuantity = (item) => {
    updateQuantity(userId, item, item.quantity + 1);
  };

  // 감소
  const decreaseQuantity = (item) => {
    updateQuantity(userId, item, item.quantity - 1);
  };

  return (
    <C.Wrapper>
      {props.activeTab === 0 && !props.roomTemperatureItems.length == 0 && (
        <>
          {/* 전체선택 */}
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

          {/* 실온상품 */}
          {props.refrigeratedItems.length == 0 && (
            <C.RoomTempWrapper>
              <C.Top>
                <div>
                  <CheckboxComponent
                    text={"실온"}
                    width={""}
                    checked={props.cart
                      .filter((item) => item.product.tag.refrigerated === false)
                      .every((item) => item.select)}
                    onChange={toggleRoomTemperature}
                  />
                  <strong>실온</strong>
                </div>

                <span>프로그레스 바</span>
              </C.Top>

              <C.ItemWrapper>
                {props.roomTemperatureItems.map((item, index) => (
                  <C.Item key={index} customKey={index}>
                    <CheckboxComponent
                      width={"51px"}
                      paddingLeft={"21px"}
                      checked={item.select}
                      onChange={() => toggleItem(item.product.id)}
                    />

                    <C.ImageWrapper>
                      <div>
                        <Link href="#">
                          <a>
                            <Image
                              src={item.product.imgSrc[0]}
                              alt={item.product.name}
                              width={120}
                              height={120}
                            />
                          </a>
                        </Link>
                        <Link href="#">
                          <a>{item.product.name}</a>
                        </Link>
                      </div>
                    </C.ImageWrapper>

                    <C.ItemCount>
                      <div>
                        {/* 마이너스 */}
                        <button onClick={() => decreaseQuantity(item)} />

                        {/* 플러스 */}
                        <button onClick={() => increaseQuantity(item)} />
                        <input type="text" value={item.quantity} readOnly />
                      </div>
                    </C.ItemCount>

                    <C.ItemPrice>
                      <p>
                        {(item.quantity * item.product.price).toLocaleString()}
                        <span>원</span>
                      </p>
                    </C.ItemPrice>

                    <C.removeItem>
                      <button onClick={() => onClickPopup(item)} />
                    </C.removeItem>
                  </C.Item>
                ))}

                {popup && (
                  <C.RemovePopup>
                    <C.PopupWrapper>
                      <C.PopupMessageWrapper>
                        선택하신 상품을 장바구니에서
                        <br />
                        삭제하시겠습니까?
                      </C.PopupMessageWrapper>

                      <C.PopupButtonWrapper>
                        <button onClick={onClickPopup}>취소</button>
                        <button
                          onClick={() => {
                            if (selectedItem) {
                              deleteCheckItem(userId, selectedItem); // 선택된 상품 삭제
                            }
                            setPopup(false); // 팝업 닫기
                          }}
                        >
                          확인
                        </button>
                      </C.PopupButtonWrapper>
                    </C.PopupWrapper>
                  </C.RemovePopup>
                )}
              </C.ItemWrapper>

              <C.OrderMoreWrapper>
                <h3>
                  주문금액&nbsp;
                  {props.cart
                    .filter(
                      (item) => item.select && !item.product.tag.refrigerated
                    )
                    .reduce(
                      (total, item) =>
                        total + item.product.price * item.quantity,
                      0
                    )
                    .toLocaleString()}
                  원
                </h3>
                <Link href="">
                  <a>실온 상품 더 담고 무료배송 받기</a>
                </Link>
              </C.OrderMoreWrapper>
            </C.RoomTempWrapper>
          )}

          {/* 냉장상품 */}
          {!props.refrigeratedItems.length == 0 && (
            <C.RefrigeratedWrapper
              roomTemperatureItems={props.roomTemperatureItems}
            >
              <C.Top>
                <div>
                  <CheckboxComponent
                    checked={props.cart
                      .filter((item) => item.product.tag.refrigerated === true)
                      .every((item) => item.select)}
                    onChange={toggleRefrigerated}
                  />
                  <strong>냉장 · 냉동</strong>
                </div>
                <span>프로그래스 바</span>
              </C.Top>

              <C.ItemWrapper>
                {props.refrigeratedItems.map((item, index) => (
                  <C.Item key={index} customKey={index}>
                    <CheckboxComponent
                      width={"51px"}
                      paddingLeft={"21px"}
                      checked={item.select}
                      onChange={() => toggleItem(item.product.id)}
                    />

                    <C.ImageWrapper>
                      <div>
                        <Link href="#">
                          <a>
                            <Image
                              src={item.product.imgSrc[0]}
                              alt={item.product.name}
                              width={120}
                              height={120}
                            />
                          </a>
                        </Link>
                        <Link href="#">
                          <a>{item.product.name}</a>
                        </Link>
                      </div>
                    </C.ImageWrapper>

                    <C.ItemCount>
                      <div>
                        {/* 마이너스 */}
                        <button onClick={() => decreaseQuantity(item)} />

                        {/* 플러스 */}
                        <button onClick={() => increaseQuantity(item)} />
                        <input type="text" value={item.quantity} readOnly />
                      </div>
                    </C.ItemCount>

                    <C.ItemPrice>
                      <p>
                        {item.product.price.toLocaleString()}
                        <span>원</span>
                      </p>
                    </C.ItemPrice>

                    <C.removeItem onClick={deleteItem}>닫기</C.removeItem>
                  </C.Item>
                ))}
              </C.ItemWrapper>

              <C.OrderMoreWrapper>
                <h3>
                  주문금액&nbsp;
                  {props.cart
                    .filter(
                      (item) => item.select && item.product.tag.refrigerated
                    )
                    .reduce(
                      (total, item) =>
                        total + item.product.price * item.quantity,
                      0
                    )
                    .toLocaleString()}
                  원
                </h3>

                <Link href="">
                  <a>냉장 · 냉동 상품 더 담고 무료배송 받기</a>
                </Link>
              </C.OrderMoreWrapper>
            </C.RefrigeratedWrapper>
          )}
        </>
      )}

      {props.activeTab === 1 && <CartFalse />}

      {props.activeTab === 2 && <CartFalse />}
    </C.Wrapper>
  );
}
