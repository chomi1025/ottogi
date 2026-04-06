import ProductSort from "@/Component/Main/ProductSort";
import { Inner, Title } from "../../../../../styles/main";
import Breadcrumb from "./../../../../Component/Main/breadcrumb/index";
import ProductWrapper from "./../../../../Component/Main/Product_Wrapper/index";

export default function CategoryUI(props) {
  console.log(props);
  return (
    <>
      <Inner width={"1410px"}>
        <Breadcrumb
          mainCategory={props.mainCategory}
          subCategory={props.subCategory}
          category={true}
        />

        <Title lineHeight={"48px"} padding={"40px 0 "}>
          {props.subCategories ? props.mainCategory?.name : "전체"}
        </Title>

        <ProductSort
          mainCategory={props.mainCategory}
          subCategory={props.subCategory}
          subCategories={props.subCategories}
        />

        <ProductWrapper products={props.products} />
      </Inner>
    </>
  );
}
