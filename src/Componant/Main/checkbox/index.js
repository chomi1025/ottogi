import styled from "@emotion/styled";

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
  display: inline-block;
  position: relative;
  background-color: ${(props) => props.checked && "#d3233a"};
  border: ${(props) => props.checked || "1px solid #ddd"};
  width: 24px;
  height: 24px;
  transition: 0.3s;
  border-radius: 4px;

  &::after {
    content: "";
    background: ${(props) =>
      props.checked
        ? "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_check_w.svg?alt=media&token=c65c7f90-5d2f-4ef0-9da3-48a836f6d4fe)no-repeat center center"
        : "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_check_gray.svg?alt=media&token=ddf72103-13e5-483c-b606-5ee98868449b)no-repeat center center"};
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  input {
  }
`;

export default function CheckboxComponent(props) {
  return (
    <>
      <CheckBoxWrapper width={props.width} paddingLeft={props.paddingLeft}>
        <CheckBox checked={props.checked}>
          <input
            type="checkbox"
            checked={props.checked}
            onChange={props.onChange}
          />
        </CheckBox>
      </CheckBoxWrapper>
    </>
  );
}
