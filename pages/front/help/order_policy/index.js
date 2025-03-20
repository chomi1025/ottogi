import OrderPolicyUI from "./../../../../src/page/front/help/order_policy/index";
import LayoutHelp from "@/Layout/front/help/index.layout";

export default function OrderPolicypage() {
  return <OrderPolicyUI />;
}

OrderPolicypage.getLayout = function getLayout(page) {
  return <LayoutHelp>{page}</LayoutHelp>;
};
