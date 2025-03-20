"use Client";
import Link from "next/link";
import * as H from "./index.style";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { cartState } from "../../../state/cartState";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

export default function IconComponent() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useRecoilState(cartState);

  // Firebase에서 장바구니 데이터 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // 유저가 로그인 상태일 때만 Cart 데이터 가져오기
        const userCartRef = doc(db, "Cart", firebaseUser.uid); // UID로 해당 유저의 Cart 참조

        const unsubscribeCart = onSnapshot(userCartRef, (docSnap) => {
          if (docSnap.exists()) {
            const items = docSnap.data().items; // items 필드를 배열로 가져오기

            setCart(items); // 장바구니 데이터를 상태에 저장
          } else {
            setCart([]); // 데이터가 없으면 빈 배열로 설정
          }
        });

        return () => unsubscribeCart(); // 컴포넌트 언마운트 시 구독 해제
      } else {
        setCart([]); // 로그아웃 시 장바구니 비우기
      }
    });

    return () => unsubscribe(); // Firebase 인증 상태 감지 해제
  }, []);

  // 마이페이지 관리
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1️⃣ 로컬 스토리지에서 유저 정보 가져오기 (초기값 설정)
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }

    // 2️⃣ Firebase 인증 상태 감지
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const newUser = {
          email: firebaseUser.email || "",
          nickname: firebaseUser.displayName || "",
          isLoggedIn: true,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase 로그아웃

      // Recoil 상태 초기화
      setUser(null);
      localStorage.removeItem("user"); // 로컬 스토리지에서 삭제

      // 로그아웃 후 이동할 경로
      router.replace("/main");

      alert("로그아웃 성공");
    } catch (error) {
      console.error("로그아웃 오류:", error.message);
    }
  };

  const handleMypage = async () => {
    if (user.isLoggedIn) {
      try {
        router.push("/front/mypage");
      } catch (error) {
        console.error("마이페이지 이동 중 에러 발생:", error);
      }
    } else {
      router.push("/front/auth/guest_login");
    }
  };

  return (
    <>
      {/* 로그인/로그아웃 */}
      <H.Icons>
        {user?.isLoggedIn ? (
          <H.Icon_logout onClick={handleLogout}>
            <a>
              <span />
              <p>로그아웃</p>
            </a>
          </H.Icon_logout>
        ) : (
          <H.Icon_login>
            <Link href="/front/auth/login">
              <a>
                <span />
                <p>로그인</p>
              </a>
            </Link>
          </H.Icon_login>
        )}

        {/* 마이페이지 */}
        <H.Icon_mypage onClick={handleMypage}>
          <span />
          <p>마이페이지</p>
        </H.Icon_mypage>

        {/* 장바구니 */}
        <H.Icon_cart>
          <Link href="/front/order/basket">
            <a>
              <H.Icon>
                <H.number>{cart?.length}</H.number>
              </H.Icon>
              <p>장바구니</p>
            </a>
          </Link>
        </H.Icon_cart>
      </H.Icons>
    </>
  );
}
