import * as P from "./index.style";
import ProductInfoWrapper from "./../../../../Component/Page/detail/Image_box/index";
import ProductDetailWrapper from "./../../../../Component/Page/detail/product_detail_wrapper/index";
import { Inner } from "styles/main";

import ProductWrapper from "@/Component/Main/Product_Wrapper";

export default function ProductDetailUI(props) {
  return (
    <>
      {/* 상품 소개 이미지 */}
      <ProductInfoWrapper
        onclickValue={props.onclickValue}
        basePrice={props.basePrice}
        value={props.value}
        product={props.product}
        productID={props.productID}
        mainCategory={props.mainCategory}
        subCategory={props.subCategory}
        onIncrease={props.onIncrease}
        onDecrease={props.onDecrease}
        grade={props.grade}
        grade_star={props.grade_star}
      />

      {/* 상품 상세 소개 */}
      <ProductDetailWrapper
        onclickValue={props.onclickValue}
        basePrice={props.basePrice}
        value={props.value}
        onIncrease={props.onIncrease}
        onDecrease={props.onDecrease}
        product={props.product}
        grade_star={props.grade_star}
      />

      {/* 관련 상품 소개 */}
      <P.recommend_goods_wrapper>
        <Inner width={"1280px"}>
          <h2>이런상품 어때요?</h2>

          <p>
            패밀리님들이 선택한 <span>Best</span> 아이템이에요!
          </p>

          <ProductWrapper products={props.recommendProducts} />
        </Inner>
      </P.recommend_goods_wrapper>
    </>
  );
}
