import styled from "@emotion/styled";
import { userState } from "@/state/userState";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import LoginPopup from "../../LoginPopup";

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  line-height: ${(props) => props.lineHeight};
`;

export default function LoginRequiredButton(props) {
  const user = useRecoilValue(userState); // 로그인 상태 가져오기

  const [showLoginPopup, setShowLoginPopup] = useState(false); // 로그인 팝업 상태

  const handleOpenPopup = () => {
    if (!user.isLoggedIn) {
      setShowLoginPopup(true); // 로그인하지 않으면 팝업을 띄운다.
    } else {
      console.log("로그인상태군요");
    }
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      {/* 체크박스 있는버전 */}
      {props.check && (
        <div>
          <input type="checkbox" />
          <Button
            onClick={handleOpenPopup}
            width={props.width}
            height={props.height}
            border={props.border}
            background={props.background}
            color={props.color}
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
            padding={props.padding}
            borderRadius={props.borderRadius}
            lineHeight={props.lineHeight}
          >
            {props.text}
          </Button>
        </div>
      )}

      {/* 체크박스 없는버전 */}
      {props.check || (
        <Button
          onClick={handleOpenPopup}
          width={props.width}
          height={props.height}
          border={props.border}
          background={props.background}
          color={props.color}
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
          padding={props.padding}
          borderRadius={props.borderRadius}
          lineHeight={props.lineHeight}
        >
          {props.text}
        </Button>
      )}

      {showLoginPopup && <LoginPopup handleClosePopup={handleClosePopup} />}
    </>
  );
}
