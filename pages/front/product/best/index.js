import BestProduct from "@/page/front/product/best/index.container";
import { db } from "@/firebaseConfig";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { productsState } from "./../../../../src/state/products";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export async function getServerSideProps() {
  try {
    const q = query(
      collection(db, "product"),
      orderBy("totalOrder", "desc"),
      limit(100)
    );
    const querySnapshot = await getDocs(q);

    const docsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      props: {
        products: JSON.parse(JSON.stringify(docsArray)),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
}

function BestProductPage({ products }) {
  const [productsList, setProductsList] = useRecoilState(productsState);

  useEffect(() => {
    if (products.length > 0) {
      setProductsList(products); // 클라이언트에서 리코일 상태 업데이트
    }
  }, [products, setProductsList]);

  return <BestProduct products={productsList} />;
}

export default BestProductPage;
