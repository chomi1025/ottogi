import * as B from "./index.style";
import Breadcrumb from "../../../../Componant/Main/breadcrumb/index";
import BasketComponent from "../../../../Componant/Main/Basket/Tabmenu";
import { Inner } from "../../../../../styles/main";
import ProductCheckComponent from "@/Componant/Main/Basket/ProductList";
import OrderComponent from "@/Componant/Main/OrderComponent";
import { useState } from "react";

export default function Basket(props) {
  const totalPrice = props.cart
    ?.filter((item) => item.select) // select가 true인 항목만 필터링
    .reduce((total, item) => total + item.product.price * item.quantity, 0);

  const [activeTab, setActiveTab] = useState(0); // activeTab을 숫자로 관리

  const onClickActive = (number) => {
    setActiveTab(number); // 클릭한 번호로 상태 변경
  };

  return (
    <>
      <Inner width="1410px" padding="25px 0 0">
        <Breadcrumb
          name={"장바구니"}
          link={"/front/order/basket"}
          category={false}
        />

        <B.BasketWrapper>
          <B.Title>장바구니</B.Title>

          <B.ContentsWrapper>
            <B.leftWrapper>
              {/* 탭메뉴 */}
              <BasketComponent
                activeTab={activeTab}
                onClickActive={onClickActive}
                cart={props.cart}
              />

              {/* 장바구니 리스트 */}
              <ProductCheckComponent
                activeTab={activeTab}
                cart={props.cart}
                setCart={props.setCart}
                roomTemperatureItems={props.roomTemperatureItems}
                refrigeratedItems={props.refrigeratedItems}
                RefrigeratedPrice={props.RefrigeratedPrice}
                roomTemperaturePrice={props.roomTemperaturePrice}
                totalPrice={props.totalPrice}
              />
            </B.leftWrapper>

            <OrderComponent
              cart={props.cart}
              totalPrice={totalPrice}
              RefrigeratedPrice={props.RefrigeratedPrice}
              roomTemperaturePrice={props.roomTemperaturePrice}
            />
          </B.ContentsWrapper>
        </B.BasketWrapper>
      </Inner>
    </>
  );
}
