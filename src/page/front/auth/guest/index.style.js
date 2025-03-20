import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1125px;

  > div {
    h3 {
      font-size: 32px;
    }

    em {
      display: inline-block;
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 40px;
      font-weight: 700;
    }
  }

  > div:first-of-type {
    padding-bottom: 30px;
  }

  > div:last-of-type {
    margin: 0 auto;
    padding: 60px 0 60px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;

    > div:first-of-type {
      text-align: center;
    }

    form {
      width: 450px;
      margin: 0 auto;

      div {
        &:first-of-type {
          margin-bottom: 30px;
        }
        p {
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #333;
          margin-bottom: 10px;
        }

        input {
          display: block;
          width: 100%;
          height: 50px;
          padding: 0 20px;
          font-size: 16px;
          line-height: 50px;
          color: #333;
          border-radius: 6px;
          border: 1px solid #ddd;
          background-color: #fff;
          transition: 0.3s;
        }
      }

      button {
        width: 100%;
        background-color: #d3233a;
        min-width: 128px;
        padding: 20px 40px;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        font-weight: 700;
        font-size: 16px;
        margin-top: 40px;
      }
    }
  }

  > p {
    padding-left: 8px;
    font-size: 15px;
    line-height: 26px;
    color: #333;
    margin-top: 40px;
  }
`;
