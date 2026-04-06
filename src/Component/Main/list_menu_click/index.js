import styled from "@emotion/styled";

export const List = styled.li`
  color: ${(props) => (props.active ? "1d1d1b" : "#888888")};
  font-weight: ${(props) => props.active && "700"};
  margin-left: 30px;
  display: flex;
`;

export default function ListTapmenu(props) {
  return (
    <List active={props.active} onClick={props.onClick}>
      {props.text}
    </List>
  );
}
