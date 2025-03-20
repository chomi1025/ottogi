import styled from "@emotion/styled";

export const recommend_goods_wrapper = styled.section`
  h4 {
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.55px;
    color: #1d1d1b;
    font-weight: 700;
    padding: 40px 0 20px;
  }
`;

export const product_wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: calc(100% / 4);
    height: 300px;
    background-color: red;
    padding: 0 20px;
  }
`;
