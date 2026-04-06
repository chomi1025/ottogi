import MainPresenter from "./index.presenter";
import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function MainContainer(props) {
  const [newProducts, setNewProducts] = useState([]);
  const [recommendProducts, setRecommendProducts] = useState([]);
  const [onlyProducts, setOnlyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMainData = async () => {
      setLoading(true);
      try {
        const productRef = collection(db, "product");

        // 신상품
        const qNew = query(productRef, where("isNew", "==", true), limit(10));
        const snapNew = await getDocs(qNew);
        setNewProducts(
          snapNew.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );

        // 추천상품
        const qRec = query(
          productRef,
          where("isRecommend", "==", true),
          limit(10),
        );
        const snapRec = await getDocs(qRec);
        setRecommendProducts(
          snapRec.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );

        // 단독상품
        const qOnly = query(productRef, where("isOnly", "==", true), limit(10));
        const snapOnly = await getDocs(qOnly);
        setOnlyProducts(
          snapOnly.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
      } catch (error) {
        console.error("메인 데이터 로딩 에러:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMainData();
  }, []);

  return (
    <MainPresenter
      Carousel={props.Carousel}
      newProducts={newProducts}
      recommendProducts={recommendProducts}
      onlyProducts={onlyProducts}
      loading={loading}
    />
  );
}
