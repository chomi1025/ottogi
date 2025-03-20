import { useState } from "react";
import ProductDetailUI from "./index.presenter";

export default function ProductDetail(props) {
  const basePrice = props.product?.price; //상품 기본가격

  const [value, setValue] = useState(1); //상품 갯수

  const onclickValue = (event) => {
    setValue(event.target.value);
  };

  const grade = props.product?.grade?.toFixed(1); //별점 소수점
  const grade_star = parseInt(grade); //별점 한자리

  return (
    <ProductDetailUI
      product={props.product}
      mainCategory={props.mainCategory}
      subCategory={props.subCategory}
      productID={props.productID}
      basePrice={basePrice}
      value={value}
      onclickValue={onclickValue}
      grade_star={grade_star}
    />
  );
}
