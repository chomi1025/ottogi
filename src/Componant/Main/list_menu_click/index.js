import styled from "@emotion/styled";

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

export default function ListTapmenu(props) {
  return (
    <List active={props.active} onClick={props.onClick}>
      {props.active && <div />}
      {props.text}
    </List>
  );
}
