import Link from "next/link";
import * as M from "./index.style";

export default function MypageSideLogin() {
  return (
    <M.Wrapper>
      <M.Inner>
        <h3>마이페이지</h3>

        <ul>
          <li>
            <strong>쇼핑정보</strong>
          </li>
          <li>
            <Link href="/front/mypage/order_delivery">
              <a>주문배송조회</a>
            </Link>
          </li>

          <li>
            <Link href="/front/mypage/order_claim">
              <a>취소/교환/반품 조회</a>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <strong>혜택정보</strong>
          </li>
          <li>
            <Link href="/front/mypage/benefit_smoney">
              <a>마일리지</a>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <strong>쇼핑활동</strong>
          </li>
          <li>
            <Link href="/front/mypage/shop_review">
              <a>상품후기</a>
            </Link>
          </li>
          <li>
            <Link href="/front/mypage/shop_wish">
              <a>찜리스트</a>
            </Link>
          </li>
          <li>
            <Link href="/front/mypage/often_order_prod">
              <a>자주 구매 상품</a>
            </Link>
          </li>
          <li>
            <Link href="/front/mypage/restock_alarm">
              <a>재입고 알림 신청</a>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <strong>회원정보</strong>
          </li>
          <li>
            <Link href="/front/mypage/my_modify">
              <a>회원정보 변경</a>
            </Link>
          </li>
          <li>
            <Link href="/front/mypage/my_address">
              <a>배송지 관리</a>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <strong>문의</strong>
          </li>

          <li>
            <Link href="/front/mypage/cs_qna">
              <a>상품문의</a>
            </Link>
          </li>

          <li>
            <Link href="/front/help/bulk_purchase">
              <a>대량주문문의</a>
            </Link>
          </li>

          <li>
            <Link href="/front/mypage/cs_letter">
              <a>뚜밀리숲 확인</a>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <strong>공지</strong>
          </li>
          <li>
            <Link href="/front/help/notice">
              <a>공지사항</a>
            </Link>
          </li>
          <li>
            <Link href="/front/help/faq">
              <a>자주 묻는 질문</a>
            </Link>
          </li>
        </ul>
      </M.Inner>
    </M.Wrapper>
  );
}
