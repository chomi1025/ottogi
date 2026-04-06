import OrderActionComponent from "@/Component/Main/Mypage/OrderAction";
import * as O from "./index.style";
import CardComponent from "@/Component/Main/Mypage/Card";

export default function OrderDeliveryUI() {
  return (
    <O.Wrapper>
      <CardComponent />

      <OrderActionComponent title={"주문/배송조회"} />
    </O.Wrapper>
  );
}
