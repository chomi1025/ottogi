import NewProduct from "@/page/front/product/new/index.container";
import { db } from "@/firebaseConfig";
import { collection, getDocs, where, limit, query } from "firebase/firestore";

export async function getStaticProps() {
  try {
    const q = query(
      collection(db, "product"),
      where("isNew", "==", true),
      limit(10),
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
      revalidate: 3600,
    };
  }
}

export default function NewProductPage({ products }) {
  return <NewProduct products={products} />;
}
