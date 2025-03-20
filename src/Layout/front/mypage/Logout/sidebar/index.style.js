import styled from "@emotion/styled";

export const Inner = styled.div`
  padding-right: 60px;
  width: calc(100% - 1125px);
  position: sticky;
  top: 95px;

  h2 {
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    margin-bottom: 28px;
  }

  ul {
    li {
      color: #555;
      font-size: 15px;
      margin-bottom: 10px;
      &:first-of-type {
        color: #333;
        margin-bottom: 15px;
        font-size: 18px;
      }
    }

    &:not(:first-of-type) {
      margin-top: 38px;
    }
  }
`;
