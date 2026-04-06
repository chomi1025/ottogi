import { atom } from "recoil";

// 전체 장바구니
export const cartState = atom({
  key: `cartState/${Math.random()}`,
  default: [],
});

// 실온 장바구니
export const roomTemperatureItemsState = atom({
  key: `roomTemperatureItemsState/${Math.random()}`,
  default: [],
});

// 냉장 장바구니
export const refrigeratedItemsState = atom({
  key: `refrigeratedItemsState/${Math.random()}`,
  default: [],
});
