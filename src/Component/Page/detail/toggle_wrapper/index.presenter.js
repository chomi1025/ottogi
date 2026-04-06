import * as T from "./index.style";

export default function ToggleWrapperUI(props) {
  return (
    <T.toggle_wrapper
      top={props.top}
      toggle={props.toggle}
      onClick={props.onclickToggle}
    >
      <T.title_wrapper>
        <h6>{props.title}</h6>
        <T.toggleIcon toggle={props.toggle} />
      </T.title_wrapper>
      <T.Contents_wrapper toggle={props.toggle}>
        본문 솰라솰라
      </T.Contents_wrapper>
    </T.toggle_wrapper>
  );
}
