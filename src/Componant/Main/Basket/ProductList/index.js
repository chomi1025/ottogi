import styled from "@emotion/styled";
import CartFalse from "../../Cart/false/index";
import CartTrue from "../../Cart/true/index";

const BoxWrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 20px;
`;

export default function ProductCheckComponent(props) {
  return (
    <>
      <BoxWrapper>
        {props.cart && props.cart.length > 0 ? (
          <CartTrue
            cart={props.cart}
            setCart={props.setCart}
            activeTab={props.activeTab}
            roomTemperatureItems={props.roomTemperatureItems}
            refrigeratedItems={props.refrigeratedItems}
            RefrigeratedPrice={props.RefrigeratedPrice}
            roomTemperaturePrice={props.roomTemperaturePrice}
            totalPrice={props.totalPrice}
          />
        ) : (
          <CartFalse />
        )}
      </BoxWrapper>
    </>
  );
}
