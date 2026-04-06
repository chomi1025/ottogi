import styled from "@emotion/styled";

export const Section = styled.section`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #eee;
`;

export const goods_nav_wrapper = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  background-color: white;
  height: auto;
  width: 100%;
`;

export const tapMenu_Wrapper = styled.nav`
  width: 1280px;
  margin: 0 auto;
  height: 100%;
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

export const tapMenu = styled.ul`
  display: flex;
  width: 890px;

  li {
    width: calc(100% / 4);

    a {
      display: inline-block;
      width: 100%;
      padding: 21px 0 23px;
      font-size: 18px;
      text-align: center;
      cursor: pointer;
    }
  }
`;

export const tapMenu_list = styled.li`
  width: calc(100% / 4);
  color: ${(props) => (props.active ? "#d3233a" : "1d1d1b")};
`;

export const tapmenu_button = styled.a`
  display: inline-block;
  width: 100%;
  padding: 21px 0 23px;
  font-size: 18px;
  text-align: center;
  border-bottom: ${(props) => props.active && "2px solid #d3233a;"};
`;

export const goods_detail_wrapper = styled.div`
  display: flex;
  height: auto;
  width: 1280px;
  margin: 0 auto;
`;

export const activeStar = styled.span`
  display: inline-block;
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_star.svg?alt=media&token=e6b2b656-105f-40b8-b5f1-1ce8b32c0a1f);
  height: 100%;
  width: 30px;
`;

export const inActiveStar = styled.span`
  display: inline-block;
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_star_bg.svg?alt=media&token=65032d5d-d34a-477d-8f5d-789d6e602ba5);
  height: 100%;
  width: 30px;
`;

export const Main_wrapper = styled.div`
  width: 890px;
`;

export const main_contents_Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 80px;

  > div {
    position: relative;
    width: 890px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      max-width: 890px;
      object-fit: cover;
    }
  }
`;

export const goods_inquiry = styled.div``;

export const sticky_wrapper = styled.div`
  width: calc(100% - 890px);
  background-color: white;
  position: sticky;
  z-index: 98;
  top: 179px;
  height: calc(100vh - 179px);

  > div {
    padding: 0 20px 0;
    margin-left: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
`;

export const Top_wrapper = styled.div`
  margin-top: 20px;
  background-color: #fafafa;
  padding: 26px 20px;

  p {
    font-size: 14px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    input {
      height: 40px;
      width: 50px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

export const Bottom_wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Total_wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  h3 {
  }

  span {
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #d3233a;

    em {
      font-size: 32px;
    }
  }
`;

export const Button_wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: calc(100% / 3 - 5px);
  height: 60px;
  border: 1px solid #d3233a;
  border-radius: 6px;
  color: ${(props) => (props.buy ? "white" : "#d3233a")};
  background-color: ${(props) => (props.buy ? "#d3233a" : "white")};
  cursor: pointer;
`;

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

export const ToggleWrapper = styled.div`
  margin-bottom: 80px;
`;
