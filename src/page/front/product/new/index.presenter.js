import { Inner, Title } from "../../../../../styles/main";
import ProductSort from "../../../../Component/Main/ProductSort/index";
import ProductWrapper from "./../../../../Component/Main/Product_Wrapper/index";

export default function NewProductUI(props) {
  return (
    <Inner width={"1410px"} overflow={"hidden"}>
      <Title padding="40px 0 120px">신제품</Title>

      <div>
        <ProductSort products={props.products} />

        <ProductWrapper margin="40px 0 0" products={props.products} />
      </div>
    </Inner>
  );
}
