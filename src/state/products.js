import { atom } from "recoil";

export const productsState = atom({
  key: "productsState", // 고유한 키
  default: [], // 초기값
});
