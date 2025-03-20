import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1050px;

  h3 {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 30px;
  }

  > div {
    width: 100%;
    text-align: center;
    margin-top: 100px;

    > div {
      margin-bottom: 40px;
    }
  }

  ul {
    margin-top: 30px;
    li {
      position: relative;
      padding-left: 8px;
      font-size: 15px;
      line-height: 26px;
      color: #333;

      &::before {
        content: "·";
        position: absolute;
        left: 0;
      }
    }
  }

  figure {
    text-align: center;
    margin-top: 40px;
    a {
      display: inline-block;
      width: 450px;
      text-align: center;
      padding: 24px 40px 24px 40px;
      border: 1px solid #d3233a;
      border-radius: 6px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #d3233a;

      span {
        position: relative;
        align-items: center;
        justify-content: center;
        padding-left: 25px;

        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          left: 0;
          background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fhelp%2Fgift%2Ficon_gift.svg?alt=media&token=74b41efc-62f3-4e28-a780-d36aeec1191f)
            no-repeat center center;
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`;
