import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: calc(100% - 1125px);

  h3 {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 28px;
  }

  ul {
    margin-top: 28px;

    &:not(:first-of-type) {
      margin-top: 38px;
    }

    li {
      margin-top: 10px;
      color: #555;
      font-size: 15px;

      &:first-of-type {
        color: #333;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 15px;
      }
    }
  }
`;

export const Inner = styled.div`
  padding-right: 60px;
  position: sticky;
  top: 95px;
`;
