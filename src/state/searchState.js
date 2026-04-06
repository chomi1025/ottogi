import { atom } from "recoil";

//인풋값
export const searchTermState = atom({
  key: `searchTermState/${Math.random()}`,
  default: "",
});
