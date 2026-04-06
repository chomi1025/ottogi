import { Inner } from "../../../../../styles/main";
import Breadcrumb from "./../../../../Component/Main/breadcrumb/index";
import * as J from "./index.style";
import Link from "next/link";
import SnsLogin from "./../../../../Component/Main/snsLogin/index";
import Image from "next/image";
import { styled } from "@emotion/styled";

export default function JoinGuideUI() {
  return (
    <>
      <Inner width={"1410px"}>
        <Breadcrumb link={"/front/member/join_guide"} name={"회원가입"} />

        <J.Wrapper>
          <h2>
            오뚜기의 모든 것<br /> 오뚜기몰엔 다 있습니다.
          </h2>
          <p>우리 동네에 없는 상품부터 어제 갓 나온 상품까지!</p>

          <div>
            <J.ItemWrapper>
              <J.Item>
                <Image
                  src={
                    "https://www.ottogimall.co.kr/static/imgs/front/cw/images/login/bg_intro_01.png"
                  }
                  width={60}
                  height={60}
                />
                <p>
                  신제품과 Only
                  <br /> 제품을 가장 먼저
                </p>
              </J.Item>

              <J.Item>
                <Image
                  src={
                    "https://www.ottogimall.co.kr/static/imgs/front/cw/images/login/bg_intro_02.png"
                  }
                  width={60}
                  height={60}
                />
                <p>
                  다양한 할인과
                  <br /> 이벤트 참여 혜택
                </p>
              </J.Item>

              <J.Item>
                <Image
                  src={
                    "https://www.ottogimall.co.kr/static/imgs/front/cw/images/login/bg_intro_03.png"
                  }
                  width={60}
                  height={60}
                />
                <p>
                  오뚜기 마일리지
                  <br /> 적립 및 사용
                </p>
              </J.Item>
            </J.ItemWrapper>

            <Link href="/front/member/join">
              <a>회원가입</a>
            </Link>

            <SnsLogin />
          </div>
        </J.Wrapper>
      </Inner>
    </>
  );
}
