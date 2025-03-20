import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperWrapper = styled.div`
  margin-bottom: 80px;
  width: 1410px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 80px;
`;

export const StyledSwiper = styled(Swiper)`
  overflow: hidden;
  position: relative;
`;

export const CustomSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    width: 100%;
  }
`;

export const ButtonPrev = styled.span`
  display: block;
  top: 39%;
  left: calc(50% - 722px);
  background: url(https://www.ottogimall.co.kr/static/imgs/front/cw/images/icon_arrow_left_16.svg)
    no-repeat center center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 5px 15px 0 rgba(136, 136, 136, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #eee;
  position: absolute;
  transform: translateY(-50%);
  transition: 0.3s;
  z-index: 10;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(136, 136, 136, 0.4);
  }
`;

export const ButtonNext = styled.span`
  display: block;
  top: 39%;
  right: calc(50% - 722px);
  background: url(https://www.ottogimall.co.kr/static/imgs/front/cw/images/icon_arrow_right_16.svg)
    no-repeat center center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 5px 15px 0 rgba(136, 136, 136, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #eee;
  position: absolute;
  transform: translateY(-50%);
  transition: 0.3s;
  z-index: 10;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(136, 136, 136, 0.4);
  }
`;

export const Thumbs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 340px;
    height: 340px;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  padding: 10px 20px 20px 10px;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

export const Name = styled.p``;

export const Sub = styled.p`
  color: #888;
  margin-top: 4px;
  height: 42px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  font-size: 18px;
  font-weight: 700;

  strong {
    font-size: 26px;
  }
`;

export const BottomWrapper = styled.div`
  width: calc(100% - 120px);
  padding: 10px 0 0 10px;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
`;

export const TagWrapper = styled.div``;

export const Tag = styled.span``;

export const Grade = styled.p``;
