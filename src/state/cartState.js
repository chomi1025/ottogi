import { atom } from "recoil";

// 전체 장바구니 상태
export const cartState = atom({
  key: "cartState",
  default: [], // 전체 장바구니 항목
});

// 실온 장바구니 상태
export const roomTemperatureItemsState = atom({
  key: "roomTemperatureItemsState",
  default: [], // 실온 항목
});

// 냉장 장바구니 상태
export const refrigeratedItemsState = atom({
  key: "refrigeratedItemsState",
  default: [], // 냉장 항목
});
