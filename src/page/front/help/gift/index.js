import Link from "next/link";
import * as G from "./index.style";
import Image from "next/image";

export default function GiftUI() {
  return (
    <G.Wrapper>
      <h3>선물하기안내</h3>

      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fhelp%2Fgift%2Fimg-cs-top.png?alt=media&token=af331e1c-384c-4b5b-94c0-844a53585d5c"
        }
        alt="선물하기"
        width={1050}
        height={280}
      />

      <div>
        <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fhelp%2Fgift%2Fimg-cs-gift-title1.png?alt=media&token=a62e9e41-3eff-4ebb-9db7-b4d127a12b88"
            alt="선물하기"
            width={384}
            height={58}
            style={{ display: "inline-block" }}
          />
        </div>

        <Image
          src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fhelp%2Fgift%2Fimg-cs-gift-step1.png?alt=media&token=cf3e9aed-3d40-4915-9af9-6efbd0422044"
          alt="선물하기"
          width={1050}
          height={621}
        />
      </div>

      <div>
        <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fhelp%2Fgift%2Fimg-cs-gift-title2.png?alt=media&token=9a5d4eb6-857a-449d-98e6-c7c50c60718a"
            alt="선물하기"
            width={646}
            height={95}
            style={{ display: "inline-block" }}
          />
        </div>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fhelp%2Fgift%2Fimg-cs-gift-step2.png?alt=media&token=e0f16a2f-7248-4362-9e70-d1985cf74d83"
          alt="선물하기"
          width={1050}
          height={669}
        />
      </div>

      <div>
        <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fhelp%2Fgift%2Fimg-cs-gift-title3.png?alt=media&token=f7337b10-4adb-411a-a54e-9612bb6ddb44"
            alt="선물하기"
            width={388}
            height={94}
            style={{ display: "inline-block" }}
          />
        </div>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fhelp%2Fgift%2Fimg-cs-gift-step3.png?alt=media&token=a23cd775-447e-4687-9afe-670b63da4bc7"
          alt="선물하기"
          width={1050}
          height={1212}
        />
      </div>

      <ul>
        <li>선물하기는 오뚜기몰 회원만 이용 가능한 서비스입니다.</li>
        <li>
          선물한 상품의 교환/반품지 수정은 불가능하며 원 배송지로만 교환/반품이
          가능합니다.
        </li>
      </ul>

      <figure>
        <Link href="/front/product/brand">
          <a>
            <span>지금 선물하기</span>
          </a>
        </Link>
      </figure>
    </G.Wrapper>
  );
}
