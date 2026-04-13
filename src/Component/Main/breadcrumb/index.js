import styled from "@emotion/styled";
import Link from "next/link";

const Breadcrumb_Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #aaaaaa;

  a {
    display: flex;
    align-items: center;
  }

  a + a::before {
    content: ">";
    margin: 0 10px;
    color: #aaaaaa;
  }

  a:last-child {
    color: #1d1d1b;
    font-weight: 700;
  }
`;

export default function Breadcrumb(props) {
  return (
    <>
      <Breadcrumb_Wrapper category={props.category}>
        <Link href="/main">
          <a>홈</a>
        </Link>

        {props.category && props.mainCategory?.id && (
          <Link href={`/front/product/category/${props.mainCategory.id}`}>
            <a>{props.mainCategory.name}</a>
          </Link>
        )}

        {props.category && props.subCategory?.id && (
          <Link
            href={`/front/product/category/${props.mainCategory?.id}/${props.subCategory.id}`}
          >
            <a>{props.subCategory.name}</a>
          </Link>
        )}

        {/* 카테고리 아닐때 */}
        {!props.category && props.link && (
          <Link href={props.link}>
            <a>{props.name}</a>
          </Link>
        )}
      </Breadcrumb_Wrapper>
    </>
  );
}
