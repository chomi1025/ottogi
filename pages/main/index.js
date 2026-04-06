import { MAIN_CAROUSEL_DATA } from "@/DB/carouselData";
import MainContainer from "@/page/Main/index.container";

export default function Mainpage({ mainCategory, subCategory }) {
  return (
    <MainContainer
      Carousel={MAIN_CAROUSEL_DATA}
      mainCategory={mainCategory}
      subCategory={subCategory}
    />
  );
}

Mainpage.getLayout = function getLayout(page) {
  return page;
};
