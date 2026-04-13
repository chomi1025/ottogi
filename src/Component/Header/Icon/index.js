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
import Image from "next/image";

export default function IconComponent() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useRecoilState(cartState);

  // 장바구니 실시간
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userCartRef = doc(db, "Cart", firebaseUser.uid);

        const unsubscribeCart = onSnapshot(userCartRef, (docSnap) => {
          if (docSnap.exists()) {
            const items = docSnap.data().items;

            setCart(items);
          } else {
            setCart([]);
          }
        });

        return () => unsubscribeCart();
      } else {
        setCart([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // 유저정보
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser((prev) => ({
          ...prev,
          isLoggedIn: true,
          email: firebaseUser.email,
        }));
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [setUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);

      setUser(null);
      localStorage.removeItem("user");

      router.replace("/main");

      alert("로그아웃 성공");
    } catch (error) {
      console.error("로그아웃 오류:", error.message);
    }
  };

  return (
    <>
      {/* 로그인/로그아웃 */}
      <H.Icons>
        {user?.isLoggedIn ? (
          <H.Icon_logout onClick={handleLogout}>
            <Image
              src={"/Layout/Header/icon_login.svg"}
              width={30}
              height={30}
            />

            <p>로그아웃</p>
          </H.Icon_logout>
        ) : (
          <H.Icon_login>
            <Link href="/front/auth/login">
              <a>
                <Image
                  src={"/Layout/Header/icon_login.svg"}
                  width={30}
                  height={30}
                />
                <p>로그인</p>
              </a>
            </Link>
          </H.Icon_login>
        )}

        {/* 마이페이지 */}
        <H.Icon_mypage>
          <Link href="/front/mypage">
            <a>
              <Image
                src={"/Layout/Header/icon_my.svg"}
                width={30}
                height={30}
              />
            </a>
          </Link>

          <p>마이페이지</p>
        </H.Icon_mypage>

        {/* 장바구니 */}
        <H.Icon_cart>
          <Link href="/front/order/basket">
            <a>
              <Image
                src={"/Layout/Header/icon_bag.svg"}
                width={30}
                height={30}
              />
              <H.number>{cart?.length}</H.number>

              <p>장바구니</p>
            </a>
          </Link>
        </H.Icon_cart>
      </H.Icons>
    </>
  );
}
