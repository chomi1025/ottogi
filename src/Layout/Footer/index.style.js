import styled from "@emotion/styled";

export const Footer = styled.footer`
  background-color: #f8f8f8;
  color: #555555;
`;

export const Inner = styled.div`
  width: 1410px;
  margin: 0 auto;
  padding: 68px 0 74px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Top_left = styled.div``;

export const Top_left_list = styled.ul`
  display: flex;

  li {
    margin-right: 40px;
  }
`;

export const Top_left_address = styled.address`
  margin-top: 40px;
  font-size: 15px;
  color: #555555;
  font-style: none;

  p {
    span {
      position: relative;
      margin-left: 24px;
    }
  }

  p:nth-of-type(2),
  p:nth-of-type(3) {
    margin-top: 10px;
  }
`;

export const Top_left_nice = styled.div`
  margin-top: 30px;

  p {
    font-size: 15px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    line-height: 25px;
    font-size: 15px;

    span:nth-of-type(2) {
      background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_nice.png?alt=media&token=60ded3ab-2099-4ed9-9ace-255e78f58c9d)
        no-repeat center center;
      background-size: auto 50px;
      width: 50px;
    }
  }
`;

export const Top_right = styled.div`
  text-align: right;

  div {
    font-size: 14px;
    p {
      line-height: 26px;
    }
  }

  h3 {
    color: #00317a;
    font-size: 30px;
    padding: 5px 0 7px;
  }
`;

export const Top_right_icons = styled.ul`
  display: flex;
  justify-content: right;
  margin-top: 15px;

  li {
    margin-left: 30px;
    width: 24px;
    height: 24px;
  }
`;

export const Bottom = styled.div``;
