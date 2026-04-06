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
  const [mainCategorySnapshot, subCategorySnapshot] = await Promise.all([
    getDocs(collection(db, "mainCategory")),
    getDocs(collection(db, "subCategory")),
  ]);

  const mainCategoryMap = new Map();
  mainCategorySnapshot.docs.forEach((doc) => {
    const data = doc.data();
    mainCategoryMap.set(data.id, data);
  });

  const subCategories = subCategorySnapshot.docs.map((doc) => doc.data());

  const paths = subCategories.reduce((acc, subCategory) => {
    if (mainCategoryMap.has(subCategory.mainCategory)) {
      acc.push({
        params: {
          mainCategoryId: String(
            mainCategoryMap.get(subCategory.mainCategory).id,
          ),
          subCategoryId: String(subCategory.id),
        },
      });
    }
    return acc;
  }, []);

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { mainCategoryId, subCategoryId } = params;

  const [{ mainCategory, subCategory }, subCategories, products] =
    await Promise.all([
      getCategoryData(mainCategoryId, subCategoryId),
      getAllSubCategories(mainCategoryId),
      getProducts(mainCategoryId, subCategoryId),
    ]);

  return {
    props: { mainCategory, subCategory, subCategories, products },
    revalidate: 60,
  };
}

async function getCategoryData(mainCategoryId, subCategoryId) {
  const subCategoryQuery = query(
    collection(db, "subCategory"),
    where("mainCategory", "==", Number(mainCategoryId)),
    where("id", "==", Number(subCategoryId)),
  );

  const [mainCategorySnapshot, subCategorySnapshot] = await Promise.all([
    getDocs(
      query(
        collection(db, "mainCategory"),
        where("id", "==", Number(mainCategoryId)),
      ),
    ),
    getDocs(subCategoryQuery),
  ]);

  return {
    mainCategory: mainCategorySnapshot.empty
      ? null
      : mainCategorySnapshot.docs[0].data(),
    subCategory: subCategorySnapshot.empty
      ? null
      : subCategorySnapshot.docs[0].data(),
  };
}

async function getAllSubCategories(mainCategoryId) {
  const allSubCategoryRef = collection(db, "subCategory");

  const allSubCategoryQuery = query(
    allSubCategoryRef,
    where("mainCategory", "==", Number(mainCategoryId)),
    orderBy("id", "asc"),
  );

  const allSubCategorySnapshot = await getDocs(allSubCategoryQuery);
  const allSubCategories = allSubCategorySnapshot.docs.map((doc) => doc.data());

  return allSubCategories;
}

async function getProducts(mainCategoryId) {
  const productsRef = collection(db, "product");
  const q = query(
    productsRef,
    where("mainCategory", "==", Number(mainCategoryId)),
  );

  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => {
    const productData = doc.data();

    return {
      id: doc.id,
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
  subCategory,
  products,
  subCategories,
}) {
  return (
    <Category
      mainCategory={mainCategory}
      subCategory={subCategory}
      subCategories={subCategories}
      products={products}
      category={true}
    />
  );
}
