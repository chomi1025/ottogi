import Category from "@/page/front/product/category/index.container";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

export async function getStaticPaths() {
  // ✅ Firestore에서 mainCategory 한 번에 가져오기
  const mainCategorySnapshot = await getDocs(collection(db, "mainCategory"));

  // ✅ mainCategory 데이터를 Map으로 변환
  const mainCategoryMap = new Map();
  mainCategorySnapshot.docs.forEach((doc) => {
    const data = doc.data();
    mainCategoryMap.set(data.id, data);
  });

  // mainCategoryId만 포함한 paths 생성
  const paths = Array.from(mainCategoryMap.values()).map((category) => ({
    params: {
      mainCategoryId: String(category.id), // 이제 subCategoryId는 필요 없음
    },
  }));

  return {
    paths,
    fallback: "blocking", // ✅ fallback을 "blocking"으로 바꾸면 SEO 개선 가능
  };
}

// getStaticProps에서 동적 데이터 가져오기
export async function getStaticProps({ params }) {
  const { mainCategoryId } = params;

  // 병렬로 데이터 로드
  const [{ mainCategory }, products, subCategories] = await Promise.all([
    getCategoryData(mainCategoryId),
    getProducts(mainCategoryId),
    getAllSubCategories(mainCategoryId), // getAllSubCategories도 사용
  ]);

  return {
    props: { mainCategory, products, subCategories, products }, // subCategories 추가
    revalidate: 60,
  };
}

async function getCategoryData(mainCategoryId) {
  const mainCategoryQuery = query(
    collection(db, "mainCategory"),
    where("id", "==", Number(mainCategoryId))
  );

  const mainCategorySnapshot = await getDocs(mainCategoryQuery);

  return {
    mainCategory: mainCategorySnapshot.empty
      ? null
      : mainCategorySnapshot.docs[0].data(),
  };
}

// 모든 카테고리 가져오기
async function getAllSubCategories(mainCategoryId) {
  const allSubCategoryRef = collection(db, "subCategory");

  // mainCategoryId와 subCategoryId를 기준으로 조건을 걸고, id 기준으로 정렬
  const allSubCategoryQuery = query(
    allSubCategoryRef,
    where("mainCategory", "==", Number(mainCategoryId)), // mainCategoryId로 필터링
    orderBy("id", "asc") // id 기준으로 오름차순 정렬
  );

  const allSubCategorySnapshot = await getDocs(allSubCategoryQuery);
  const allSubCategories = allSubCategorySnapshot.docs.map((doc) => doc.data());

  return allSubCategories;
}

// 제품 데이터 가져오기
async function getProducts(mainCategoryId) {
  const productsRef = collection(db, "product");
  const q = query(
    productsRef,
    where("mainCategory", "==", Number(mainCategoryId))
  );

  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => {
    const productData = doc.data();

    // 🛠️ Firestore 문서 ID 추가!
    return {
      id: doc.id, // ⬅️ 문서 ID 포함
      ...productData,
      timestamp:
        productData?.timestamp instanceof Timestamp
          ? productData.timestamp.toDate()
          : null,
      releaseDate:
        productData?.releaseDate instanceof Timestamp
          ? productData.releaseDate.toDate().toISOString()
          : null,
    };
  });

  return products;
}

export default function CategoryPage({
  mainCategory,
  subCategories, // subCategories 추가
  products,
}) {
  // subCategories를 메모이제이션하여 불필요한 재계산 방지

  return (
    <Category
      mainCategory={mainCategory}
      subCategories={subCategories}
      products={products}
      category={true}
    />
  );
}
