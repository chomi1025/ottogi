import styled from "@emotion/styled";

export const snsWrapper = styled.div`
  margin-top: 80px;

  strong {
    padding: 0 15px;
  }

  div {
    margin-top: 25px;

    > a {
      display: inline-block;
      width: 60px;
      height: 60px;
      font-size: 15px;
      line-height: 18px;
      color: #333;

      span {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
      }
    }

    > a:first-of-type {
      span {
        background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_sns_kakao.png?alt=media&token=648b93b7-0cda-4582-8df3-0ed25922f7e6)
          no-repeat center center;
        width: 100%;
        height: 100%;
      }
    }

    > a:nth-of-type(2) {
      margin-left: 40px;

      span {
        background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_sns_naver.png?alt=media&token=f6f9efff-2e8e-44fd-8dab-48d87cd22975)
          no-repeat center center;
        width: 100%;
        height: 100%;
      }
    }

    > a:nth-of-type(3) {
      margin-left: 40px;

      span {
        background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_sns_apple.png?alt=media&token=40986fff-2612-4779-a7bb-6c3da0098c05)
          no-repeat center center;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const JoinMessage = styled.strong`
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 0 15px;
  font-size: 16px;
  line-height: 19px;
  background-color: #fff;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  span {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 15px;
    font-size: 16px;
    line-height: 19px;
    background-color: #fff;
  }
`;

export const LoginMessage = styled.strong``;

export const customerMessage = styled.p`
  margin-top: 40px;
  font-size: 15px;

  a {
    color: #555;
    text-decoration: underline;
  }
`;

export const employeeMessage = styled.p`
  margin-top: 40px;

  span {
    color: red;
  }

  a {
    color: red;
    text-decoration: underline;
  }
`;
