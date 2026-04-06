import styled from "@emotion/styled";

export const Product_info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px auto 40px;
`;

export const Product_info_Left = styled.div`
  display: flex;
  width: 55%;
`;

export const Product_info_Right = styled.div`
  width: 570px;
  height: 640px;
`;

export const Product_small_Image = styled.div`
  margin-right: 10px;
  width: 60px;
  height: 60px;
  position: relative;
`;

export const Product_Main_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 640px;
  height: 640px;
`;

export const Quantity_Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  width: fit-content;
  border-radius: 4px;
  overflow: hidden;

  button {
    width: 40px;
    height: 40px;
    background-color: #f9f9f9;
    border: none;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background-color: #eee;
    }

    &:disabled {
      cursor: not-allowed;
      color: #ccc;
    }
  }

  input {
    width: 50px;
    height: 40px;
    border: none;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    outline: none;

    /* 화살표 제거 */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const Title_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.7px;
  }
`;

export const Icon_Wrapper = styled.div`
  height: 30px;
  display: flex;
`;

export const Grade_Wrapper = styled.div`
  margin-top: 10px;
  font-size: 15px;
  line-height: 1.5;
`;

export const Star = styled.span``;

export const Grade = styled.span`
  margin: 0 5px;
`;
export const Review = styled.span`
  margin-left: 5px;
  a {
    display: inline-block;
    text-decoration: underline;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  font-size: 34px;

  font-weight: 700;
  margin-top: 20px;

  span {
    font-size: 28px;
  }
`;

export const Product_guide_Wrapper = styled.ul`
  color: #333;
  margin: 25px 0;
  font-size: 15px;

  &::before {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: #eee;
    margin-bottom: 25px;
  }

  &::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: #eee;
    margin-top: 25px;
  }

  li {
    display: flex;

    em {
      font-weight: 700;
    }

    input {
      width: 50px;
      height: 40px;
    }
  }

  li:nth-of-type(2),
  li:nth-of-type(3),
  li:nth-of-type(4) {
    margin-top: 20px;
  }

  li:nth-of-type(4) {
    align-items: center;
  }
`;

export const Input = styled.input`
  position: relative;
  z-index: 200;
`;

export const ShippingInfo = styled.div`
  div {
    margin-top: 10px;
  }
`;

export const Subtitle = styled.div`
  width: 90px;
  color: #888;
`;

export const Total_Price_Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  strong {
    color: #d3233a;
    font-size: 32px;
    margin-left: 10px;
  }

  span {
    color: #d3233a;
    font-size: 20px;
  }
`;

export const Button_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    cursor: pointer;
  }
`;

export const Button_cart = styled.button`
  width: calc(100% / 3 - 10px);
  border: 1px solid #d3233a;
  border-radius: 6px;
  background: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #d3233a;
`;

export const Button_buy = styled.button`
  width: calc(100% / 3 - 10px);
  border: 1px solid #d3233a;
  border-radius: 6px;
  background: #d3233a;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: white;
`;
