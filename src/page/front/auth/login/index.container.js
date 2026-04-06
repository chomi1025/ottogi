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

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      console.log("복원된 userData:", userData);
      setUser(userData);
    }
  }, [setUser]);

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

        const userData = {
          uid: user.uid,
          email: user.email,
          nickname: fetchedNickname,
          isLoggedIn: true,
        };

        setUser(userData);

        localStorage.setItem("user", JSON.stringify(userData));
        console.log(user);
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, [setUser]);

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

      const userData = {
        uid: user.uid,
        email: user.email,
        nickname: fetchedNickname,
        isLoggedIn: true,
      };
      setUser(userData);

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
