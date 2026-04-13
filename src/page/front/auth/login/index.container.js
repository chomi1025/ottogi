import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import LoginPresenter from "./index.presenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { userState } from "@/state/userState";
import { useRecoilState } from "recoil";

export default function LoginContainer() {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const [loginEmail, setloginEmail] = useState(""); //이메일
  const [loginPassword, setLoginPassword] = useState(""); //비밀번호

  const onChangeID = (event) => setloginEmail(event.target.value);
  const onChangePassword = (event) => setLoginPassword(event.target.value);

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

      router.push("/main");
    } catch (error) {
      console.error("로그인 오류:", error.code, error.message);
      alert("로그인 실패: " + error.message);
    }
  };

  return (
    <LoginPresenter
      onClickLogin={onClickLogin}
      loginEmail={loginEmail}
      loginPassword={loginPassword}
      onChangeID={onChangeID}
      onChangePassword={onChangePassword}
    />
  );
}
