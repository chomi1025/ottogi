import Breadcrumb from "../../../../Component/Main/breadcrumb/index";
import * as L from "./index.style";
import Link from "next/link";
import SnsLogin from "../../../../Component/Main/snsLogin/index";
import { Inner } from "../../../../../styles/main";

export default function LoginPresenter(props) {
  return (
    <Inner width="1410px" margin="0 auto" padding={"25px 0 0"}>
      <Breadcrumb name={"로그인"} link={"/front/auth/login"} category={false} />

      <L.loginWrapper>
        <div>
          <img
            src="https://www.otokimall.com/static/imgs/front/cw/images/Logo_new.png"
            alt="오뚜기몰 로고"
          />
        </div>

        <form onSubmit={props.onClickLogin}>
          <L.login_box>
            <div>
              <input
                type="text"
                placeholder="이메일"
                value={props.loginEmail}
                onChange={props.onChangeID}
              />
            </div>

            <div>
              <input
                type={"password"}
                placeholder="비밀번호"
                value={props.loginPassword}
                onChange={props.onChangePassword}
              />
            </div>
          </L.login_box>

          <ul>
            <li>
              <Link href="/main">
                <a>아이디 찾기</a>
              </Link>
            </li>
            <li>
              <Link href="/main">
                <a>비밀번호 찾기</a>
              </Link>
            </li>
          </ul>

          <L.buttonWrapper>
            <button type="submit">로그인</button>

            <Link href="/front/member/join_guide">
              <a>회원가입</a>
            </Link>
          </L.buttonWrapper>
        </form>

        <SnsLogin />
      </L.loginWrapper>
    </Inner>
  );
}
