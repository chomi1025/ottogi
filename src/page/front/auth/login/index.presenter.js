import Breadcrumb from "../../../../Componant/Main/breadcrumb/index";
import * as L from "./index.style";
import Link from "next/link";
import SnsLogin from "../../../../Componant/Main/snsLogin/index";
import { Inner } from "../../../../../styles/main";

export default function LoginPresenter(props) {
  return (
    <Inner width="1410px" margin="0 auto" padding={"25px 0 0"}>
      <Breadcrumb nav1={"로그인"} src1={"guest_login"} />

      <L.loginWrapper>
        <h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Logo.svg?alt=media&token=a9fa2351-6496-4cfd-a1f7-68fb5754f317"
            alt=""
          />
          엔 다 있다!
        </h2>

        <form onSubmit={props.onClickLogin}>
          <L.login_box>
            <div>
              <input
                type="text"
                placeholder="이메일"
                ref={props.inputEl}
                value={props.loginEmail}
                onChange={props.onChangeID}
              />
            </div>

            <div>
              <input
                type={props.buttonState ? "text" : "password"}
                placeholder="비밀번호"
                ref={props.inputEl}
                value={props.loginPassword}
                onChange={props.onChangePassword}
              />
              <L.showButton
                buttonState={props.buttonState}
                onClick={props.onClickButton}
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
