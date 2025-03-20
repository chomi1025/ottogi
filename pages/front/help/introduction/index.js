import GuestLogoutUI from "@/Layout/front/mypage/Logout/index.layout";

export default function IntroductionPage() {
  return <div>오뚜기몰 소개페이지</div>;
}

IntroductionPage.getLayout = function getLayout(page) {
  return <GuestLogoutUI>{page}</GuestLogoutUI>;
};
