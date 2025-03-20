import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import MainContainer from "@/page/Main/index.container";

export async function getStaticProps() {
  const mainCategorySnapshot = await getDocs(
    query(collection(db, "mainCategory"), orderBy("id"))
  );
  const subCategorySnapshot = await getDocs(
    query(collection(db, "subCategory"), orderBy("id"))
  );

  // 메인 카테고리 데이터 변환
  const mainCategory = mainCategorySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // 서브 카테고리 데이터 변환
  const subCategory = subCategorySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Main_Carousel
  const MainCarouselCollection = collection(db, "Main_Carousel");
  const CarouselSnapshot = await getDocs(MainCarouselCollection);

  const Carousel = CarouselSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      Carousel,
    },
  };
}

export default function Mainpage({ Carousel, mainCategory, subCategory }) {
  return (
    <MainContainer
      Carousel={Carousel}
      mainCategory={mainCategory}
      subCategory={subCategory}
    />
  );
}

Mainpage.getLayout = function getLayout(page) {
  return page; // 기본 Layout을 제외하고 렌더링
};
