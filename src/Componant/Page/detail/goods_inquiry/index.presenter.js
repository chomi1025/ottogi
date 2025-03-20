import ButtonComponent from "@/Componant/Main/Buttons/LoginRequiredButton";
import * as I from "./index.style";

export default function InquiryWrapperUI() {
  return (
    <I.inquiry_wrapper>
      <h4>
        상품문의 <span>6</span>
      </h4>

      <I.Menu_wrapper>
        <ButtonComponent
          text={"내 문의 보기"}
          check={true}
          lineHeight={"24px"}
          color={"#333"}
          background={"white"}
          fontSize={"16px"}
        />

        <ButtonComponent
          text={"문의 작성하기"}
          padding={"10px 20px"}
          borderRadius={"6px"}
          border={"1px solid #333"}
          fontSize={"15px"}
          lineHeight={"20px"}
          background={"white"}
        />
      </I.Menu_wrapper>

      <I.inquiry_contents_wrapper>
        <I.inquiry_contents>
          <I.answer>답변완료</I.answer>
          <div>
            <span>33833311***</span>
            <span>2024.03.14</span>
          </div>
          <p>[옵션/재고수량] 한개가 안왔어요</p>
          <button>더보기</button>
        </I.inquiry_contents>
      </I.inquiry_contents_wrapper>
    </I.inquiry_wrapper>
  );
}
