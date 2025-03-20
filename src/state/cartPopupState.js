import { atom } from "recoil";

export const popupState = atom({
  key: "popupState",
  default: false, // 초기 값은 숨김 상태
});
