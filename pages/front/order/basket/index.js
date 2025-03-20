import { useRecoilValue } from "recoil";
import { userState } from "./../../../../src/state/userState";
import BasketMember from "./../../../../src/page/front/order/basket/member/index";
import BasketGuest from "./../../../../src/page/front/order/basket/guest/index";

export default function BasketPage() {
  const user = useRecoilValue(userState); // 로그인 상태 가져오기

  return user ? <BasketMember /> : <BasketGuest />;
}
