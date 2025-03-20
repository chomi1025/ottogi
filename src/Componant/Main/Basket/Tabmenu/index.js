import styled from "@emotion/styled";
import { useState } from "react";

const TapmenuWrapper = styled.ul`
  width: 100%;
  font-size: 18px;
  display: flex;
`;

const Tap = styled.li`
  cursor: pointer;
  width: calc(100% / 3);
  text-align: center;
  padding: 16px 0;
  font-weight: ${(props) => props.active && "700"};
  color: ${(props) => props.active && "#fff"};
  background-color: ${(props) => props.active && "#D3233A"};
  border: ${(props) =>
    props.active ? "1px solid #D3233A" : "1px solid #e4e4e4"};

  &:first-of-type {
    border-radius: 6px 0 0 6px;
    margin-right: -1px;
  }

  &:last-of-type {
    border-radius: 0 6px 6px 0;
    margin-left: -1px;
  }
`;

export default function BasketComponent(props) {
  //상위컴포넌트에 이런식으로 작성
  // const [activeTab, setActiveTab] = useState(0); // activeTab을 숫자로 관리

  // const onClickActive = (number) => {
  //   setActiveTab(number); // 클릭한 번호로 상태 변경
  // };
  return (
    <>
      <TapmenuWrapper>
        <Tap
          active={props.activeTab === 0}
          onClick={() => props.onClickActive(0)}
        >
          일반배송&nbsp;{props.cart?.length}
        </Tap>
        <Tap
          active={props.activeTab === 1}
          onClick={() => props.onClickActive(1)}
        >
          선물하기🎁&nbsp;{0}
        </Tap>
        <Tap
          active={props.activeTab === 2}
          onClick={() => props.onClickActive(2)}
        >
          마일리지&nbsp;{0}
        </Tap>
      </TapmenuWrapper>
    </>
  );
}
