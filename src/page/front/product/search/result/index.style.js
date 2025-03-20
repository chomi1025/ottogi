import styled from "@emotion/styled";

export const Inner = styled.div`
  width: 100%;
  padding-top: 60px;
  display: flex;
`;

export const Left = styled.div`
  width: calc(100% - 1125px);
  padding: 86px 80px 0 0;
`;

export const Option = styled.div`
  ul {
    li {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #333;
      margin-bottom: 10px;

      input {
        display: none;
      }

      input:checked + label {
        background-color: #d3233a;
      }

      input:checked + label::before {
        content: "";
        position: absolute;
        display: block;
        width: 16px;
        height: 16px;
        background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_check_w.svg?alt=media&token=c65c7f90-5d2f-4ef0-9da3-48a836f6d4fe")
          no-repeat center center;
        background-size: 8px;
      }

      label {
        position: relative;
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        transition: 0.3s;
        margin-right: 4px;
      }

      label::before {
        content: "";
        position: absolute;
        display: block;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_check_gray.svg?alt=media&token=ddf72103-13e5-483c-b606-5ee98868449b")
          no-repeat center center;
        background-size: 8px;
      }
    }
  }
`;

export const Option_Top_Wrapper = styled.div`
  display: flex;
  padding: 18px 0;
  justify-content: space-between;

  h4 {
    font-size: 18px;
  }
`;

export const HideMenu = styled.span`
  display: inline-block;
  background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Farrow-b-20.svg?alt=media&token=3075a72c-df3b-421f-8879-609fbbf06df1")
    no-repeat center center;
  width: 20px;
  height: 20px;
  transition: 0.3s;
  transform: ${(props) => (props.menu ? "" : "rotate(3.142rad)")};
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  a {
    color: #888;
    font-size: 15px;
    text-decoration: underline;
  }
`;

export const Right = styled.div`
  width: 1125px;
`;

export const Search_result_wrapper = styled.div`
  span {
    display: inline-block;
    font-size: 40px;
    margin-bottom: 40px;

    strong {
      color: #d3233a;
      margin-right: 10px;
    }
  }
`;

export const Recommend_Wrapper = styled.div`
  margin-bottom: 143px;
  h6 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    li {
      color: #d3233a;
      margin-right: 20px;
    }
  }
`;

export const Main_contents_wrapper = styled.div``;

export const TabMenu_wrapper = styled.div`
  display: flex;
`;

export const Button = styled.div`
  font-size: 18px;
  width: 50%;
  text-align: center;
  font-weight: ${(props) => props.tab && "700"};
  color: ${(props) => (props.tab ? "white" : "#333")};
  border: ${(props) => (props.tab ? "#d3233a" : "1px solid #e4e4e4")};
  border-radius: ${(props) => {
    if (props.index === 1) {
      return "6px 0 0 6px";
    } else if (props.index === 2) {
      return "0 6px 6px 0";
    }
    return "0";
  }};
  padding: 16px;
  background-color: ${(props) => props.tab && "#d3233a"};
`;

export const Result_page = styled.div``;
