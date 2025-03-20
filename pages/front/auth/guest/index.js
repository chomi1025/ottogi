import GuestLogoutUI from "@/Layout/front/mypage/Logout/index.layout";
import OrderInfoPage from "@/page/front/auth/guest/index";

function OrdersPage() {
  return <OrderInfoPage />;
}

OrdersPage.getLayout = function getLayout(page) {
  return <GuestLogoutUI>{page}</GuestLogoutUI>;
};

export default OrdersPage;
