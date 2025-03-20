import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    uid2: "123",
    email: "",
    nickname: "",
    isLoggedIn: false, // 초기값 설정
    phoneNumber: "",
    primaryAddress: "",
    detailedAddress: "",
    DOB: "", // 생일
    name: "", // 이름
  },
});

console.log(userState);
