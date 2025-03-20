import styled from "@emotion/styled";

export const inquiry_wrapper = styled.div`
  h4 {
    margin-bottom: 24px;
    font-size: 22px;

    span {
      color: #d3233a;
    }
  }
`;

export const Menu_wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 17px;
  border-bottom: 2px solid #333;

  span {
    font-size: 16px;
    line-height: 24px;
    color: #333;
    word-break: break-all;
  }

  a {
    border: 1px solid #333;
    border-radius: 6px;
    min-width: 90px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
  }
`;

export const inquiry_contents_wrapper = styled.div``;

export const inquiry_contents = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #eee;

  div {
    color: #888;

    span:last-of-type::before {
      content: "·";
      margin-right: 6px;
      margin-left: 6px;
    }
  }

  p {
    margin-top: 11px;
  }

  Button {
    margin-top: 10px;
    background: transparent;
    font-size: 15px;
    color: #d3233a;
    cursor: pointer;
  }

  Button::after {
    display: inline-block;
    content: "";
    background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Fmore-red.svg?alt=media&token=3367e318-d65b-4d2a-a238-d6f8f1fb555d")
      no-repeat center center;
    width: 10px;
    height: 10px;
  }
`;

export const answer = styled.span`
  display: inline-block;
  padding: 3px 6px;
  font-size: 13px;
  color: #fff;
  background-color: #d3233a;
  border-radius: 4px;
  margin-bottom: 5px;
`;
