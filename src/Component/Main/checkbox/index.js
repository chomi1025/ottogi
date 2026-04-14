import styled from "@emotion/styled";
import { Check } from "lucide-react";

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  padding-left: ${(props) => props.paddingLeft};

  input {
    display: none;
  }

  strong {
    margin-left: 10px;
  }
`;

const CheckBox = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) => (props.checked ? "#d3233a" : "transparent")};
  border: ${(props) =>
    props.checked ? "1px solid #d3233a" : "1px solid #ddd"};
  width: 24px;
  height: 24px;
  transition: 0.3s;
  border-radius: 4px;
`;

export default function CheckboxComponent(props) {
  return (
    <>
      <CheckBoxWrapper width={props.width} paddingLeft={props.paddingLeft}>
        <CheckBox checked={props.checked}>
          <input
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange || (() => {})}
          />
          {props.checked && <Check size={18} color="white" strokeWidth={3} />}
        </CheckBox>
      </CheckBoxWrapper>
    </>
  );
}
