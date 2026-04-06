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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }

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
      await signOut(auth);

      setUser(null);
      localStorage.removeItem("user");

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
              <Image
                src={"/Layout/Header/icon_login.svg"}
                width={30}
                height={30}
              />
              <p>로그아웃</p>
            </a>
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
        <H.Icon_mypage onClick={handleMypage}>
          <Image src={"/Layout/Header/icon_my.svg"} width={30} height={30} />
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
