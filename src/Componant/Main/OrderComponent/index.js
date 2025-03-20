import * as B from "./index.style";
import Link from "next/link";

export default function OrderComponent(props) {
  return (
    <>
      <B.rightWrapper>
        <section>
          <B.TopWrapper>
            <h3>상품금액</h3>

            <ul>
              <li>
                총 상품금액
                <span>
                  <strong>{props.totalPrice?.toLocaleString()}</strong>원
                </span>
              </li>
              <li>
                총 할인금액<span>0원</span>
              </li>
              <li>
                총 배송비
                <span>
                  <strong>
                    {(
                      (props.RefrigeratedPrice > 0 &&
                      props.RefrigeratedPrice < 30000
                        ? 3000
                        : 0) +
                      (props.roomTemperaturePrice > 0 &&
                      props.roomTemperaturePrice < 30000
                        ? 3000
                        : 0)
                    ).toLocaleString()}
                  </strong>
                  원
                </span>
              </li>

              {props.orderPage && (
                <>
                  <li>쿠폰</li>
                  <li>마일리지</li>
                </>
              )}
            </ul>

            <div>
              <div>
                <strong>결제 예상금액 </strong>
                <h3>{props.totalPrice?.toLocaleString()}원</h3>
              </div>
              <ul>
                <li>
                  · 무료배송 혜택 상품 및 배송 유형별 30,000원 이상 구매 시
                  무료배송입니다.
                </li>
                <li>
                  · 배송 유형 간 교차 합계 금액은 무료배송에 적용되지 않습니다.
                  (상온 배송+저온 배송 합계 30,000원 무료배송불가)
                </li>
              </ul>
            </div>
          </B.TopWrapper>
          <B.ButtonWrapper>
            {!props.cart && (
              <B.EmptyCartButton>{0}원 주문하기</B.EmptyCartButton>
            )}

            {props.cart && (
              <>
                <Link href="#">
                  <a>
                    <B.GiftButton>선물하기 담기</B.GiftButton>
                  </a>
                </Link>

                <Link href="/front/order">
                  <a>
                    <B.OrderButton>
                      {props.totalPrice.toLocaleString()}원 주문하기
                    </B.OrderButton>
                  </a>
                </Link>
              </>
            )}
          </B.ButtonWrapper>
        </section>
      </B.rightWrapper>
    </>
  );
}
