import CategoryUI from "./index.presenter";

export default function Category(props) {
  console.log(props.products);
  return (
    <CategoryUI
      mainCategory={props.mainCategory}
      subCategory={props.subCategory}
      subCategories={props.subCategories}
      products={props.products}
    />
  );
}
