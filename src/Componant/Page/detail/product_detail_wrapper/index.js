"use client";
import { useState } from "react";
import * as P from "./index.style";
import Link from "next/link";
import ReivewWrapper from "./../review_box/index";
import InquiryWrapper from "../goods_inquiry/index.container";
import ToggleWrapper from "../toggle_wrapper/index.container";
import Image from "next/image";

export default function ProductDetailWrapper(props) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 160, // 80px만큼 위로 올려서 이동
      behavior: "smooth", // 부드러운 스크롤
    });
  };

  // 탭메뉴 스테이트,함수
  const [activeTab, setActiveTab] = useState(1);

  const onclickActive = (index) => () => {
    setActiveTab(index); // 활성 탭 변경
    const sectionIds = ["detail", "review", "info", "inquiry"]; // 각 탭에 해당하는 ID 배열
    const targetId = sectionIds[index]; // 탭에 맞는 ID 가져오기
    scrollToSection(targetId); // 해당 ID로 스크롤 이동
  };

  //점수만큼 별 생성
  const activeStars = Array.from({ length: props.grade_star }, (_, index) => (
    <P.activeStar key={index} />
  ));

  //빈별 생성
  const inactiveStars = Array.from(
    { length: 5 - props.grade_star },
    (_, index) => <P.inActiveStar key={index} />
  );

  const [toggle, setToggle] = useState([false, false, false]);

  const onclickToggle = (index) => {
    setToggle((prevToggle) => {
      const newToggle = [...prevToggle];
      newToggle[index] = !newToggle[index];
      return newToggle;
    });
  };

  return (
    <P.Section>
      {/* 탭메뉴 */}
      <P.goods_nav_wrapper>
        <P.tapMenu_Wrapper>
          <P.tapMenu>
            <P.tapMenu_list active={activeTab == 0} onClick={onclickActive(0)}>
              <Link href="#detail">
                <P.tapmenu_button active={activeTab == 0}>
                  상세정보
                </P.tapmenu_button>
              </Link>
            </P.tapMenu_list>

            <P.tapMenu_list active={activeTab == 1} onClick={onclickActive(1)}>
              <Link href="#review">
                <P.tapmenu_button active={activeTab == 1}>
                  상품후기 <span>21</span>
                </P.tapmenu_button>
              </Link>
            </P.tapMenu_list>

            <P.tapMenu_list active={activeTab == 2} onClick={onclickActive(2)}>
              <Link href="#info">
                <P.tapmenu_button active={activeTab == 2}>
                  구매정보
                </P.tapmenu_button>
              </Link>
            </P.tapMenu_list>

            <P.tapMenu_list active={activeTab == 3} onClick={onclickActive(3)}>
              <Link href="#inquiry">
                <P.tapmenu_button active={activeTab == 3}>
                  상품문의
                </P.tapmenu_button>
              </Link>
            </P.tapMenu_list>
          </P.tapMenu>
        </P.tapMenu_Wrapper>
      </P.goods_nav_wrapper>

      <P.goods_detail_wrapper>
        {/* 상품상세 이미지 컴포넌트 */}
        <P.Main_wrapper>
          <P.main_contents_Wrapper id="detail">
            <div>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fproduct%2Fnotice_2_ottogimall.jpg?alt=media&token=c9db2d97-bc63-4ee9-8972-ba9162716adb"
                alt="A sample image"
                width={1875}
                height={1080}
              />
              {props.product?.imgSrc?.slice(1).map((imgsrc, index) => (
                <img key={index} src={imgsrc} alt="" />
              ))}
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Fproduct%2Fdelivery_roomtemperature_ottogimall.jpg?alt=media&token=c495d8e0-a3f0-42bd-b689-7af827631edc"
                alt="A sample image"
                width={1875}
                height={4640}
              />
            </div>
          </P.main_contents_Wrapper>

          {/* 리뷰 컴포넌트 */}
          <ReivewWrapper
            product={props.product}
            activeStars={activeStars}
            inactiveStars={inactiveStars}
            grade_star={props.grade_star}
          />

          {/* 상품정보 고시,배송정보, 반품 등 탭메뉴 */}
          <P.ToggleWrapper id="info">
            <ToggleWrapper
              top={true}
              title={"상품 정보 고시"}
              toggle={toggle[0]}
              onclickToggle={() => {
                onclickToggle(0);
              }}
            />
            <ToggleWrapper
              title={"배송 정보"}
              toggle={toggle[1]}
              onclickToggle={() => {
                onclickToggle(1);
              }}
            />
            <ToggleWrapper
              title={"취소/교환/반품"}
              toggle={toggle[2]}
              onclickToggle={() => {
                onclickToggle(2);
              }}
            />
          </P.ToggleWrapper>

          {/* 상품문의 컴포넌트 */}
          <InquiryWrapper id="inquiry" />
        </P.Main_wrapper>

        {/* 우측 스티키로 고정되어서 따라올 컴포넌트 */}
        <P.sticky_wrapper>
          <div>
            <P.Top_wrapper>
              <p>{props.result?.name}</p>
              <div>
                <input
                  type="number"
                  onChange={props.onclickValue}
                  value={props.value}
                />
                <h3>{props.basePrice?.toLocaleString()}원</h3>
              </div>
            </P.Top_wrapper>

            <P.Bottom_wrapper>
              <P.Total_wrapper>
                <h3>총금액 </h3>
                <span>
                  <em>
                    {(
                      parseInt(props.basePrice) * props.value
                    )?.toLocaleString()}
                  </em>
                  원
                </span>
              </P.Total_wrapper>

              <P.Button_wrapper>
                <P.Button>선물함 담기</P.Button>
                <P.Button>장바구니</P.Button>
                <P.Button buy={true}>바로구매</P.Button>
              </P.Button_wrapper>
            </P.Bottom_wrapper>
          </div>
        </P.sticky_wrapper>
      </P.goods_detail_wrapper>
    </P.Section>
  );
}
