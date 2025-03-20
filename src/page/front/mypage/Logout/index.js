import Link from "next/link";
import * as M from "./index.style";

export default function MypageLogoutMain() {
  return (
    <>
      <M.Contents>
        <span />

        <div>
          <Link href="/front/auth/login">
            <a>끝없는 혜택보기</a>
          </Link>

          <Link href="/front/auth/login">
            <a>로그인/회원가입 하기</a>
          </Link>
        </div>
      </M.Contents>
    </>
  );
}
