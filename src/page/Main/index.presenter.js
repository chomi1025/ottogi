import * as M from "./index.style";
import SwiperSlide1 from "../../Componant/Main/Swiper_slider1/index";
import SwiperSlide2 from "../../Componant/Main/Swiper_Slider2/index";
import SwiperSlide3 from "./../../Componant/Main/Swiper_slider3/index";
import Button from "./../../Componant/Main/Main_button/index";

export default function MainPresenter(props) {
  return (
    <>
      <SwiperSlide1 Carousel={props.Carousel} />

      <M.Inner>
        <M.Buttons>
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner1.png?alt=media&token=1c591fee-968b-4255-833d-aec37897db42"
            text={["SWEET", <br />, "HOME"]}
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner2.png?alt=media&token=d11b6197-0b37-41c5-bf3e-8f98278a7598"
            text="브랜드관"
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner3.png?alt=media&token=7bb114aa-ad3f-4dd5-99f3-aac9d5a24e46"
            text="ottogi daily"
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner4.png?alt=media&token=674a5b95-b58c-4c16-b758-ac193f2b52ec"
            text="원쁠원"
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner5.png?alt=media&token=f7604c28-bb52-4755-8283-a238f052f639"
            text="99마켓"
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner7.png?alt=media&token=22a9fbe7-41d7-46f9-bb7a-60dbf788297a"
            text="무료배송"
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner8.png?alt=media&token=17c529b1-4a26-43f9-97a1-7c662b1f50b3"
            text="가뿐한끼"
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner9.png?alt=media&token=28185371-2fb4-4ec7-baea-8e5a664418cf"
            text="제주담음"
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner10.png?alt=media&token=dd50e8d8-a64f-4244-9371-2b981bb117e1"
            text="오뚜기프트"
          />
          <Button
            url="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/circle-banner6.png?alt=media&token=cb4ab36f-e5b8-41c6-a995-9e56b39dd1d7"
            text="복작복작"
          />
        </M.Buttons>

        <SwiperSlide2 new={true} more={true} title="새로움을 맛보세요" />

        <SwiperSlide3 />

        <SwiperSlide2 how={true} more={false} title="이런 상품 어때요?" />

        <SwiperSlide2 only={true} more={true} title="오뚜기몰에서만 만나요" />
      </M.Inner>
    </>
  );
}
