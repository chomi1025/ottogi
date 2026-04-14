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
import { Timestamp } from "firebase/firestore";
import ProductDetail from "@/page/front/product/detail/index.container";

export async function getStaticPaths() {
  const productRef = collection(db, "product");
  const querySnapshot = await getDocs(productRef);

  const paths = querySnapshot.docs.map((doc) => ({
    params: { productID: doc.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { productID } = context.params;

  const productRef = doc(db, "product", productID);
  const productSnap = await getDoc(productRef);

  if (!productSnap.exists()) {
    return {
      notFound: true,
    };
  }

  const product = productSnap.data();
  const serializedProduct = JSON.parse(JSON.stringify(product));

  if (product.releaseDate instanceof Timestamp) {
    serializedProduct.releaseDate = product.releaseDate.toDate().toISOString();
  }

  const mainCategoryId = String(product.mainCategory);
  const subCategoryId = String(product.subCategory);

  const mainCategory = await getCategoryById(mainCategoryId);

  const subCategory = await getSubCategoryById(mainCategoryId, subCategoryId);

  return {
    props: {
      product: serializedProduct,
      mainCategory,
      subCategory,
      productID,
    },
  };
}

async function getCategoryById(mainCategoryId) {
  if (!mainCategoryId) {
    console.error("Invalid mainCategoryId:", mainCategoryId);
    return null;
  }

  try {
    const categoryRef = collection(db, "mainCategory");
    const q = query(categoryRef, where("id", "==", Number(mainCategoryId)));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("123123");
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
      subCategoryId,
    );
    return null;
  }

  try {
    const subCategoryRef = collection(db, "subCategory");
    const q = query(
      subCategoryRef,
      where("mainCategory", "==", Number(mainCategoryId)),
      where("id", "==", Number(subCategoryId)),
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

export default function ProductDetailPage({
  product,
  mainCategory,
  subCategory,
  productID,
}) {
  return (
    <ProductDetail
      product={product}
      mainCategory={mainCategory}
      subCategory={subCategory}
      productID={productID}
    />
  );
}
