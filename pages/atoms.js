import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState", // 고유한 ID
  default: "", // 기본값
});
