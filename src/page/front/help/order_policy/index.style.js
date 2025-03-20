import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1050px;

  h3 {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 30px;
  }

  div {
    &:not(:first-of-type) {
      margin-top: 40px;
    }
    strong {
      display: inline-block;
      padding-bottom: 9px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #333;
    }

    ul {
      li {
        position: relative;
        padding-left: 8px;
        font-size: 16px;
        line-height: 29px;
        color: #333;

        &::before {
          content: "·";
          position: absolute;
          left: 0;
        }
      }
    }
  }
`;

export const red = styled.span`
  color: #d3233a;
`;

export const blue = styled.span`
  color: #0a309e;
`;
