"use client"; // 이 컴포넌트만 클라이언트 렌더링

import { useRecoilValue } from "recoil";
import { popupState } from "../../../state/cartPopupState";
import styled from "@emotion/styled";

const PopupContainer = styled.div`
  position: fixed;
  z-index: 1003;
  left: 50%;
  bottom: 30px;
  display: inline-block;
  padding: 22px 50px;
  border-radius: 100px;
  background-color: rgba(211, 35, 58, 0.9);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07);
  transform: translateX(-50%);
  transition: 0.3s;

  p {
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    white-space: nowrap;
  }
`;

export default function MyPopup() {
  const isPopupVisible = useRecoilValue(popupState);

  if (!isPopupVisible) return null;

  return (
    <PopupContainer>
      <p>상품이 장바구니에 담겼습니다.</p>
    </PopupContainer>
  );
}
