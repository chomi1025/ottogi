import Link from "next/link";
import * as H from "./index.style";
import { Inner } from "../../../styles/main";
import SearchComponent from "../../Component/Header/Search/index";
import IconComponent from "../../Component/Header/Icon/index";
import CategoryComponent from "../../Component/Header/Category/index";
import Image from "next/image";

export default function LayoutHeader() {
  return (
    <H.Inner>
      {/* 로고,검색창,아이콘 등 상단바 */}
      <H.Top top={true}>
        <h1>
          <Link href="/main">
            <a>
              <Image width={171} height={32} src={"/Layout/Header/Logo.svg"} />
            </a>
          </Link>
        </h1>

        {/* 검색 컴포넌트 */}
        <SearchComponent />

        {/* 로그인,마이페이지,장바구니 */}
        <IconComponent />
      </H.Top>

      {/* 카테고리, 메뉴등 하단바 */}
      <H.Bottom>
        <Inner width={"1410px"} display={"flex"}>
          <H.Category_All>
            <span>전체 카테고리</span>

            {/* 카테고리 컴포넌트 */}
            <CategoryComponent />
          </H.Category_All>

          <H.Category_list>
            <H.category_new>
              <Link href="/front/product/new">
                <a>신제품</a>
              </Link>
            </H.category_new>

            <H.category_gift>
              <Link href="/">
                <a>숨냠템</a>
              </Link>
            </H.category_gift>

            <H.category_only>
              <Link href="/">
                <a>only</a>
              </Link>
            </H.category_only>

            <H.category_event>
              <Link href="/front/promo/event">
                <a>이벤트</a>
              </Link>
            </H.category_event>

            <H.category_best>
              <Link href="/front/product/best">
                <a>베스트</a>
              </Link>
            </H.category_best>
          </H.Category_list>
        </Inner>
      </H.Bottom>
    </H.Inner>
  );
}
