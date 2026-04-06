import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function SwiperSlide3() {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        style={{ height: "130px", margin: "0 0 100px" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper3-button-next",
          prevEl: ".swiper3-button-prev",
        }}
      >
        <SwiperSlide>
          <Link href="#">
            <a>
              <Image
                src="/Layout/main/bannel1.png"
                alt="asd"
                width={1410}
                height={130}
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="#">
            <a>
              <Image
                src="/Layout/main/bannel2.png"
                alt="asd"
                width={1410}
                height={130}
              />
            </a>
          </Link>
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
