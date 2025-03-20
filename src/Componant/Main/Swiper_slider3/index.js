import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

export default function SwiperSlide3() {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ height: "130px", margin: "0 0 100px" }}
        navigation={{
          nextEl: ".swiper3-button-next",
          prevEl: ".swiper3-button-prev",
        }}
      >
        <SwiperSlide>
          <Link href="/main">
            <a>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/eventBanner1-1.jpg?alt=media&token=820748ac-a542-49f1-b3e2-fc5ca736a4bf"
                alt="asd"
              />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/main">
            <a>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/eventBanner1-3.jpg?alt=media&token=b12d0e81-2665-4b6a-90b4-df4d000502ee"
                alt="asd"
              />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/eventBanner1-2.png?alt=media&token=6899fa9b-b471-44fc-a3f9-7a3cbd1cf1e8"
              style={{ borderRadius: "10px" }}
              alt="asd"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/eventBanner1-4.png?alt=media&token=01d9c7a8-2501-4536-ad38-bbf9ab920720"
              style={{ borderRadius: "10px" }}
              alt="asd"
            />
          </a>
        </SwiperSlide>
        <span
          className="swiper3-button-prev"
          style={{
            objectFit: "cover",
            position: "absolute",
            top: "50%",
            left: "18px",
            zIndex: 999,
            transform: "translate(0%,-50%)",
            background:
              "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/R_arrow_banner.svg?alt=media&token=7e83566c-9c25-42db-b7ec-1303e3cb324b)no-repeat center center",
            width: "35px",
            height: "35px",
          }}
        />
        <span
          className="swiper3-button-next"
          style={{
            objectFit: "cover",
            position: "absolute",
            top: "50%",
            right: "18px",
            transform: "translate(0%,-50%)",
            zIndex: 999,
            right: "0px",
            background:
              "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/L_arrow_banner.svg?alt=media&token=caa8af73-4398-4e68-873b-090960f030f0)no-repeat center center",
            width: "35px",
            height: "35px",
          }}
        />
      </Swiper>
    </>
  );
}
