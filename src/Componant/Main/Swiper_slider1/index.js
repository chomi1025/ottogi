import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

SwiperCore.use([Pagination]);

export default function SwiperSlide1(props) {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          type: "fraction",
          el: ".swiper-pagination",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          height: "610px",
        }}
        navigation={{
          nextEl: ".swiper1-button-next",
          prevEl: ".swiper1-button-prev",
        }}
      >
        {/* 캐러셀 내용 */}
        {props.Carousel.map((el) => (
          <SwiperSlide style={{ height: "610px" }}>
            <Link href={el.toLink} style={{ height: "100%" }}>
              <a>
                <img
                  src={el.ImageLink}
                  alt={el.explanation}
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}

        <div
          className="buttons"
          style={{
            position: "absolute",
            display: "flex",
            bottom: "100px",
            zIndex: "999",
            top: "50%",
            width: "100%",
            height: "60px",
            transform: "translate(0,-50%)",
          }}
        >
          <span
            className="swiper1-button-prev"
            style={{
              position: "absolute",
              background:
                "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-button-left.svg?alt=media&token=f0552e6e-2015-4b36-b00f-2b837f69eee5)no-repeat center center",
              width: "60px",
              height: "100%",
            }}
          />
          <span
            className="swiper1-button-next"
            style={{
              position: "absolute",
              right: "0px",
              background:
                "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Slider1-button-right.svg?alt=media&token=13c3b63c-f72d-4060-84ef-61f9ac485b52)no-repeat center center",
              width: "60px",
              height: "100%",
            }}
          />
        </div>

        <div
          className="swiper-pagination"
          style={{
            position: "absolute",
            zIndex: 1000,
            bottom: "25px",
            left: "calc(50% + 705px)",
            margin: "0 2px 0 10px",
            padding: "10px 15px 10px 20px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "inline-flex",
            fontSize: "14px",
            borderRadius: "50px 0 0 50px",
          }}
        >
          <span
            className="swiper-pagination-current"
            style={{
              padding: "0 5px 0 0",
            }}
          ></span>
          <span className="swiper-pagination-total" style={{}}></span>
        </div>
      </Swiper>
    </>
  );
}
