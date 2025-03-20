import Link from "next/link";
import * as N from "./index.style";

export default function NoResult() {
  return (
    <N.ResultWrapper>
      <h5>
        <strong>{}asd</strong> 검색결과가 없습니다. <br /> 이렇게 검색해 보시면
        어때요?
      </h5>

      <p>
        찾으시는 상품이 없을 때 1:1 문의로 알려주시면
        <br /> 빠르게 안내해 드릴게요.
      </p>

      <div>
        <Link href="/main">
          <a>1:1 문의하기</a>
        </Link>
      </div>
    </N.ResultWrapper>
  );
}
