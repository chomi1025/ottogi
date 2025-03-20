import { getApp, getApps, initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ9viMBWKyoD3W9RF1unS3Pqd9sK_0RmI",
  authDomain: "project-90a5b.firebaseapp.com",
  projectId: "project-90a5b",
  storageBucket: "project-90a5b.appspot.com",
  messagingSenderId: "1009566279348",
  appId: "1:1009566279348:web:b1246c6aa0ab8439fd19e1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app); // 데이터베이스 담당
const auth = getAuth(app); // 인증 담당

// 세션 유지를 설정하는 부분을 auth 초기화 이후로 이동
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // 세션 유지 설정이 완료된 후 로그인을 확인하고, 상태가 변경될 때마다 반영
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("사용자 로그인 상태:");
      } else {
        console.log("사용자 로그아웃 상태");
      }
    });
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

// Firebase에서 데이터 가져오는 함수
const fetchUsers = async () => {
  try {
    const userCollection = collection(db, "User"); // 'User' 컬렉션
    const userSnapshot = await getDocs(userCollection);
    const userList = userSnapshot.docs.map((doc) => doc.data()); // 각 문서의 데이터 추출
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// 호출
fetchUsers();

export { auth, db };
