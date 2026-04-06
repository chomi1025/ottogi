import { atom } from "recoil";

export const mainCategoryState = atom({
  key: `mainCategoryState/${Math.random()}`,
  default: [],
});

export const subCategoryState = atom({
  key: `subCategoryState/${Math.random()}`,
  default: [],
});
