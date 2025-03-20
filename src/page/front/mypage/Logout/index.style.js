import styled from "@emotion/styled";

export const Contents = styled.div`
  height: 522px;
  width: 1125px;
  text-align: center;
  position: relative;

  span {
    display: inline-block;
    background: url(https://www.ottogimall.co.kr/static/imgs/front/cw/images/mp/mp_nonmem_bg.png)
      no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 344px;
    display: flex;
    flex-direction: column;

    a:first-of-type {
      font-size: 15px;
      color: #555;
      text-decoration: underline;
    }

    a:last-child {
      margin-top: 30px;
      padding: 24px 40px 24px 40px;
      background-color: #d3233a;
      border-radius: 6px;
      color: #fff;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
