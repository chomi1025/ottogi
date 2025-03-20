import styled from "@emotion/styled";

export const Icons = styled.div`
  display: flex;
  font-size: 14px;
  align-items: end;
`;

export const Icon_login = styled.div`
  cursor: pointer;

  a {
    position: relative;
    display: block;
    text-align: center;

    span {
      display: inline-block;
      text-align: center;
      width: 30px;
      height: 30px;
      background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_login.svg?alt=media&token=11906fe3-e397-4d98-b8bd-d5636de35dcc")
        no-repeat center top;
      background-size: contain;
    }

    p {
      letter-spacing: -1px;
      margin-top: 6px;
    }
  }
`;

export const Icon_logout = styled.div`
  cursor: pointer;

  a {
    position: relative;
    display: block;
    text-align: center;

    span {
      display: inline-block;
      text-align: center;
      width: 30px;
      height: 30px;
      background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_login.svg?alt=media&token=11906fe3-e397-4d98-b8bd-d5636de35dcc")
        no-repeat center top;
      background-size: contain;
    }

    p {
      letter-spacing: -1px;
      margin-top: 6px;
    }
  }
`;

export const Icon_mypage = styled.div`
  margin: 0 20px;
  position: relative;
  display: block;
  text-align: center;

  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_my.svg?alt=media&token=43c2b447-db42-4ac6-aa61-20d020675434")
      no-repeat center top;
    background-size: contain;
  }

  p {
    letter-spacing: -1px;
    margin-top: 6px;
  }
`;

export const Icon_cart = styled.div`
  a {
    position: relative;
    display: block;
    text-align: center;

    p {
      letter-spacing: -1px;
      margin-top: 6px;
    }
  }
`;

export const Icon = styled.span`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_bag.svg?alt=media&token=fccb3c5a-7b5f-4bb6-bf87-3933fc0ec692")
    no-repeat center top;
  background-size: contain;
`;

export const number = styled.span`
  position: absolute;
  top: -5px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-weight: 600;
  font-size: 11px;
  line-height: 1;
  color: #fff;
  text-align: center;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: #d3233a;
`;
