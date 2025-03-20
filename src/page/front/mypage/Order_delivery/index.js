import OrderActionComponent from "@/Componant/Main/Mypage/OrderAction";
import * as O from "./index.style";
import CardComponent from "@/Componant/Main/Mypage/Card";

export default function OrderDeliveryUI() {
  return (
    <O.Wrapper>
      <CardComponent />

      <OrderActionComponent title={"주문/배송조회"} />
    </O.Wrapper>
  );
}
