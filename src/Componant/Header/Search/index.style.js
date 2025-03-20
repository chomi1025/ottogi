import styled from "@emotion/styled";

export const Search = styled.div`
  position: absolute;
  width: 1410px;
  height: 45px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 1410px;
  height: 45px;

  form {
    position: absolute;
    display: block;
    width: 470px;
    height: 100%;

    left: 50%;
    transform: translateX(-50%);

    input {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 60px 0 20px;
      border-radius: 100px;
      border: 1px solid #ddd;
      transition-duration: 0.3s;

      &:hover {
        border: 1px solid #1d1d1b;
      }

      &:focus {
        outline: 0;
        border: 1px solid #1d1d1b;
      }
    }

    button {
      background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_search_21.svg?alt=media&token=9d81e838-d259-400a-a56a-e1af6f79daec)
        no-repeat center center;
      width: 21px;
      height: 21px;
      position: absolute;
      top: 12px;
      right: 20px;
      cursor: pointer;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: ${(props) => (props.isDropdownVisible ? "flex" : "none")};
  border: 1px solid #eee;
  background: white;
  border-radius: 10px;
  position: absolute;
  z-index: 1000;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
`;

export const RecentWrapper = styled.div`
  border-right: 1px solid #eee;
  div {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 20px;

    button {
      font-size: 15px;
      color: #888;
      background-color: transparent;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  ul {
    color: #333;
    li {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        position: relative;

        &::after {
          content: "";
          width: 0;
          height: 1px;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: #333;
          transition: 0.3s;
        }

        &:hover {
          &::after {
            content: "";
            width: calc(100% + 10px);
            height: 1px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #333;
            transition: 0.3s;
          }
        }
      }

      button {
        cursor: pointer;
        background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_remove_16.png?alt=media&token=e7311ca7-8f04-42ed-af8b-e23228c8ae04)
          no-repeat center center;
        width: 16px;
        height: 16px;
      }
    }
  }

  padding: 29px 30px;
  width: 238px;
`;

export const RecommendedWrapper = styled.div`
  min-height: 457px;
  padding: 29px 30px;
  width: 238px;
  border-right: 1px solid #eee;

  ul {
    margin-top: 20px;

    li {
      color: #d3233a;
      font-size: 15px;
      margin-bottom: 40px;

      a {
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;

        &::after {
          display: inline-block;
          position: absolute;
          content: "";
          width: 0;
          height: 1px;
          left: 0;
          bottom: 0;
          background-color: #1d1d1b;
          transition: 0.3s;
        }

        &:hover::after {
          display: block;
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #1d1d1b;
          transition: 0.3s;
        }
      }
    }
  }
`;

export const PopularWrapper = styled.div`
  padding: 29px 30px;
  width: 238px;

  div {
    display: flex;
    align-items: end;
    justify-content: space-between;

    span {
      font-size: 14px;
      color: #aaa;
    }
  }

  ul {
    padding-top: 20px;

    li {
      margin-bottom: 20px;

      span {
        display: inline-block;
        width: 20px;
        font-weight: 700;
        margin-right: 7px;
        text-align: center;
      }

      a {
        position: relative;

        &::after {
          display: block;
          position: absolute;
          content: "";
          width: 0;
          height: 1px;
          bottom: 1px;
          left: 0;
          background-color: #1d1d1b;
          transition: 0.3s;
        }

        &:hover::after {
          display: block;
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;

          left: 0;
          background-color: #1d1d1b;
          transition: 0.3s;
        }
      }
    }
  }
`;

export const KeywordsTop3 = styled.span`
  font-size: 15px;
  color: #d3233a;
`;

export const KeywordsIndex = styled.span`
  font-size: 15px;
`;

export const Bottom = styled.nav`
  background-color: white;
  position: sticky !important;
  z-index: 999;
  width: 100%;
  height: auto;
  top: 0px;
  left: 0;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);
`;
