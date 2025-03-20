import CardComponent from "@/Componant/Main/Mypage/Card";
import * as G from "./index.style";
import Link from "next/link";

export default function MypageLoginMain() {
  return (
    <G.Inner>
      <CardComponent />

      <G.Contents>
        <G.Section>
          <G.TitleWrapper>
            <h3>주문/배송조회</h3>

            <Link href="/more">
              <a>더보기</a>
            </Link>
          </G.TitleWrapper>

          {/* 주문/배송조회 */}
          <G.ContentsWrapper>
            <div>
              <p>작성된 상품후기가 없습니다.</p>
            </div>
          </G.ContentsWrapper>
        </G.Section>

        <G.Section>
          <G.TitleWrapper>
            <h3>상품후기</h3>

            <Link href="/more">
              <a>더보기</a>
            </Link>
          </G.TitleWrapper>

          {/* 주문/배송조회 */}
          <G.ContentsWrapper>
            <div>
              <p>작성된 상품후기가 없습니다.</p>
            </div>
          </G.ContentsWrapper>
        </G.Section>

        <G.Section>
          <G.TitleWrapper>
            <h3>찜리스트</h3>

            <Link href="/more">
              <a>더보기</a>
            </Link>
          </G.TitleWrapper>

          {/* 주문/배송조회 */}
          <G.ContentsWrapper>
            <div>
              <p>작성된 상품후기가 없습니다.</p>
            </div>
          </G.ContentsWrapper>
        </G.Section>

        <G.Section>
          <G.TitleWrapper>
            <h3>자주 구매한 상품</h3>

            <Link href="/more">
              <a>더보기</a>
            </Link>
          </G.TitleWrapper>

          {/* 주문/배송조회 */}
          <G.ContentsWrapper>
            <div>
              <p>작성된 상품후기가 없습니다.</p>
            </div>
          </G.ContentsWrapper>
        </G.Section>

        <G.Section>
          <G.TitleWrapper>
            <h3>1:1문의</h3>

            <Link href="/more">
              <a>더보기</a>
            </Link>
          </G.TitleWrapper>

          {/* 주문/배송조회 */}
          <G.ContentsWrapper>
            <div>
              <p>작성된 상품후기가 없습니다.</p>
            </div>
          </G.ContentsWrapper>
        </G.Section>
      </G.Contents>
    </G.Inner>
  );
}
