import styled from "@emotion/styled";

export const wrapper = styled.div`
  width: ${(props) =>
    (props.lastSegment == "faq" && "1410px") ||
    (props.lastSegment == "main" && "1280px") ||
    (props.lastSegment == "order_policy" && "1280px") ||
    (props.lastSegment == "gift" && "1280px")};
  margin: 0 auto;
  padding-top: ${(props) =>
    (props.lastSegment == "faq" && "55px") ||
    (props.lastSegment == "main" && "35px") ||
    (props.lastSegment == "order_policy" && "35px") ||
    (props.lastSegment == "gift" && "35px")};
  display: flex;
  justify-content: space-between;
`;

export const sideMenu = styled.div`
  width: ${(props) =>
    (props.lastSegment == "faq" && "calc(100% - 1125px)") ||
    (props.lastSegment == "main" && "calc(100% - 1050px)") ||
    (props.lastSegment == "order_policy" && "calc(100% - 1050px)") ||
    (props.lastSegment == "gift" && "calc(100% - 1050px)")};
`;

export const inner = styled.div`
  padding-right: 60px;

  h3 {
    font-size: 32px;
    line-height: 38px;
  }

  ul:first-of-type {
    margin-top: 20px;

    li {
    }
  }

  ul:last-of-type {
    margin-top: 25px;

    li {
      &:first-of-type {
        font-weight: 500;
        line-height: 20px;
      }

      &:nth-of-type(2) {
        padding-top: 3px;
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;
      }

      &:last-of-type {
        padding-top: 5px;
        font-size: 14px;
        line-height: 24px;
        color: #888;
      }
    }
  }
`;

export const menu = styled.li`
  padding: 17px 0;
  border-bottom: 1px solid #eee;

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #333;

    &:hover {
      font-weight: 700;
      color: #d3233a;
    }
  }

  a {
    color: ${(props) =>
      props.address === props.currentPath ? "#d3233a" : "#333"};
    font-weight: 700;
  }
`;
