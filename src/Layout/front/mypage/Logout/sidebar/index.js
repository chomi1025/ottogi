import Link from "next/link";
import * as S from "./index.style";

export default function MypageSideLogout(props) {
  return (
    <S.Inner>
      <h2>마이페이지</h2>

      <ul>
        <li>
          <strong>쇼핑정보</strong>
        </li>
        <li>
          <Link href="/front/auth/guest">
            <a>주문배송조회</a>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <strong>문의</strong>
        </li>

        <li>
          <Link href="/front/help/bulk_purchase">
            <a>대량주문문의</a>
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

        <li>
          <Link href="/front/help/introduction">
            <a>오뚜기몰 소개</a>
          </Link>
        </li>

        <li>
          <Link href="/front/help/main">
            <a>고객센터</a>
          </Link>
        </li>
      </ul>
    </S.Inner>
  );
}
