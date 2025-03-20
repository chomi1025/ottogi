import Breadcrumb from "./../../../../Componant/Main/breadcrumb/index";
import * as E from "./index.style";
import { Inner, Title } from "../../../../../styles/main";
import Link from "next/link";
import Image from "next/image";

export default function EventUI(props) {
  return (
    <Inner width={"1410px"} padding={"25px 0 130px"}>
      <Breadcrumb breadcrumb={props.breadcrumb} />

      <Title padding="40px 0 120px">이벤트</Title>

      <E.Banner_Wrapper>
        <h3>진행중인 이벤트</h3>

        <ul>
          {props.eventBanners.map((banner) => (
            <li key={banner?.id}>
              <Link href={banner?.toLink}>
                <a>
                  <Image
                    src={banner?.link}
                    alt={banner?.explanation}
                    width={1410}
                    height={210}
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </E.Banner_Wrapper>
    </Inner>
  );
}
