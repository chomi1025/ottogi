import GuestLogoutUI from "@/Layout/front/mypage/Logout/index.layout";
import MypageMainUI from "@/page/front/mypage/Logout/index";

export default function MyLogoutpage() {
  return (
    <>
      <MypageMainUI />
    </>
  );
}

// 로그인 상태에 따라 다른 레이아웃을 적용(작동 잘하고있음)
MyLogoutpage.getLayout = function getLayout(page) {
  return <GuestLogoutUI>{page}</GuestLogoutUI>;
};
