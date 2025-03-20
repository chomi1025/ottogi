import Link from "next/link";
import * as L from "./index.style";
import { useRouter } from "next/router";

export default function SnsLogin() {
  const route = useRouter();

  return (
    <>
      <L.snsWrapper>
        {(route.route == "/front/member/join_guide" && (
          <L.JoinMessage>
            <span>SNS 계정으로 가입하기</span>
          </L.JoinMessage>
        )) ||
          (route.route == "/front/auth/login" && (
            <L.LoginMessage>SNS 계정으로 로그인</L.LoginMessage>
          ))}

        <div>
          <Link href="main">
            <a>
              <span />
              {route.route == "/front/member/join_guide" && <>카카오톡</>}
            </a>
          </Link>

          <Link href="main">
            <a>
              <span />
              {route.route == "/front/member/join_guide" && <>네이버</>}
            </a>
          </Link>

          <Link href="main">
            <a>
              <span />
              {route.route == "/front/member/join_guide" && <>애플</>}
            </a>
          </Link>
        </div>

        <br />

        {(route.route == "/front/member/join_guide" && (
          <L.customerMessage>
            이미 회원이신가요?
            <Link href="/front/auth/login">
              <a>로그인</a>
            </Link>
          </L.customerMessage>
        )) ||
          (route.route == "/front/auth/login" && (
            <L.employeeMessage>
              <span>!</span>임직원 간편로그인은
              <Link href="main">
                <a>여기</a>
              </Link>
              를 확인해주세요
            </L.employeeMessage>
          ))}
      </L.snsWrapper>
    </>
  );
}
