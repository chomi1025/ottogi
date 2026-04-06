import styled from "@emotion/styled";

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;

  > div {
    display: flex;
    align-items: center;

    > strong {
      margin-left: 10px;
    }

    &:first-of-type {
      line-height: 24px;
      color: #333;
      font-weight: 700;
    }
  }

  ul {
    display: flex;
  }
`;

export const RemoveSoldOut = styled.li`
  font-size: 15px;
  line-height: 18px;
  color: #888;
`;

export const RemoveSelected = styled.li`
  position: relative;
  font-size: 15px;
  line-height: 18px;
  color: #888;
  padding-left: 21px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    height: 12px;
    border-left: 1px solid #ccc;
    transform: translateY(-50%);
  }
`;

export const ContentsWrapper = styled.div`
  border-bottom: 1px solid #eee;
  padding: 110px 0;

  span {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: #d3233a;
    margin-top: 20px;
    font-weight: 700;
    a {
      display: inline-block;
      padding: 20px 40px;
      border: 1px solid #d3233a;
      border-radius: 6px;
      text-align: center;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 18px;

  &::before {
    content: "";
    display: block;
    background: url(https://www.ottogimall.co.kr/static/imgs/front/cw/images/icon_mark02.png)
      no-repeat center;
    height: 50px;
    margin-bottom: 10px;
  }
`;
