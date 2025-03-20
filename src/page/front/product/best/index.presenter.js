import ProductWrapper from "./../../../../Componant/Main/Product_Wrapper/index";
import { Inner, Title } from "../../../../../styles/main";

export default function BestProductUI(props) {
  return (
    <Inner width={"1410px"} overflow={"hidden"} padding={"25px 0 130px"}>
      <Title padding="40px 0">베스트</Title>

      <ProductWrapper best={true} products={props.products} />
    </Inner>
  );
}
