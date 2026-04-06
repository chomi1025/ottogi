import Link from "next/link";
import * as S from "./index.style";
import ProductWrapper from "../Product_Wrapper";

export default function SwiperSlide2(props) {
  return (
    <S.Inner new={props.new} how={props.how} only={props.only}>
      <S.Title_Wrapper>
        <S.Title>{props.title}</S.Title>

        <Link href={props.link}>
          <a>더보기</a>
        </Link>
      </S.Title_Wrapper>

      <ProductWrapper main={true} products={props.products} />
    </S.Inner>
  );
}
