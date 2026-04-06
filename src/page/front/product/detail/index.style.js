import styled from "@emotion/styled";

export const recommend_goods_wrapper = styled.section`
  padding-bottom: 60px;

  h2 {
    font-size: 32px;
    color: #1d1d1b;
    font-weight: 700;
    padding: 40px 0 20px;
  }

  p {
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: bold;

    span {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      font-size: 1.25rem;
      gap: 10px;
      line-height: 1.5rem;
      font-weight: 700;
      padding: 3px 10px;
      align-items: center;
      color: #ffffff;
      background: #df002b;
      border-radius: 4px;
    }
  }
`;

export const product_wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  a {
    width: calc(100% / 4);
    height: 300px;
    background-color: #ddd;
  }
`;
