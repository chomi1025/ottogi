import ProductSort from "@/Componant/Main/ProductSort";
import { Inner, Title } from "../../../../../styles/main";
import Breadcrumb from "./../../../../Componant/Main/breadcrumb/index";
import ProductWrapper from "./../../../../Componant/Main/Product_Wrapper/index";

export default function CategoryUI(props) {
  return (
    <>
      <Inner width={"1410px"}>
        <Breadcrumb
          mainCategory={props.mainCategory}
          subCategory={props.subCategory}
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
