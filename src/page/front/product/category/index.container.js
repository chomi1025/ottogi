import CategoryUI from "./index.presenter";

export default function Category(props) {
  return (
    <CategoryUI
      mainCategory={props.mainCategory}
      subCategory={props.subCategory}
      subCategories={props.subCategories}
      products={props.products}
    />
  );
}
