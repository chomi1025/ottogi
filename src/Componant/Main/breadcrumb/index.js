import styled from "@emotion/styled";
import Link from "next/link";

const Breadcrumb_Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #aaaaaa;

  a:nth-of-type(2) {
    color: #1d1d1b;
  }

  a:nth-of-type(3) {
    color: #1d1d1b;
  }
`;

const Arrow = styled.span`
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_arrow_right_12.png?alt=media&token=1aa1194b-a58d-4e6a-bcfa-be5eea3edd24)
    no-repeat center center;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 10px;
`;

export default function Breadcrumb(props) {
  return (
    <>
      <Breadcrumb_Wrapper>
        <Link href="/main">
          <a>홈</a>
        </Link>

        <Arrow />

        {/* 카테고리 아닐경우 */}
        {props.category || (
          <Link href={props.link}>
            <a>{props?.name}</a>
          </Link>
        )}

        {/* 메인 카테고리 */}
        {props.category && (
          <Link href={"/front/product/category/" + props.mainCategory?.id}>
            <a>{props.mainCategory?.name}</a>
          </Link>
        )}

        {/* 서브 카테고리 */}
        {props.subCategory && (
          <>
            <Arrow />
            <Link
              href={
                "/front/product/category/" +
                props.mainCategory?.id +
                "/" +
                props.subCategory?.id
              }
            >
              <a>{props.subCategory?.name}</a>
            </Link>
          </>
        )}
      </Breadcrumb_Wrapper>
    </>
  );
}
