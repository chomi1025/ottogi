import { Inner } from "../../../../../styles/main";
import * as P from "./index.style";
import Breadcrumb from "./../../../Main/breadcrumb/index";
import Link from "next/link";
import LoginRequiredButton from "@/Componant/Main/Buttons/LoginRequiredButton";
import ShareSNSComponent from "@/Componant/Main/ShareSNS";
import CartButton from "@/Componant/Main/Buttons/CartButton";

export default function ProductInfoWrapper(props) {
  return (
    <>
      <section>
        <Inner width={"1410px"} padding={"25px 0 0"}>
          <Breadcrumb
            product={props.product}
            mainCategory={props.mainCategory}
            subCategory={props.subCategory}
          />

          <P.Product_info>
            <P.Product_info_Left>
              <P.Product_small_Image>
                <img src={props.product?.imgSrc[0]} alt={props.product?.name} />
              </P.Product_small_Image>
              <P.Product_Main_Image>
                <img src={props.product?.imgSrc[0]} alt={props.product?.name} />
              </P.Product_Main_Image>
            </P.Product_info_Left>

            <P.Product_info_Right>
              <P.Title_Wrapper>
                <h3>{props.product?.name}</h3>
                <P.Icon_Wrapper>
                  {/* 찜하기 버튼 */}
                  <LoginRequiredButton
                    width={"30px"}
                    height={"30px"}
                    background={
                      "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_heart.svg?alt=media&token=ad57b2a6-5e00-49a1-a405-592e30fce05e)"
                    }
                  />

                  {/* SNS 공유하기 버튼 */}
                  <ShareSNSComponent />
                </P.Icon_Wrapper>
              </P.Title_Wrapper>

              <P.Grade_Wrapper>
                <P.Star>★★★★★{}</P.Star>
                <P.Grade>4.8{}</P.Grade>
                <P.Review>
                  <Link href="/main">
                    <a> 44건{}</a>
                  </Link>
                </P.Review>
              </P.Grade_Wrapper>

              <P.Price>
                {parseInt(props?.basePrice).toLocaleString()} <span>원</span>
              </P.Price>

              <P.Product_guide_Wrapper>
                <li>
                  <P.Subtitle>원산지</P.Subtitle>
                  <span>상품정보 원산지표시 참조</span>
                </li>
                <li>
                  <P.Subtitle>적립정보</P.Subtitle>
                  <span>로그인 후 적립혜택 제공</span>
                </li>
                <li>
                  <P.Subtitle>배송정보</P.Subtitle>
                  <P.ShippingInfo>
                    <em>{props.product?.tag?.freeShipping || "3000"}</em>원
                    <span>{props.tag?.roomTemperature}</span>
                    <div>동일 배송유형 상품 30,000원 이상 구매시 무료</div>
                  </P.ShippingInfo>
                </li>
                <li>
                  <P.Subtitle>수량선택</P.Subtitle>
                  <P.Input
                    type="number"
                    onChange={props.onclickValue}
                    min={1}
                    value={props.value}
                  />
                </li>
              </P.Product_guide_Wrapper>

              <P.Total_Price_Wrapper>
                총금액
                <strong>
                  {(parseInt(props.basePrice) * props.value).toLocaleString()}
                </strong>
                <span>원</span>
              </P.Total_Price_Wrapper>

              <P.Button_Wrapper>
                <LoginRequiredButton
                  text={"선물함 담기"}
                  width={"calc(100% / 3 - 10px)"}
                  height={"60px"}
                  border={"1px solid #d3233a"}
                  background={"white"}
                  color={"#d3233a"}
                  fontSize={"16px"}
                  fontWeight={"700"}
                  padding={"20px 0"}
                  borderRadius={"6px"}
                />
                <CartButton productID={props.productID} product={props.product}>
                  장바구니
                </CartButton>
                <P.Button_buy>바로구매</P.Button_buy>
              </P.Button_Wrapper>
            </P.Product_info_Right>
          </P.Product_info>
        </Inner>
      </section>
    </>
  );
}
