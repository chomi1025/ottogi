import GuestLogoutUI from "@/Layout/front/mypage/Logout/index.layout";
import NoticeUI from "@/page/front/help/notice/index";

export default function NoticePage() {
  return <NoticeUI />;
}

NoticePage.getLayout = function getLayout(page) {
  return <GuestLogoutUI>{page}</GuestLogoutUI>;
};
