import styled from "@emotion/styled";

export const goods_review = styled.div``;

export const review_title_wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h4 {
    font-size: 22px;
  }

  button {
  }
`;

export const grade_Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 42px;

  h4 {
    font-size: 40px;
  }

  div {
    width: 150px;
    height: 30px;
    margin: 1px auto 15px;
  }

  p {
    font-size: 16px;
    line-height: 18px;
    color: #888;
    font-weight: 400;
  }
`;

export const review_list_wrapper = styled.div``;

export const review_list_menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #333;
  padding-bottom: 15px;
  ul {
    display: flex;
  }
`;

export const review_list = styled.div``;

export const review = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #eee;
`;

export const review_grade_wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const grade_star = styled.span`
  display: inline-block;
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_star.svg?alt=media&token=e6b2b656-105f-40b8-b5f1-1ce8b32c0a1f)
    no-repeat center center;
  background-size: 14px;
  width: 14px;
  height: 14px;
`;

export const grade_number = styled.span`
  font-weight: 600;
  margin-left: 5px;
`;

export const user_wrapper = styled.div`
  margin: 6px 0 10px;
  color: #888;
  font-size: 15px;
`;

export const user_id = styled.span``;
export const date = styled.span`
  &::before {
    content: "·";
    display: inline-block;
    margin-right: 6px;
    margin-left: 6px;
  }
`;
export const contents_wrapper = styled.div`
  white-space: pre-wrap;
  line-height: 24px;
`;

export const more_button = styled.button`
  display: block;
  margin-top: 10px;
  font-size: 15px;
  color: #d3233a;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::after {
    content: "";
    display: inline-block;
    background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Fmore-red.svg?alt=media&token=3367e318-d65b-4d2a-a238-d6f8f1fb555d)
      no-repeat center center;
    width: 10px;
    height: 10px;
    margin-left: 3px;
  }
`;

export const pagenation_wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .pagination {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-of-type {
    border-radius: 5px 0 0 5px;
    a {
      background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_pagination_first.png?alt=media&token=2807c7d3-a505-462d-ac81-b4c7a18dc219)
        no-repeat center center;
      width: 34px;
      height: 34px;
      border: none;
    }
  }

  ul.pagination li:nth-of-type(2) {
    border-radius: 5px 0 0 5px;
    a {
      background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_pagination_prev.png?alt=media&token=b0a4d43a-7d8b-4908-8fb9-2cc03d53902d)
        no-repeat center center;
      width: 34px;
      height: 34px;
      border: none;
    }
  }

  ul.pagination li:nth-of-type(8) {
    border-radius: 5px 0 0 5px;
    a {
      background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_pagination_next.png?alt=media&token=7d119c61-0205-4627-a8f9-0e884f1de6df)
        no-repeat center center;
      width: 34px;
      height: 34px;
      border: none;
    }
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
    a {
      background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_pagination_last.png?alt=media&token=d76d36b2-26a7-4000-bb94-a526a26ca46b)
        no-repeat center center;
      width: 34px;
      height: 34px;
      border: none;
    }
  }

  ul.pagination li a {
    text-decoration: none;
    color: #888888;
    border-bottom: 2px solid transparent;
  }

  ul.pagination li.active a {
    color: #1d1d1d;
    font-weight: 700;
    border-bottom: 2px solid;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: #1d1d1d;
    font-weight: 700;
  }

  ul.pagination li:nth-of-type(3) {
    margin-left: 12px;
  }
  ul.pagination li:nth-of-type(7) {
    margin-right: 12px;
  }
  ul.pagination li:nth-of-type(3),
  ul.pagination li:nth-of-type(4),
  ul.pagination li:nth-of-type(5),
  ul.pagination li:nth-of-type(6),
  ul.pagination li:nth-of-type(7) {
    padding: 0 5px;
  }

  ul.pagination li:nth-of-type(3) a:hover,
  ul.pagination li:nth-of-type(4) a:hover,
  ul.pagination li:nth-of-type(5) a:hover,
  ul.pagination li:nth-of-type(6) a:hover,
  ul.pagination li:nth-of-type(7) a:hover {
    border-bottom: 2px solid #1d1d1d;
  }
`;

export const pagenation_button_first = styled.button``;

export const pagenation_button_prev = styled.button``;

export const pagenation_button_next = styled.button``;
