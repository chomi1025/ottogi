import OrderDeliveryUI from "./../../../../src/page/front/mypage/Order_delivery/index";
import GuestLoginUI from "@/Layout/front/mypage/Login/index.layout";

export default function OrderDeliveryPage() {
  return <OrderDeliveryUI />;
}

OrderDeliveryPage.getLayout = function getLayout(page) {
  return <GuestLoginUI>{page}</GuestLoginUI>;
};
