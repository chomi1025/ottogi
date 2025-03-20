import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1050px;

  h3 {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 30px;
  }

  input {
    border-radius: 25px;
    border: 2px solid #e4e4e4;
    display: block;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    font-size: 16px;
    line-height: 50px;
    color: #333;
  }

  ul:first-of-type {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 30px;

    li {
      width: calc(100% / 4);

      span {
        display: block;
        padding: 15px 10px 14px 10px;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        border-radius: 6px;
        border: 1px solid #e4e4e4;
      }

      &:not(:first-of-type, :nth-of-type(4), :nth-of-type(5), :last-of-type)
        span {
        margin: 0 5px;
      }

      &:first-of-type span,
      :nth-of-type(5) span {
        margin-right: 5px;
      }

      &:nth-of-type(4) span,
      :nth-of-type(8) span {
        margin-left: 5px;
      }

      &:not(:first-of-type, :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
        margin-top: 10px;
      }
    }
  }

  ul:last-of-type {
  }
`;

export const StyledUl = styled.ul`
  border-top: 2px solid #333;

  .active button {
    color: #d3233a;
  }

  li {
    border-bottom: 1px solid #eee;

    button {
      cursor: pointer;
      text-align: left;
      padding: 22px 60px 22px 20px;
      font-size: 16px;
      width: 100%;
      height: 100%;
      background-color: white;

      em {
        display: inline-block;
        width: 25px;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        color: #d3233a;
      }
    }

    div {
      display: flex;
      background-color: #fafafa;
      padding: 25px 20px;

      em {
        width: 26px;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        color: #888;
      }

      p {
        line-height: 26px;
      }
    }
  }
`;
