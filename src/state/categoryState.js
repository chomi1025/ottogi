import { atom } from "recoil";

export const mainCategoryState = atom({
  key: "mainCategoryState", // atom의 고유 키
  default: [], // 초기값은 빈 배열
});

export const subCategoryState = atom({
  key: "subCategoryState", // atom의 고유 키
  default: [], // 초기값은 빈 배열
});
