import styled from "@emotion/styled";

export const Title = styled.h2`
  font-size: 40px;
  padding: 40px 0;
  font-weight: 700;
`;

export const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: calc(25% - 40px);
  margin: 0 20px;
  padding-bottom: 40px;
  position: relative;

  &:nth-of-type(4n + 1)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #e4e4e4;
    width: calc(100vw - 40px);
  }
`;

export const Image_Wrapper = styled.div`
  position: relative;
  width: 100%;

  figure {
    position: relative;
    width: 100%;
    overflow: hidden;

    &:hover {
      transition: 0.2s;
    }
    &:hover img {
      transform: scale(1.1);
    }

    img {
      transition: 0.2s;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const Soldout = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const Number = styled.p`
  position: absolute;
  z-index: 999;
  top: 20px;
  left: 10px;
  color: #d3233a;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-decoration: underline;
`;

export const Detail_Wrapper = styled.div`
  padding: 10px 0 0;

  p:nth-of-type(2) {
    font-weight: 700;
    font-size: 18px;
    strong {
      display: inline-block;
      font-size: 26px;
      padding: 7px 0 0;
    }
  }

  p:nth-of-type(3) {
    margin-top: 8px;
  }

  div {
    display: flex;

    span {
      margin-right: 4px;

      img {
        height: 23px;
      }
    }
  }
`;

export const Icon_cart = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_cart.svg?alt=media&token=a81dbc11-36f3-4bbf-9794-de5a92884e02);
  width: 40px;
  height: 40px;
`;

export const Icon_alarm = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_alarm.svg?alt=media&token=13779717-7835-42cf-987a-56376a5ea7e2);
  width: 40px;
  height: 40px;
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 16px;
  height: 23px;
`;

export const Tags_new = styled.span``;

export const Tags_roomTemperature = styled.span`
  padding: 0 6px;
  height: 23px;
  font-size: 13px;
  line-height: 21px;
  color: #d3233a;
  border: 1px solid #f2afaf;
  border-radius: 4px;
`;

export const Tags_Frozen = styled.span`
  padding: 0 6px;
  height: 100%;
  font-size: 13px;
  line-height: 21px;
  color: #0a309e;
  border: 1px solid #afc8f2;
  border-radius: 4px;
`;

export const Tags_Coupon = styled.span`
  background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/tag_coupon.svg?alt=media&token=ec3f68b7-c02f-4744-802e-2f7a169eb616")
    no-repeat center center;
  width: 41.39px;
  height: 100%;
  background-size: contain;
`;

export const Tags_Best = styled.span``;

export const Tags_FreeShipping = styled.span``;

export const Tags_Recommend = styled.span``;
