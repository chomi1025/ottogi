import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const ComponentWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_share.svg?alt=media&token=c16db256-7e67-47b5-b62b-98096eba9cc2);
`;

const PopupWrapper = styled.div`
  display: block;
  position: absolute;
  top: 44px;
  left: auto;
  right: 0;
  bottom: auto;
  z-index: 2;
  width: 320px;
  background: white;
  border: 1px solid #e4e4e4;
  border-radius: 10px;

  h4 {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    line-height: 26px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  padding: 0 20px 0;
`;

const Kakao = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  background: white;
  font-size: 15px;

  span {
    display: block;
    width: 48px;
    height: 48px;
    background-color: yellow;
    margin-bottom: 10px;
    border-radius: 50%;
  }
`;

const Facebook = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  background: white;
  font-size: 15px;

  span {
    display: block;
    width: 48px;
    height: 48px;
    background-color: blue;
    margin-bottom: 10px;
    border-radius: 50%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  margin: 18px 20px 20px;
  border-radius: 6px;
  border: 1px solid #e4e4e4;

  input {
    border-radius: 6px 0 0 6px;
    width: 210px;
    height: 50px;
    padding: 0 20px;
    border-right: 1px solid #e4e4e4;
    font-size: 16px;
    color: #333;
    line-height: 50px;
  }

  button {
    border-radius: 0 6px 6px 0;
    width: 100%;
    background-color: white;
    font-size: 15px;
    font-weight: 700;
    color: #333;
  }
`;

const SuccessMessage = styled.div`
  position: fixed;
  z-index: 1003;
  left: 50%;
  bottom: 20px;
  display: inline-block;
  padding: 22px 50px;
  border-radius: 100px;
  background-color: rgba(211, 35, 58, 0.9);
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07);
  transform: translateX(-50%);
  transition: 0.3s;
  line-height: 20px;
  color: #fff;
`;

export default function ShareSNSComponent() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const onClickSnsPopup = () => {
    setVisible(!visible);
  };

  const onClickClosePopup = () => {
    setVisible(false);
  };

  // 복사 상태를 관리하는 상태
  const [copySuccess, setCopySuccess] = useState(false);

  // 텍스트 복사 함수
  const copyText = () => {
    navigator.clipboard
      .writeText(router.asPath)
      .then(() => {
        setCopySuccess(true); // 복사 성공
        setTimeout(() => setCopySuccess(false), 2000); // 2초 후 복사 상태 초기화
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  return (
    <>
      <ComponentWrapper>
        <Button onClick={onClickSnsPopup} />

        {visible && (
          <PopupWrapper>
            <h4>
              공유하기 <span onClick={onClickClosePopup}>닫기</span>
            </h4>

            <IconWrapper>
              <Kakao>
                <span />
                카카오톡
              </Kakao>

              <Facebook>
                <span />
                페이스북
              </Facebook>
            </IconWrapper>

            <InputWrapper>
              <input type="text" value={router.asPath} readonly />
              <button onClick={copyText}>복사</button>
            </InputWrapper>
          </PopupWrapper>
        )}
      </ComponentWrapper>

      {copySuccess && <SuccessMessage>URL이 복사되었습니다.</SuccessMessage>}
    </>
  );
}
