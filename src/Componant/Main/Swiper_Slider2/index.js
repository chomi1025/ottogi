import Link from "next/link";
import * as S from "./index.style";

export default function SwiperSlide2(props) {
  return (
    <S.Inner new={props.new} how={props.how} only={props.only}>
      {props.more ? (
        <S.Title_Wrapper>
          <S.Title>{props.title}</S.Title>
          <Link href="/more">
            <a>더보기</a>
          </Link>
        </S.Title_Wrapper>
      ) : (
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          {props.title}
        </h2>
      )}
      <div
        style={{
          background: "black",
          width: "calc(100% / 4 - 20px)",
          height: "300px",
        }}
      ></div>
    </S.Inner>
  );
}
