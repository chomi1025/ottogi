import styled from "@emotion/styled";
import MypageSideLogin from "./sidebar";

const Inner = styled.div`
  width: 1410px;
  margin: 0 auto;
  display: flex;
  padding-top: 55px;
  position: relative;
`;

export default function GuestLoginUI({ user, children }) {
  return (
    <>
      <Inner>
        {/* 왼쪽 사이드바 */}
        <MypageSideLogin logout={user} padding={"0 60px 0 0"} />
        {/* 오른쪽 컨텐츠 */}
        {children}
      </Inner>
    </>
  );
}
