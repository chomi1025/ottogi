import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1050px;
`;

export const CenterSearch = styled.section`
  margin-bottom: 60px;
  padding: 40px 50px;
  border-radius: 10px;
  background-color: #f8f2eb;

  h3 {
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 34px;
  }

  input {
    display: block;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    font-size: 16px;
    line-height: 50px;
    color: #333;
    background-color: #fff;
    border-radius: 25px;
  }

  div {
    display: flex;
    margin-top: 15px;

    strong {
      width: 100px;
    }

    ul {
      display: flex;
      li {
        margin-right: 40px;
        position: relative;
        &:not(:last-of-type)::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -20px;
          height: 12px;
          border-left: 1px solid #e4d8cd;
          transform: translateY(-50%);
        }
      }
    }
  }
`;

export const ServiceLinks = styled.section`
  h4 {
    font-size: 22px;
    line-height: 26px;
  }

  ul {
    display: flex;
    margin-top: 20px;
    li {
      width: calc(100% / 4);
      text-align: center;

      &:first-of-type {
        a {
          margin: 0 10px 0 0;
        }
      }

      &:last-of-type {
        a {
          margin: 0 0 0 10px;
        }
      }

      a {
        display: block;
        padding: 17px 0 16px 0;
        border-radius: 6px;
        border: 1px solid #e4e4e4;
        margin: 0 10px;

        font-weight: 700;
        line-height: 30px;
        color: #333;
      }
    }
  }
`;

export const QATop5 = styled.section`
  margin-top: 60px;

  > a {
    display: inline-block;
    padding-right: 24px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
  }

  ul {
    display: flex;
    margin-top: 20px;

    li {
      width: calc(100% / 5);

      border-radius: 8px;
      background-color: #fafafa;
      position: relative;

      a {
        display: block;
        padding: 24px 19px 39px 19px; /* padding을 li 대신 a 태그로 옮기기 */
        cursor: pointer;
      }
      &::after {
        content: ""; /* 초기 상태 정의 */
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 8px;
        background-color: transparent;
        border: 1px solid transparent; /* 초기 상태를 transparent로 설정 */
        transition: 0.3s; /* 초기 상태에도 transition 추가 */
        pointer-events: none; /* 클릭 이벤트 무시 */
      }

      &:hover::after {
        background-color: transparent;
        border: 1px solid #333;
      }

      em {
        display: block;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #d3233a;
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: 16px;
        line-height: 26px;
        color: #333;
        word-break: break-all;
      }

      &:not(:first-of-type, :last-of-type) {
        margin: 0 10px;
      }

      &:first-of-type {
        margin-right: 10px;
      }

      &:last-of-type {
        margin-left: 10px;
      }
    }
  }
`;
