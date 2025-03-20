import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "@/state/userState";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function AuthProvider({ children }) {
  const setAuthState = useSetRecoilState(userState);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인한 사용자 정보 업데이트
        setAuthState({
          uid: user.uid,
          email: user.email,
          nickname: user.displayName, // 닉네임이 있을 경우
        });
      } else {
        // 로그아웃 시 상태 초기화
        setAuthState({});
      }
    });

    return () => unsubscribe();
  }, [auth, setAuthState]);

  return children; // 자식 컴포넌트를 렌더링
}
