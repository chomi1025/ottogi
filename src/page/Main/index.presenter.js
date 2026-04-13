import * as M from "./index.style";
import SwiperSlide1 from "../../Component/Main/Swiper_slider1/index";
import SwiperSlide2 from "../../Component/Main/Swiper_Slider2/index";
import SwiperSlide3 from "./../../Component/Main/Swiper_slider3/index";
import Button from "./../../Component/Main/Main_button/index";

const BANNER_LIST = [
  {
    id: 1,
    url: "/Layout/main/1.png",
    text: (
      <>
        SWEET
        <br />
        HOME
      </>
    ),
  },
  { id: 2, url: "/Layout/main/2.png", text: "건강한O늘!" },
  { id: 3, url: "/Layout/main/3.png", text: "패밀리 혜택" },
  { id: 4, url: "/Layout/main/4.png", text: "패밀리 마을" },
  { id: 5, url: "/Layout/main/5.png", text: "컴백홈관" },
  { id: 6, url: "/Layout/main/6.png", text: "원쁠원" },
  { id: 7, url: "/Layout/main/7.png", text: "99마켓" },
  { id: 8, url: "/Layout/main/8.png", text: "브랜드관" },
  { id: 9, url: "/Layout/main/9.png", text: "무료배송" },
  { id: 10, url: "/Layout/main/10.png", text: "굿즈" },
];

export default function MainPresenter(props) {
  return (
    <>
      <SwiperSlide1 Carousel={props.Carousel} />

      <M.Inner>
        <M.Buttons>
          {BANNER_LIST.map((el) => (
            <Button key={el.id} url={el.url} text={el.text} />
          ))}
        </M.Buttons>

        {props.loading ? (
          <div
            style={{
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            상품 정보를 불러오는 중입니다...
          </div>
        ) : (
          <>
            <SwiperSlide2
              new={true}
              more={true}
              title="새로움을 맛보세요"
              products={props.newProducts}
              link={"/front/product/new"}
            />

            <SwiperSlide3 />

            <SwiperSlide2
              how={true}
              more={false}
              title="이런 상품 어때요?"
              products={props.recommendProducts}
              link={"#"}
            />

            <SwiperSlide2
              only={true}
              more={true}
              title="오뚜기몰에서만 만나요"
              products={props.onlyProducts}
              link={"#"}
            />
          </>
        )}
      </M.Inner>
    </>
  );
}
