import Link from "next/link";
import * as C from "./index.style";
import CheckboxComponent from "../../checkbox";
import { useState } from "react";

export default function CartFalse() {
  const [allSelect, setAllSelect] = useState(true);

  const onClickAllSelect = () => {
    setAllSelect(!allSelect);
  };

  return (
    <>
      <C.OptionWrapper>
        <div>
          <CheckboxComponent
            text={"전체선택"}
            checked={true}
            cart={false}
            onClickAllSelect={onClickAllSelect}
          />
          <strong>전체선택</strong>
        </div>

        <ul>
          <C.RemoveSoldOut>품절삭제</C.RemoveSoldOut>
          <C.RemoveSelected>선택삭제</C.RemoveSelected>
        </ul>
      </C.OptionWrapper>

      <C.ContentsWrapper>
        <C.Text>장바구니에 담긴 상품이 없습니다.</C.Text>
        <span>
          <Link href="more">
            <a>상품 담으러 가기</a>
          </Link>
        </span>
      </C.ContentsWrapper>
    </>
  );
}
