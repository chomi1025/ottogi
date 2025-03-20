"use Client";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../firebaseConfig";
import { cartState } from "../../../../state/cartState";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Icon_cart = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_cart.svg?alt=media&token=a81dbc11-36f3-4bbf-9794-de5a92884e02);
  width: 40px;
  height: 40px;
`;

const CartMessageBox = styled.div`
  position: fixed;
  z-index: 1003;
  left: 50%;
  bottom: 30px;
  display: inline-block;
  padding: 22px 50px;
  border-radius: 100px;
  overflow: hidden;
  color: white;
  background-color: rgba(211, 35, 58, 0.9);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07);
  transform: translateX(-50%);
  transition: 0.3s;
`;

export default function CartComponent(props) {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [cart, setCart] = useRecoilState(cartState); // 리코일 상태 사용

  // 🔹  Firebase 인증 상태 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const onClickAddToCart = async (e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    e.preventDefault(); // 기본 동작 중단

    const productId = props.product.id; // product 객체에서 id 추출
    if (!productId) {
      console.error("상품 ID가 없습니다.");
      return;
    }

    // 비회원일 경우 로컬스토리지 처리
    if (!user) {
      let storedCart = JSON.parse(localStorage.getItem("guestCart")) || [];

      // 이미 담긴 상품인지 확인
      const existingItemIndex = storedCart.findIndex(
        (item) => item.product.id === productId
      );

      if (existingItemIndex !== -1) {
        // 기존 상품 수량 증가
        storedCart[existingItemIndex].quantity += 1;
      } else {
        // 새 상품 추가
        storedCart.push({
          product: props.product,
          quantity: 1,
          select: true,
        });
      }

      // 로컬스토리지에 장바구니 저장
      localStorage.setItem("guestCart", JSON.stringify(storedCart));

      // 리코일 상태 업데이트
      setCart(storedCart);

      setMessage("카트에 담겼습니다!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    //회원일 경우 Firebase 처리
    const cartRef = doc(db, "Cart", user.uid);

    try {
      const cartSnap = await getDoc(cartRef);

      if (cartSnap.exists()) {
        // 기존 장바구니 데이터 가져오기
        const cartData = cartSnap.data();
        let items = cartData.items || [];

        // 이미 담긴 상품인지 확인
        const existingItemIndex = items.findIndex(
          (item) => item.product.id === productId // product 객체 기준으로 확인
        );

        if (existingItemIndex !== -1) {
          // 기존 상품 수량 증가
          items[existingItemIndex].quantity += 1;

          // 장바구니 업데이트
          await updateDoc(cartRef, { items });
          setMessage("카트에 담겼습니다!");

          // 리코일 상태 업데이트
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.product.id === productId
                ? { ...item, quantity: item.quantity + 1, select: true } // 수량 증가
                : item
            )
          );
        } else {
          // 새 상품 추가
          items.push({
            product: props.product,
            quantity: 1,
            select: true,
          });

          // 장바구니 업데이트
          await updateDoc(cartRef, { items });
          setMessage("카트에 담겼습니다!");

          // 리코일 상태 업데이트
          setCart((prevCart) => [
            ...prevCart,
            { product: props.product, quantity: 1, select: true },
          ]);
        }
      } else {
        // 장바구니가 없으면 새로 생성
        await setDoc(cartRef, {
          items: [{ product: props.product, quantity: 1, select: true }],
        });
        setMessage("카트에 담겼습니다!");

        // 리코일 상태 업데이트
        setCart([{ product: props.product, quantity: 1, select: true }]);
      }

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("장바구니 추가 중 오류 발생:", error);
      setMessage("장바구니 추가 실패");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <>
      <Icon_cart onClick={onClickAddToCart} />
      {message && <CartMessageBox>{message}</CartMessageBox>}
    </>
  );
}
