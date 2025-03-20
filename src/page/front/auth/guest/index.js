import * as O from "./index.style";

export default function OrderInfoPage() {
  return (
    <O.Wrapper>
      <div>
        <h3>비회원 주문조회</h3>
      </div>

      <div>
        <div>
          <em>
            주문자명과 <br />
            주문번호를 입력해주세요
          </em>
        </div>

        <form>
          <div>
            <p>주문자명</p>
            <input type="text" placeholder="주문자명을 입력해 주세요." />
          </div>

          <div>
            <p>주문번호</p>
            <input type="text" placeholder="주문번호 16자리를 입력해 주세요." />
          </div>

          <button>주문조회</button>
        </form>
      </div>

      <p>
        · 주문번호를 잊어버리셨다면, 오뚜기몰 고객센터 080-443-8888로 문의해
        주세요.
      </p>
    </O.Wrapper>
  );
}
