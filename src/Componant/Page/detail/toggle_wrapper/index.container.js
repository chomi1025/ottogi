import ToggleWrapperUI from "./index.presenter";

export default function ToggleWrapper(props) {
  return (
    <ToggleWrapperUI
      top={props.top}
      title={props.title}
      toggle={props.toggle}
      onclickToggle={props.onclickToggle}
    />
  );
}
