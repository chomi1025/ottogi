import { atom } from "recoil";

export const popupState = atom({
  key: `popupState/${Math.random()}`,
  default: false,
});
