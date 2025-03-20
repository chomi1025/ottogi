import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 1125px;

  h3 {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    padding: 20px 30px;
    background: #f8f8f8;
    border-radius: 6px;
    margin-bottom: 30px;

    max-width: 100%;
    min-width: 110px;
    select {
      border-radius: 6px 0 0 6px;
      background-color: #fff;
      display: inline-block;
      padding: 0 55px 0 20px;
      height: 50px;
      font-size: 14px;
      border: 1px solid #ddd;
      transition: 0.3s;
      width: 140px;
      max-width: 100%;
      min-width: 110px;
    }

    input {
      display: block;
      width: 100%;
      height: 50px;
      padding: 0 20px;
      font-size: 16px;
      line-height: 50px;
      color: #333;
      border: 1px solid #ddd;
      background-color: #fff;
      transition: 0.3s;
    }

    button {
      background-color: #fff;
      border: 1px solid #333;
      text-align: center;
      border-radius: 6px;
      width: 66px;
      margin-left: 10px;
    }
  }

  > div {
    width: 100%;

    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 14px;

      p {
        strong {
        }
      }

      a {
        min-width: 90px;
        padding: 10px 20px;
        border: 1px solid #333;
        border-radius: 6px;
        text-align: center;
        border-radius: 6px;
        font-size: 15px;
      }
    }

    ul:first-of-type {
      border-top: 2px solid #333;
      li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        line-height: 23px;

        > div {
          display: flex;
          align-items: center;
          padding: 20px;
          width: 885px;

          span:first-of-type {
            padding: 0 6px;
            font-size: 13px;
            line-height: 23px;
            border-radius: 4px;
            color: #fff;
            background-color: #d3233a;
          }

          a {
            margin-left: 20px;
          }
        }

        > p {
          width: 120px;
          padding: 20px;
          text-align: center;
          color: #aaa;
        }
      }
    }
  }
`;

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 34px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 100%;
    color: #888;
  }

  .active {
    color: black;

    span {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -3px;
        width: 100%;
        border-bottom: 2px solid #1d1d1d;
        transform: translateX(-50%);
      }
    }
  }

  li:first-of-type {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fmypage%2Ficons%2Ficon_pagination_first.png?alt=media&token=c0740273-08d3-4219-903f-30eb46ee2f3e);
  }
  li:nth-of-type(2) {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fmypage%2Ficons%2Ficon_pagination_prev.png?alt=media&token=2cbba6b7-4696-409f-a240-4d250c8cd66a);
  }
  li:nth-of-type(13) {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fmypage%2Ficons%2Ficon_pagination_next.png?alt=media&token=90e9281f-0758-4e78-a462-6d1a8f88932f);
  }
  li:last-of-type {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fmypage%2Ficons%2Ficon_pagination_last.png?alt=media&token=e83c0137-83bb-4aa4-8830-9cfe94acdab6);
  }
`;
