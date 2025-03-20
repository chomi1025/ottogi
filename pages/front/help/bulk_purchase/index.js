import BulkPurchaseUI from "@/page/front/help/bulk_purchase/index";
import GuestLogoutUI from "@/Layout/front/mypage/Logout/index.layout";

export default function BulkPurchasePage() {
  return <BulkPurchaseUI />;
}

BulkPurchasePage.getLayout = function getLayout(page) {
  return <GuestLogoutUI>{page}</GuestLogoutUI>;
};
