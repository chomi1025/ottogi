import { userState } from "@/state/userState";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;

  p {
    padding: 50px 40px;
    line-height: 26px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  background-color: white;
  width: calc(100% / 2);
  border-top: 1px solid #eee;
  cursor: pointer;
  min-width: 128px;
  padding: 20px 40px 20px 40px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  &:first-of-type {
    border-radius: 0 0 0 8px;
    color: #aaa;
  }
  &:last-of-type {
    border-radius: 0 0 8px 0;
    color: #d3233a;
    border-left: 1px solid #eee;
  }
`;

const LoginPopup = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(userState);
  const route = useRouter();

  const handleLogin = () => {
    route.push("/front/auth/login");
  };

  return (
    <Overlay>
      <PopupContainer>
        <p>
          로그인이 필요한 서비스입니다.
          <br />
          로그인 하시겠습니까?
        </p>

        <ButtonWrapper>
          <Button onClick={props.handleClosePopup}>취소</Button>
          <Button onClick={handleLogin}>확인</Button>
        </ButtonWrapper>
      </PopupContainer>
    </Overlay>
  );
};

export default LoginPopup;
