import React from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Timestamp } from "firebase/firestore"; // Timestamp 객체 임포트
import ProductDetail from "@/page/front/product/detail/index.container";

// getStaticPaths - 동적 경로를 미리 렌더링할 상품 ID 목록 가져오기
export async function getStaticPaths() {
  const productRef = collection(db, "product"); // 'product' 컬렉션
  const querySnapshot = await getDocs(productRef);

  const paths = querySnapshot.docs.map((doc) => ({
    params: { productID: doc.id }, // 자동 생성된 ID를 경로 파라미터로 설정
  }));

  return {
    paths,
    fallback: false, // 경로가 없는 경우 404 페이지로 이동
  };
}

// getStaticProps - 상품 데이터를 Firebase에서 가져오는 함수
export async function getStaticProps(context) {
  const { productID } = context.params; // URL에서 상품 ID를 가져옵니다

  // Firestore에서 상품 데이터를 가져옵니다.
  const productRef = doc(db, "product", productID); // 'product' 컬렉션에서 productID로 상품 가져오기
  const productSnap = await getDoc(productRef);

  if (!productSnap.exists()) {
    return {
      notFound: true, // 상품이 없으면 404 페이지로 처리
    };
  }

  const product = productSnap.data();

  // releaseDate가 firebase.firestore.Timestamp 객체일 경우, ISO 문자열로 변환
  if (product.releaseDate instanceof Timestamp) {
    product.releaseDate = product.releaseDate.toDate().toISOString();
  }

  // product의 mainCategory와 subCategory를 사용하여 각각 이름을 가져옵니다.
  const mainCategoryId = String(product.mainCategory);
  const subCategoryId = String(product.subCategory);

  const mainCategory = await getCategoryById(mainCategoryId);
  const subCategory = await getSubCategoryById(mainCategoryId, subCategoryId);

  return {
    props: {
      product,
      mainCategory,
      subCategory,
      productID,
    },
  };
}

// mainCategoryId로 mainCategory 컬렉션에서 데이터 가져오기
async function getCategoryById(mainCategoryId) {
  if (!mainCategoryId) {
    console.error("Invalid mainCategoryId:", mainCategoryId);
    return null;
  }

  try {
    const categoryRef = collection(db, "mainCategory");
    const q = query(categoryRef, where("id", "==", Number(mainCategoryId))); // 'id' 필드와 비교

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching mainCategory found");
      return null;
    }

    let categoryData = null;
    querySnapshot.forEach((doc) => {
      categoryData = doc.data();
    });

    return categoryData;
  } catch (error) {
    console.error("Error fetching mainCategory:", error);
    return null;
  }
}

async function getSubCategoryById(mainCategoryId, subCategoryId) {
  if (!mainCategoryId || !subCategoryId) {
    console.error(
      "Invalid mainCategoryId or subCategoryId:",
      mainCategoryId,
      subCategoryId
    );
    return null;
  }

  try {
    const subCategoryRef = collection(db, "subCategory");
    const q = query(
      subCategoryRef,
      where("mainCategory", "==", Number(mainCategoryId)), // mainCategory와 일치하는 항목
      where("id", "==", Number(subCategoryId)) // subCategoryId와 일치하는 항목
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching subCategory found");
      return null;
    }

    let subCategoryData = null;
    querySnapshot.forEach((doc) => {
      subCategoryData = doc.data();
    });

    return subCategoryData;
  } catch (error) {
    console.error("Error fetching subCategory:", error);
    return null;
  }
}

// 상품 상세 페이지 컴포넌트
const ProductDetailPage = ({
  product,
  mainCategory,
  subCategory,
  productID,
}) => {
  return (
    <ProductDetail
      product={product}
      mainCategory={mainCategory}
      subCategory={subCategory}
      productID={productID}
    />
  );
};

export default ProductDetailPage;
