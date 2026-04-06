import * as O from "./index.style";
import ProductWrapper from "./../../../../Component/Main/Product_Wrapper/index";
import ProductMenu from "../../../../Component/Main/ProductSort/index";
import { Inner, Title } from "../../../../../styles/main";
import SwiperSlider4 from "./../../../../Component/Main/Swiper_slider4/index";

export default function OnlyProductUI() {
  return (
    <Inner width={"1410px"} padding={"25px 0 130px"}>
      <Title fontsize="" padding="40px 0 160px">
        only
      </Title>

      <O.SwiperSliderWrapper>
        <h4>only 추천상품</h4>
        <SwiperSlider4 slidesPerView={3} spaceBetween={40} />
      </O.SwiperSliderWrapper>

      <O.Contents>
        <ProductMenu />
        <ProductWrapper style_marginTop={"40px"} />
      </O.Contents>
    </Inner>
  );
}
