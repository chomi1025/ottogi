import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;

    > strong {
      margin-left: 10px;
    }

    &:first-of-type {
      line-height: 24px;
      color: #333;
      font-weight: 700;
    }
  }

  ul {
    display: flex;
  }
`;

export const RemoveSoldOut = styled.li`
  font-size: 15px;
  line-height: 18px;
  color: #888;
`;

export const RemoveSelected = styled.li`
  position: relative;
  font-size: 15px;
  line-height: 18px;
  color: #888;
  padding-left: 21px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    height: 12px;
    border-left: 1px solid #ccc;
    transform: translateY(-50%);
  }
`;

export const Text = styled.p``;

export const RoomTempWrapper = styled.div``;

export const coolFrozenWrapper = styled.div`
  margin-top: ${(props) => props.allTrue && "60px"};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fef8f8;
  border: 1px solid #f9e8e8;
  margin-bottom: 10px;
  padding: 25px 20px;
  border-radius: 8px;

  > div {
    display: flex;
    align-items: center;
  }

  strong {
    padding-left: 15px;
  }
`;

export const ItemWrapper = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 0 20px 0px;

  border-top: ${(props) => props.customKey !== 0 && "1px solid #eee"};
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  padding-right: 10px;

  > div {
    display: flex;
    align-items: center;

    a:first-of-type {
      width: 120px;
      span {
        width: 120px;
      }
    }

    a:last-of-type {
      padding: 0 10px 0 30px;
    }
  }
`;

export const ItemCount = styled.div`
  width: 135px;
  display: flex;

  justify-content: center;

  div {
    position: relative;
    width: 115px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #ddd;
      pointer-events: none;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1px solid #eee;
      text-align: center;
    }

    button {
      cursor: pointer;
      position: absolute;
      width: 40px;
      height: 100%;
      z-index: 2;

      &:first-of-type {
        left: 0;
        background: #fff
          url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_minus.png?alt=media&token=17a93d56-1cc9-4611-8287-aa52f27f39b4")
          center center;
      }

      &:last-of-type {
        right: 0;
        background: #fff
          url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_plus.png?alt=media&token=f4a93a20-a294-4ea4-b0a6-4b987111aee5")
          center center;
      }
    }
  }
`;

export const ItemPrice = styled.div`
  width: 215px;
  text-align: center;

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    span {
    }
  }
`;

export const removeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: auto;

  button {
    cursor: pointer;
    display: inline-block;
    background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_remove_20.svg?alt=media&token=fac1d81b-b769-4ab6-91da-300fea2dd09c")
      center center;
    width: 20px;
    height: 20px;
  }
`;

export const OrderMoreWrapper = styled.div`
  text-align: center;
  padding: 25px 0;
  border: 1px solid #f9e8e8;
  background-color: #fef8f8;
  border-radius: 8px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  a {
    font-size: 15px;
    line-height: 18px;
    color: #888;

    text-decoration: underline;
  }
`;

export const RefrigeratedWrapper = styled.div`
  padding-top: ${(props) => props.roomTemperatureItems && "60px"};
`;

export const RemovePopup = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const PopupWrapper = styled.div`
  width: 360px;
  text-align: center;
  max-height: calc(100% - 48px);
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);
`;

export const PopupMessageWrapper = styled.div`
  padding: 50px 40px;
  line-height: 26px;
`;

export const PopupButtonWrapper = styled.div`
  border-top: 1px solid #eee;

  button {
    width: 50%;
    padding: 20px 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    background: white;
    cursor: pointer;

    &:last-of-type {
      border-left: 1px solid #eee;
      color: #d3233a;
    }
  }
`;
