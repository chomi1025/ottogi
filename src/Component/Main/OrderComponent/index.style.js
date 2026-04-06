import styled from "@emotion/styled";

export const rightWrapper = styled.div`
  section {
    width: 390px;
    margin-left: 60px;
    border: 1px solid #e4e4e4;
    border-radius: 6px;
    overflow: hidden;
    position: sticky;
    top: 95px;
  }
`;

export const TopWrapper = styled.div`
  padding: 30px 30px 0 30px;
  h3 {
    font-size: 28px;
    font-weight: 700;
  }

  > ul {
    padding: 30px 0 25px;
    border-bottom: 1px solid #e4e4e4;

    li {
      display: flex;
      justify-content: space-between;

      &:nth-of-type(2) {
        padding: 15px 0;
      }

      span {
        strong {
        }
      }
    }
  }

  > div {
    margin: 25px 0 32px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ul {
      padding: 40px 0 0;
      color: #aaa;
      font-size: 14px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  gap: 5px;
  width: calc(100% - 5px);

  a {
    min-width: 50%;
    padding: 20px 5px 20px 5px;
    border: 1px solid #d3233a;
    text-align: center;
    border-radius: 6px;
    background-color: white;
    font-weight: 700;
    line-height: 20px;
    color: #d3233a;
    font-size: 16px;
    background-color: white;

    &:last-of-type {
      background-color: #d3233a;
      color: white;
    }
  }
`;

export const GiftButton = styled.span``;

export const OrderButton = styled.span``;

export const EmptyCartButton = styled.div`
  width: 100%;
  padding: 24px 40px;
  border-radius: 0 0 6px 0px;
  background-color: ${(props) => (props.cart ? "#d3233a" : "#ccc")};
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`;

export const FilledCartButton = styled.div``;
