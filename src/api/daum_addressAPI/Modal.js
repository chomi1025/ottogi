import { useEffect } from "react";
import * as M from "./Modal.style.js"; // 스타일을 위해 CSS 파일 추가

export default function Modal(props) {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden"; // 스크롤 잠금
    } else {
      document.body.style.overflow = "unset"; // 원래 상태로 복원
    }

    return () => {
      document.body.style.overflow = "unset"; // 컴포넌트 언마운트 시 원래 상태로 복원
    };
  }, [props.isOpen]);

  if (!props.isOpen) return null;

  return (
    <M.modalOverlay onClick={props.onClose}>
      <M.modalContent onClick={(e) => e.stopPropagation()}>
        <M.closeButton className="close-button" onClick={props.onClose}>
          X
        </M.closeButton>
        {props.children}
      </M.modalContent>
    </M.modalOverlay>
  );
}
