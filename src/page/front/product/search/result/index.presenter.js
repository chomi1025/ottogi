import Link from "next/link";
import * as R from "./index.style";
import ProductWrapper from "./../../../../../Componant/Main/Product_Wrapper/index";

export default function ResultPresenter(props) {
  return (
    <>
      <R.Inner>
        <R.Left>
          <R.TopMenu>
            <h3>필터</h3>
            <Link href="/main">
              <a>초기화</a>
            </Link>
          </R.TopMenu>

          <R.Option>
            <R.Option_Top_Wrapper onClick={() => props.onclickMenu(0)}>
              <h4>카테고리</h4>
              <R.HideMenu menu={props.menu === 0} />
            </R.Option_Top_Wrapper>

            {props.menu === 0 ? (
              ""
            ) : (
              <ul>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  전체
                </li>
                <li>{}</li>
              </ul>
            )}
          </R.Option>

          <R.Option>
            <R.Option_Top_Wrapper onClick={() => props.onclickMenu(1)}>
              <h4>브랜드</h4>
              <R.HideMenu menu={props.menu === 1} />
            </R.Option_Top_Wrapper>

            {props.menu === 1 ? (
              ""
            ) : (
              <ul>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  전체
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  {}asd
                </li>
              </ul>
            )}
          </R.Option>

          <R.Option>
            <R.Option_Top_Wrapper onClick={() => props.onclickMenu(2)}>
              <h4>혜택</h4>
              <R.HideMenu menu={props.menu === 2} />
            </R.Option_Top_Wrapper>
            {props.menu === 2 ? (
              ""
            ) : (
              <ul>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  전체
                </li>
                <li>{}</li>
              </ul>
            )}
          </R.Option>

          <R.Option>
            <R.Option_Top_Wrapper onClick={() => props.onclickMenu(3)}>
              <h4>품절여부</h4>
              <R.HideMenu menu={props.menu === 3} />
            </R.Option_Top_Wrapper>
            {props.menu === 3 ? (
              ""
            ) : (
              <ul>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  품절제외
                </li>
              </ul>
            )}
          </R.Option>

          <R.Option>
            <R.Option_Top_Wrapper onClick={() => props.onclickMenu(4)}>
              <h4>보관온도</h4>
              <R.HideMenu menu={props.menu === 4} />
            </R.Option_Top_Wrapper>
            {props.menu === 4 ? (
              ""
            ) : (
              <ul>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  실온
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  냉장냉동
                </li>
              </ul>
            )}
          </R.Option>

          <R.Option>
            <R.Option_Top_Wrapper onClick={() => props.onclickMenu(5)}>
              <h4>상품구성</h4>
              <R.HideMenu menu={props.menu === 5} />
            </R.Option_Top_Wrapper>
            {props.menu === 5 ? (
              ""
            ) : (
              <ul>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  낱개상품
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  묶음상품
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  대용량상품
                </li>
              </ul>
            )}
          </R.Option>

          <R.Option>
            <R.Option_Top_Wrapper onClick={() => props.onclickMenu(6)}>
              <h4>별점</h4>
              <R.HideMenu menu={props.menu === 6} />
            </R.Option_Top_Wrapper>
            {props.menu === 6 ? (
              ""
            ) : (
              <ul>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  ★★★★★
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  ★★★★
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  ★★★
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  ★★
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />★
                </li>
              </ul>
            )}
          </R.Option>

          <R.Option>
            <R.Option_Top_Wrapper onClick={() => props.onclickMenu(7)}>
              <h4>가격</h4>
              <R.HideMenu menu={props.menu === 7} />
            </R.Option_Top_Wrapper>
            {props.menu === 7 ? (
              ""
            ) : (
              <ul>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  0원 ~ 10,000원
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  20,000원 ~ 30,000원
                </li>
                <li>
                  <input type="checkbox" id="chk" />
                  <label for="chk" />
                  30,000원 ~
                </li>
              </ul>
            )}
          </R.Option>
        </R.Left>

        <R.Right>
          <R.Search_result_wrapper>
            <span>
              <strong>{props.keyword}</strong>검색결과
            </span>
          </R.Search_result_wrapper>

          <R.Recommend_Wrapper>
            <h6>추천검색어</h6>

            <ul>
              <li>
                <Link href="/main">
                  <a>카츠</a>
                </Link>
              </li>
              <li>
                <Link href="/main">
                  <a>zkfp</a>
                </Link>
              </li>
            </ul>
          </R.Recommend_Wrapper>

          <R.Main_contents_wrapper>
            <R.TabMenu_wrapper>
              <R.Button
                tab={props.tab == 1 && 1}
                onClick={() => props.onclickTab(1)}
                index={1}
              >
                전체 상품
              </R.Button>

              <R.Button
                tab={props.tab == 2 && 2}
                onClick={() => props.onclickTab(2)}
                index={2}
              >
                이벤트
              </R.Button>
            </R.TabMenu_wrapper>

            <R.Result_page>
              {props.tab == 1 && (
                <ProductWrapper products={props.searchResults} />
              )}
              {props.tab == 2 && "이벤트 페이지"}
            </R.Result_page>
          </R.Main_contents_wrapper>
        </R.Right>
      </R.Inner>
    </>
  );
}
