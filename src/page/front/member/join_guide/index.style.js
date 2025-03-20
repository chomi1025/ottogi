import styled from "@emotion/styled";

export const Wrapper = styled.div`
  text-align: center;

  > div {
    width: 450px;
    margin: 0 auto;

    > a {
      width: 450px;
      display: inline-block;
      background-color: #d3233a;
      min-width: 134px;
      padding: 24px 40px 24px 40px;
      text-align: center;
      border-radius: 6px;
      color: white;
      margin-top: 20px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
  }

  h2 {
    margin-top: 40px;
    color: #00317a;
    font-size: 32px;
    margin-bottom: 15px;
  }

  p:first-of-child {
    font-size: 18px;
    color: #333;
  }
`;

export const ItemWrapper = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 35px 20px;
  border-radius: 8px;
  border: 1px solid #eee;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  padding: 35px 20px;
`;

export const Item = styled.li`
  width: calc(100% / 3);
`;

export const Icon = styled.span`
  display: inline-block;
  background: ${(props) => `url(${props.src}) no-repeat center center`};
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;
