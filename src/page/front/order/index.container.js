import OrderUI from "./index.presenter";

export default function Order(props) {
  return <OrderUI order={props.order} />;
}
