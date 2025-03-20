import GuestLoginUI from "@/Layout/front/mypage/Login/index.layout";
import MypageLoginMain from "../../../src/page/front/mypage/Login/index";

export default function MyLoginPage() {
  return <MypageLoginMain />;
}

MyLoginPage.getLayout = function getLayout(page) {
  return <GuestLoginUI>{page}</GuestLoginUI>;
};
