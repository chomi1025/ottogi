import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import LoginPresenter from "./index.presenter";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../../../../firebaseConfig";
import { userState } from "../../../../state/userState";
import { useRecoilState } from "recoil";
import { doc, getDoc } from "firebase/firestore";

export default function LoginContainer() {
  const inputEl = useRef();
  const [buttonState, setButtonState] = useState(false);
  const router = useRouter();

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);

  const onChangeID = (event) => setloginEmail(event.target.value);
  const onChangePassword = (event) => setLoginPassword(event.target.value);

  // 🔥 새로고침 시 localStorage에서 로그인 정보 복원
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userData = JSON.parse(savedUser); // 저장된 값 파싱
      console.log("복원된 userData:", userData); // 확인용 로그 추가
      setUser(userData); // 로그인 상태 복원
    }
  }, [setUser]); // 로그인 상태 복원만 처리

  // 🔥 로그인 상태 감지 및 localStorage 연동
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("Auth state changed:", user);
      if (user) {
        const userDocRef = doc(db, "User", user.uid);
        const userDoc = await getDoc(userDocRef);
        let fetchedNickname = "게스트";

        if (userDoc.exists()) {
          fetchedNickname = userDoc.data().nickname;
        }

        // ✅ Recoil 상태 업데이트
        const userData = {
          uid: user.uid,
          email: user.email,
          nickname: fetchedNickname,
          isLoggedIn: true,
        };

        setUser(userData);

        // ✅ localStorage에 저장 첫번째저장
        localStorage.setItem("user", JSON.stringify(userData));
        console.log(user);
      } else {
        setUser(null);
        localStorage.removeItem("user"); // 로그아웃 시 삭제
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  // 🔥 로그인 함수
  const onClickLogin = async (event) => {
    event.preventDefault();
    const trimmedEmail = loginEmail.trim();
    const trimmedPassword = loginPassword.trim();

    if (trimmedEmail.length === 0) {
      alert("이메일을 입력해주세요");
      return;
    }
    if (trimmedPassword.length === 0) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      alert("로그인 성공");

      const user = auth.currentUser;
      const userDocRef = doc(db, "User", user.uid);
      const userDoc = await getDoc(userDocRef);

      let fetchedNickname = "";
      if (userDoc.exists()) {
        fetchedNickname = userDoc.data().nickname;
      }

      // ✅ Recoil 상태 & localStorage 동시 업데이트
      const userData = {
        uid: user.uid,
        email: user.email,
        nickname: fetchedNickname,
        isLoggedIn: true,
      };
      setUser(userData);

      // localStorage에도 저장
      localStorage.setItem("user", JSON.stringify(userData));

      router.push("/main");
    } catch (error) {
      console.error("로그인 오류:", error.code, error.message);
      alert("로그인 실패: " + error.message);
    }
  };

  return (
    <LoginPresenter
      inputEl={inputEl}
      buttonState={buttonState}
      onClickButton={() => setButtonState(!buttonState)}
      onClickLogin={onClickLogin}
      loginEmail={loginEmail}
      loginPassword={loginPassword}
      onChangeID={onChangeID}
      onChangePassword={onChangePassword}
    />
  );
}
