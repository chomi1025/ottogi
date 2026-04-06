import * as P from "./index.styles";
import ProductItem from "../Product_item";

export default function ProductWrapper(props) {
  return (
    <P.Contents main={props.main}>
      {props.products?.map((el, index) => (
        <ProductItem
          main={props.main}
          key={el.id || index}
          product={el}
          index={index}
        />
      ))}
    </P.Contents>
  );
}
