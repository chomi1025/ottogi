import Link from "next/link";
import * as C from "./index.style";
import CheckboxComponent from "./../../checkbox/index";

export default function ItemComponent(props) {
  const isChecked =
    props.category === "roomTemp"
      ? props.checkRoomTempItems?.includes(props.item.id)
      : props.checkCoolFrozenItems?.includes(props.item.id);

  const handleCheck = (checked) => {
    if (props.category === "roomTemp") {
      props.handleRoomTempCheck(checked, props.item.id);
    } else {
      props.handleCoolFrozenCheck(checked, props.item.id);
    }
  };

  return (
    <>
      <C.Item key={props.index}>
        <CheckboxComponent
          checked={isChecked}
          onChange={(e) => handleCheck(e.target.checked)}
        />

        <Link href="#">
          <a>
            <img src={props.item?.imgSrc} alt={props.item?.name} />
            <div>
              <p>{props.item?.name}</p>
            </div>
          </a>
        </Link>

        <C.ItemCount>
          <div>
            <button onClick={props.onClickMinusQuantity}>-</button>
            <input type="number" min="1" value={props.quantity} />
            <button onClick={props.onClickPlusQuantity}>+</button>
          </div>
        </C.ItemCount>

        <C.ItemPrice>
          <p>{props.item?.price.toLocaleString()}원</p>
        </C.ItemPrice>

        <C.removeItem>
          <button>x</button>
        </C.removeItem>
      </C.Item>
    </>
  );
}
