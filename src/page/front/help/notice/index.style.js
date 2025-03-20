import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 1125px;

  h3 {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 30px;
  }

  ul:first-of-type {
    border-top: 2px solid #333;

    li {
      display: flex;
      border-bottom: 1px solid #eee;

      a {
        display: flex;
        width: 1005px;
        padding: 20px;
        line-height: 23px;
        font-weight: 700;

        span {
          margin-right: 10px;
          padding: 0 6px;
          font-size: 13px;
          line-height: 21px;
          color: #888;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
        }
      }

      > p {
        padding: 20px;
        line-height: 23px;
        color: #aaa;
        font-size: 15px;
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

  .inactive:hover {
    span {
      position: relative;
      color: black;
      font-weight: 700;

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
