import Link from "next/link";
import * as H from "./index.style";

export default function HelpmainUl() {
  return (
    <H.Wrapper>
      <H.CenterSearch>
        <h3>안녕하세요 고객님, 무엇을 도와드릴까요?</h3>

        <input type="text" placeholder="궁금하신 내용을 입력해 주세요." />

        <div>
          <strong>추천 검색어</strong>
          <ul>
            <li>회원</li>
            <li>상품</li>
            <li>주문결제</li>
            <li>배송</li>
            <li>교환/반품/환불</li>
            <li>쿠폰/마일리지</li>
            <li>기타</li>
          </ul>
        </div>
      </H.CenterSearch>

      <H.ServiceLinks>
        <h4>서비스 바로가기</h4>

        <ul>
          <li>
            <Link href="">
              <a>주문배송조회</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>문의하기</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>배송정책안내</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>선물하기안내</a>
            </Link>
          </li>
        </ul>
      </H.ServiceLinks>

      <H.QATop5>
        <Link href="/front/help/faq">
          <a>자주 묻는 질문 TOP5</a>
        </Link>

        <ul>
          <li>
            <Link href="">
              <a>
                <em>Q.</em>
                <span>
                  [회원]
                  <br />
                  뚜밀리가 무엇인가요?
                </span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a>
                <em>Q.</em>
                <span>
                  [주문결제]
                  <br />
                  이전 주문 내역을 보고 싶어요.
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                <em>Q.</em>
                <span>
                  [회원]
                  <br />
                  기존 오뚜기몰 회원인데 로그인이 안돼요.
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                <em>Q.</em>
                <span>
                  [주문결제]
                  <br />
                  30,000원 이상 구매했는데 무료배송이 아니예요.
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                <em>Q.</em>
                <span>
                  [회원]
                  <br />
                  회원등급이 궁금해요.
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </H.QATop5>
    </H.Wrapper>
  );
}
