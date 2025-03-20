import * as G from "./index.style";
import ProductMenu from "../../../../Componant/Main/ProductSort/index";
import ProductWrapper from "./../../../../Componant/Main/Product_Wrapper/index";
import { Inner, Title } from "../../../../../styles/main";

export default function GiftProductUI() {
  return (
    <Inner width={"1410px"} padding="25px 0 0">
      <Title padding="40px 0 ">오뚜기프트</Title>
      <G.banner src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2FEvent_banner%2Fottogift_banner.jpg?alt=media&token=6c6c826b-23d9-474c-9e90-6a5a7413891e" />

      <div>
        <ProductMenu />
        <ProductWrapper margin={"40px 0 130px"} />
      </div>
    </Inner>
  );
}
