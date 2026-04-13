import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "./../../state/userState";
import { db, auth } from "./../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const AuthProvider = ({ children }) => {
  const setUserInfo = useSetRecoilState(userState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userDoc = doc(db, "User", user.uid);
        getDoc(userDoc).then((docSnap) => {
          if (docSnap.exists()) {
            setUserInfo((prevState) => ({
              ...prevState,
              ...docSnap.data(),
            }));
          } else {
            console.log("No such document!");
          }
        });
      } else {
        setUserInfo(null);
      }
    });

    return () => unsubscribe();
  }, [setUserInfo]);

  return <>{children}</>;
};

export default AuthProvider;
