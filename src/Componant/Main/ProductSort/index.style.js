import styled from "@emotion/styled";

export const Menu_wrapper = styled.div`
  margin-top: ${(props) => props.marginTop || "0px"};
  width: 100%;
`;

export const Top = styled.div`
  width: 100%;

  padding-top: ${(props) => props.subCategories.length && "20px"};
  padding-bottom: ${(props) => props.subCategories.length && "20px"};
  border-top: 2px solid #333;
  border-bottom: ${(props) => props.subCategories.length && "1px solid #eee"};
`;

export const TapMenu = styled.span`
  margin-top: 20px;
  margin-right: 30px;
  font-size: 18px;
  font-weight: ${(props) => props.active && "700"};
  color: ${(props) => props.active && "#d3233a"};
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 0;
  border-bottom: 2px solid #333;
`;

export const Menu_right = styled.div`
  position: relative;
  display: flex;

  ul {
    display: flex;
  }
`;

export const List = styled.li`
  color: ${(props) => (props.active ? "1d1d1b" : "#888888")};
  font-weight: ${(props) => props.active && "700"};
  margin-left: 30px;
  display: flex;

  div {
    background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_check_w_14.png?alt=media&token=f97b8ffd-f4ea-457c-96b5-6ba9f2c99d70")
      no-repeat center center;
    width: 20px;
  }
`;

export const ChangeList = styled.div`
  background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_change_list.png?alt=media&token=0b08a321-dc82-494e-a544-b937b67da0ab")
    no-repeat center center;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  cursor: pointer;
`;

export const Select_Delivery = styled.div`
  select {
    margin: 0 20px;
    width: 95px;
  }
`;

export const Select_Count = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 12px;
    border-left: 1px solid #dfdfdf;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    height: 12px;
    border-left: 1px solid #dfdfdf;
    transform: translateY(-50%);
  }
  select {
    margin: 0 20px;
    width: 95px;
  }
`;
