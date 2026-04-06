import Category from "@/page/front/product/category/index.container";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";

export async function getStaticPaths() {
  const [mainSnap, subSnap] = await Promise.all([
    getDocs(collection(db, "mainCategory")),
    getDocs(collection(db, "subCategory")),
  ]);

  const paths = [];

  mainSnap.docs.forEach((doc) => {
    paths.push({ params: { category: [String(doc.data().id)] } });
  });

  subSnap.docs.forEach((doc) => {
    const data = doc.data();
    paths.push({
      params: { category: [String(data.mainCategory), String(data.id)] },
    });
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const tempParams = params.category || [];

  const cleanParams = tempParams.filter((p) => p !== "category");

  const mainId = cleanParams[0] || null; // '4'
  const subId = cleanParams[1] || null; // '3'

  if (!mainId) {
    return {
      props: {
        mainCategory: null,
        subCategory: null,
        subCategories: [],
        products: [],
      },
      revalidate: 60,
    };
  }

  const [categoryData, subCategories, products] = await Promise.all([
    getCategoryData(mainId, subId),
    getAllSubCategories(mainId),
    getProducts(mainId, subId),
  ]);

  return {
    props: {
      mainCategory: categoryData.mainCategory,
      subCategory: categoryData.subCategory,
      subCategories,
      products,
    },
    revalidate: 60,
  };
}

async function getCategoryData(mainId, subId) {
  const mainColRef = collection(db, "mainCategory");
  const mainSnap = await getDocs(mainColRef);

  if (mainSnap.docs.length === 0) {
    return { mainCategory: null, subCategory: null };
  }

  const allData = mainSnap.docs.map((doc) => doc.data());

  const mainCategory = allData.find((data) => {
    const isMatch = Number(data.id) === Number(mainId);

    return isMatch;
  });

  let subCategory = null;
  if (subId && mainCategory) {
    const subSnap = await getDocs(collection(db, "subCategory"));
    subCategory = subSnap.docs
      .map((doc) => doc.data())
      .find(
        (data) =>
          Number(data.mainCategory) === Number(mainId) &&
          Number(data.id) === Number(subId),
      );
  }

  return {
    mainCategory: mainCategory || null,
    subCategory: subCategory || null,
  };
}

async function getAllSubCategories(mainCategoryId) {
  const allSubCategoryRef = collection(db, "subCategory");

  const snapshot = await getDocs(allSubCategoryRef);
  const allSubCategories = snapshot.docs
    .map((doc) => doc.data())
    .filter((data) => Number(data.mainCategory) === Number(mainCategoryId))
    .sort((a, b) => a.id - b.id);

  return allSubCategories;
}

async function getProducts(mainId, subId) {
  const productsRef = collection(db, "product");

  const q = query(productsRef, where("mainCategory", "==", Number(mainId)));
  const querySnapshot = await getDocs(q);

  let products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    releaseDate:
      doc.data()?.releaseDate instanceof Timestamp
        ? doc.data().releaseDate.toDate().toISOString()
        : null,
  }));

  if (subId) {
    products = products.filter((p) => Number(p.subCategory) === Number(subId));
  }

  return products;
}

export default function CategoryPage(props) {
  console.log(props);
  return <Category {...props} category={true} />;
}
