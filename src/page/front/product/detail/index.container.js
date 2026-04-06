import { useEffect, useState } from "react";
import ProductDetailUI from "./index.presenter";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

export default function ProductDetail(props) {
  const basePrice = props.product?.price;

  const [value, setValue] = useState(1);

  const onclickValue = (event) => {
    setValue(event.target.value);
  };

  const onIncrease = () => {
    setValue((prev) => prev + 1);
  };

  const onDecrease = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };

  const grade = props.product?.grade?.toFixed(1); //별점 소수점
  const grade_star = parseInt(grade); //별점 한자리

  const [recommendProducts, setRecommendProducts] = useState([]);

  // 추천상품
  useEffect(() => {
    const fetchRecommendProducts = async () => {
      try {
        const q = query(
          collection(db, "product"),
          where("isRecommend", "==", true),
        );

        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecommendProducts(products);
      } catch (error) {
        console.error("추천 상품 불러오기 에러:", error);
      }
    };

    fetchRecommendProducts();
  }, []);

  return (
    <ProductDetailUI
      product={props.product}
      mainCategory={props.mainCategory}
      subCategory={props.subCategory}
      productID={props.productID}
      basePrice={basePrice}
      value={value}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onclickValue={onclickValue}
      grade_star={grade_star}
      recommendProducts={recommendProducts}
    />
  );
}
