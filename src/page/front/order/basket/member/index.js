import Basket from "@/page/front/order/basket";
import { cartState } from "@/state/cartState";
import { useRecoilState } from "recoil";

export default function BasketMember() {
  const [cart, setCart] = useRecoilState(cartState); // 회원 장바구니

  // 실온상품만 !
  const roomTemperatureItems = cart.filter(
    (item) => item.product?.tag?.refrigerated === false,
  );

  // 냉장상품만 !
  const refrigeratedItems = cart.filter(
    (item) => item.product?.tag?.refrigerated === true,
  );

  //냉장가격
  const RefrigeratedPrice = cart
    .filter((item) => item.select && item.product?.tag?.refrigerated)
    .reduce((total, item) => total + item.product.price * item.quantity, 0);

  //실온가격
  const roomTemperaturePrice = cart
    .filter((item) => item.select && !item.product?.tag?.refrigerated)
    .reduce((total, item) => total + item.product?.price * item.quantity, 0);

  // 실온+냉장 = 총가격
  const totalPrice = (
    RefrigeratedPrice + roomTemperaturePrice
  ).toLocaleString();

  return (
    <Basket
      cart={cart}
      setCart={setCart}
      roomTemperatureItems={roomTemperatureItems}
      refrigeratedItems={refrigeratedItems}
      RefrigeratedPrice={RefrigeratedPrice}
      roomTemperaturePrice={roomTemperaturePrice}
      totalPrice={totalPrice}
    />
  );
}
