import Link from "next/link";
import * as L from "./index.style";
import { useRouter } from "next/router";

export default function LayoutHelp({ FAQ, children }) {
  const router = useRouter();
  const address = router.route;
  const pathSegments = address.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1]; // 마지막 요소 추출
  console.log("FAQ의값은", lastSegment);

  return (
    <L.wrapper lastSegment={lastSegment}>
      <L.sideMenu lastSegment={lastSegment}>
        <L.inner>
          <h3>고객센터</h3>

          <ul>
            <L.menu address="/front/help/faq" currentPath={address}>
              <Link href="/front/help/faq">
                <a>자주 묻는 질문</a>
              </Link>
            </L.menu>

            <L.menu address="/front/help/order_policy" currentPath={address}>
              <Link href="/front/help/order_policy">
                <a>배송정책안내</a>
              </Link>
            </L.menu>

            <L.menu address="/front/help/gift" currentPath={address}>
              <Link href="/front/help/gift">
                <a>선물하기안내</a>
              </Link>
            </L.menu>
          </ul>

          <ul>
            <li>고객센터</li>
            <li>
              <strong>080-433-8888</strong>
            </li>
            <li>
              월 - 금 09:00 - 17:00
              <br /> (점심시간 PM 12:30 - PM
              <br /> 13:30)
              <br /> 주말 및 공휴일 휴무
            </li>
          </ul>
        </L.inner>
      </L.sideMenu>

      {children}
    </L.wrapper>
  );
}
