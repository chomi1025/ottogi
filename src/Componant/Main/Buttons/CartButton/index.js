import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  Timestamp,
  collection,
  getDocs,
} from "firebase/firestore";
import { useRecoilValue } from "recoil";

import { auth, db } from "@/firebaseConfig";
import { userState } from "@/state/userState";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

const Button = styled.button`
  width: calc(100% / 3 - 10px);
  height: 60px;
  border: 1px solid #d3233a;
  background: white;
  color: #d3233a;
  font-size: 16px;
  font-weight: 700;
  padding: 20px 0;
  border-radius: 6px;
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

export default function CartButton(props) {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  // 🔹  Firebase 인증 상태 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  //장바구니 함수
  const onClickCart = async () => {
    if (!user) {
      setMessage("로그인이 필요합니다!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const productId = props.productID;
    if (!productId) {
      console.error("상품 ID가 없습니다.");
      return;
    }

    const cartRef = doc(db, "Cart", user.uid);

    try {
      const cartSnap = await getDoc(cartRef);

      if (cartSnap.exists()) {
        // 기존 장바구니 데이터 가져오기
        const cartData = cartSnap.data();
        let items = cartData.items || [];

        // 이미 담긴 상품인지 확인
        const existingItemIndex = items.findIndex(
          (item) => item.id === productId
        );

        if (existingItemIndex !== -1) {
          // 기존 상품 수량 증가
          items[existingItemIndex].quantity += 1;
        } else {
          // 새 상품 추가
          items.push({
            id: productId,
            quantity: 1,
            addedAt: Timestamp.now(),
          });
        }

        // 업데이트
        await updateDoc(cartRef, { items });
        setMessage(
          existingItemIndex !== -1
            ? "동일 상품이 장바구니에 한번 더 담겼습니다."
            : "카트에 담겼습니다!"
        );
      } else {
        // 장바구니가 없으면 새로 생성
        await setDoc(cartRef, {
          items: [{ id: productId, quantity: 1, addedAt: Timestamp.now() }],
        });
        setMessage("카트에 담겼습니다!");
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
      <Button onClick={onClickCart}>장바구니</Button>
      {message && <CartMessageBox>{message}</CartMessageBox>}
    </>
  );
}
