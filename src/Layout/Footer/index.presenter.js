import Link from "next/link";
import * as F from "./index.style";

export default function LayoutHeaderUI() {
  return (
    <F.Footer>
      <F.Inner>
        <F.Top>
          <F.Top_left>
            <F.Top_left_list>
              <li>
                <Link href="/main">
                  <a>오뚜기몰 존재이유</a>
                </Link>
              </li>
              <li>
                <Link href="/front/help/main">
                  <a>고객센터</a>
                </Link>
              </li>
              <li>
                <Link href="/main">
                  <a>이용약관</a>
                </Link>
              </li>
              <li>
                <Link href="/main">
                  <a>개인정보 처리방침</a>
                </Link>
              </li>
              <li>
                <Link href="/main">
                  <a>대량주문문의</a>
                </Link>
              </li>
            </F.Top_left_list>

            <F.Top_left_address>
              <p>
                대표이사 황성만
                <span>14060 경기 안양시 동안구 흥안대로 405 평촌동</span>
              </p>

              <p>
                사업자등록번호 138-81-03238
                <Link href="/main">
                  <a>사업자정보확인</a>
                </Link>
                <span>통신판매업신고 제 2003-경기안양-169호</span>
              </p>

              <p>
                건강기능식품 판매업 신고 제 2007-00002호
                <span>개인정보 보호책임 및 청소년보호 책임자 서흥덕</span>
              </p>
            </F.Top_left_address>

            <F.Top_left_nice>
              <p>Nice 구매안전서비스</p>

              <div>
                <span>
                  고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서
                  가입한
                  <br /> 구매안전 (에스크로) 서비스를 이용하실 수 있습니다.
                  <Link href="/main">
                    <a>서비스 가입사실 확인</a>
                  </Link>
                </span>

                <span />
              </div>
            </F.Top_left_nice>
          </F.Top_left>

          <F.Top_right>
            <p>고객센터</p>
            <h3>080-433-8888</h3>
            <div>
              <p>
                월~금 09:00~17:00
                <br />
                점심시간 12:30~13:30
                <br />
                토/일/공휴일 휴무
              </p>
            </div>

            <F.Top_right_icons>
              <li>
                <Link href="/main">
                  <a
                    style={{
                      background:
                        "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/footer_icon_insta.png?alt=media&token=457c0ffd-df31-4492-aa36-2c70792fcc63)no-repeat center center",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link href="/main">
                  <a
                    style={{
                      background:
                        "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/footer_icon_blog.png?alt=media&token=718a0f6d-bb8b-48e8-afe5-41a0b8e3f27f)no-repeat center center",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link href="/main">
                  <a
                    style={{
                      background:
                        "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/footer_icon_insta.png?alt=media&token=457c0ffd-df31-4492-aa36-2c70792fcc63)no-repeat center center",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link href="/main">
                  <a
                    style={{
                      background:
                        "url(https://www.ottogimall.co.kr/static/imgs/front/cw/images/icon_youtube.png)no-repeat center center",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </li>
            </F.Top_right_icons>
          </F.Top_right>
        </F.Top>
        <F.Bottom>아래쪽</F.Bottom>
      </F.Inner>
    </F.Footer>
  );
}
