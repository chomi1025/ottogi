import * as F from "./index.style";
import { useState } from "react";

export default function FAQUI() {
  const [openTabIndex, setOpenTabIndex] = useState(null);

  const onClickTab = (index) => {
    setOpenTabIndex(openTabIndex === index ? null : index); // 이미 열린 탭을 클릭하면 닫기
  };

  return (
    <F.Wrapper>
      <h3>자주 묻는 질문</h3>
      <input type="text" placeholder="궁금하신 내용을 입력해 주세요." />

      <ul>
        <li>
          <span>전체</span>
        </li>
        <li>
          <span>회원</span>
        </li>
        <li>
          <span>상품</span>
        </li>
        <li>
          <span>주문결제</span>
        </li>
        <li>
          <span>배송</span>
        </li>
        <li>
          <span>교환/반품/환불</span>
        </li>
        <li>
          <span>쿠폰/마일리지</span>
        </li>
        <li>
          <span>기타</span>
        </li>
      </ul>

      <F.StyledUl>
        <li
          className={openTabIndex === 1 ? "active" : "inactive"}
          onClick={() => onClickTab(1)}
        >
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>

          {openTabIndex == 1 && (
            <div>
              <em>A.</em>
              <p>
                뚜밀리는 오뚜기몰 팬 애칭 공모전에서 당선된 이름으로 오뚜기몰을
                사랑하는 팬 여러분들을 지칭하는 말이예요!
                <br />
                <br />
                오뚜기+패밀리로 오뚜기몰과 팬들은 한 가족이라는 의미와 함께
                <br />
                오뚜기몰 팬들이 가족과 함께 맛있는 한끼를 먹을 수 있도록
                <br /> 좋은 상품을 판매하는 곳이라는 뜻입니다!
                <br />
                <br /> 우리 뚜밀리 여러분들과 오래오래 행복하게 지내고 싶어요!
                <br /> 자주 만나요 뚜밀리여러분!​
              </p>
            </div>
          )}
        </li>

        <li
          className={openTabIndex === 2 ? "active" : "inactive"}
          onClick={() => onClickTab(2)}
        >
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>

          {openTabIndex == 2 && (
            <div>
              <em>A.</em>
              <p>2번</p>
            </div>
          )}
        </li>
        <li className={openTabIndex === 3 ? "active" : "inactive"}>
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>
        </li>
        <li>
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>
        </li>
        <li>
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>
        </li>
        <li>
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>
        </li>
        <li>
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>
        </li>
        <li>
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>
        </li>
        <li>
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>
        </li>
        <li>
          <button>
            <em>Q.</em>[회원] 뚜밀리가 무엇인가요?
          </button>
        </li>
      </F.StyledUl>
    </F.Wrapper>
  );
}
