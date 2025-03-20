import { Inner } from "../../../../../styles/main";
import MypageSideLogout from "./sidebar";

export default function GuestLogoutUI({ user, children }) {
  return (
    <>
      <Inner
        width="1410px"
        padding={"50px 0 0 0"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {/* 왼쪽 사이드바 */}
        <MypageSideLogout logout={user} padding={"0 60px 0 0"} />
        {/* 오른쪽 컨텐츠 */}
        {children}
      </Inner>
    </>
  );
}
