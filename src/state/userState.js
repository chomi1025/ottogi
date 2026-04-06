import { atom } from "recoil";

export const userState = atom({
  key: `userState/${Math.random()}`,
  default: {
    uid2: "123",
    email: "",
    nickname: "",
    isLoggedIn: false,
    phoneNumber: "",
    primaryAddress: "",
    detailedAddress: "",
    DOB: "",
    name: "",
  },
});
