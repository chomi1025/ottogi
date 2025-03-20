"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as P from "./index.style";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export default function SwiperSlider4(props) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <P.SwiperWrapper>
        <P.StyledSwiper
          loop={true}
          onSwiper={setSwiperRef}
          slidesPerView={props.slidesPerView}
          // centeredSlides={true}
          spaceBetween={40}
          navigation={{
            nextEl: ".swiper1-button-next",
            prevEl: ".swiper1-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <P.CustomSlide>
            <Link href="/main">
              <a>
                <P.Thumbs>
                  <img
                    src="https://ottogi-mall-s3.s3.ap-northeast-2.amazonaws.com/data/product/list/20240731/1722412465265ahkIQ.t844m7nsb5gi.jpg"
                    alt=""
                  />
                </P.Thumbs>

                <P.Description>
                  <P.BottomWrapper>
                    <P.Name>특별한 기획박스로 더 즐겁게!</P.Name>
                    <P.Sub>오뚜기X삼성전자 콜라보 기획박스</P.Sub>
                    <P.Price>
                      <strong>24,900</strong>원
                    </P.Price>

                    <P.Inner>
                      <P.TagWrapper>
                        <P.Tag>실온</P.Tag>
                        <P.Tag>new</P.Tag>
                        <P.Tag>무료배송</P.Tag>
                      </P.TagWrapper>

                      <P.Grade>★ 5.0(1)</P.Grade>
                    </P.Inner>
                  </P.BottomWrapper>
                </P.Description>
              </a>
            </Link>
          </P.CustomSlide>

          <P.CustomSlide>Slide 2</P.CustomSlide>
          <P.CustomSlide>Slide 3</P.CustomSlide>
          <P.CustomSlide>Slide 4</P.CustomSlide>
        </P.StyledSwiper>

        <P.ButtonPrev className="swiper1-button-prev" />
        <P.ButtonNext className="swiper1-button-next" />
      </P.SwiperWrapper>
    </>
  );
}
