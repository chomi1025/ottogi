import * as P from "./index.style";
import ListTapmenu from "../../../../Componant/Main/list_menu_click";
import { useState } from "react";
import Pagination from "react-js-pagination";
import ButtonComponent from "@/Componant/Main/Buttons/LoginRequiredButton";

export default function ReivewWrapper(props) {
  const [activeTab, setActiveTab] = useState(1);

  const [more, setMore] = useState({});

  const onclickMoreReview = (index) => () => {
    setMore((prevMore) => ({
      ...prevMore,
      [index]: !prevMore[index], // 특정 리뷰의 더보기/접기 상태를 토글
    }));
  };

  const tabs = [
    { index: 1, text: "추천순" },
    { index: 2, text: "최신순" },
  ];

  const onclickActive = (index) => {
    setActiveTab(index);
  };

  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const itemChange = (e) => {
    setItems(Number(e.target.value));
  };
  return (
    <P.goods_review id="review">
      <P.review_title_wrapper>
        <h4>상품후기</h4>
        <ButtonComponent
          text={"후기 작성하기"}
          padding={"10px 20px"}
          borderRadius={"6px"}
          border={"1px solid #333"}
          fontSize={"15px"}
          lineHeight={"20px"}
          background={"white"}
        />
      </P.review_title_wrapper>

      <P.grade_Wrapper>
        <h4>{props.result?.grade.toFixed(1)}</h4>
        <div>
          {/* 꽉찬별 */}
          {props.activeStars}
          {/* 빈별 */}
          {props.inactiveStars}
        </div>
        <p>총 {props.result?.review?.length}건</p>
      </P.grade_Wrapper>

      <P.review_list_wrapper>
        <P.review_list_menu>
          <div>
            <input type="checkbox" />
            포토후기만 보기
          </div>
          <ul>
            {tabs.map((tabs) => {
              return (
                <ListTapmenu
                  key={tabs.index}
                  index={tabs.index}
                  active={activeTab === tabs.index}
                  text={tabs.text}
                  onClick={() => onclickActive(tabs.index)}
                />
              );
            })}
          </ul>
        </P.review_list_menu>

        <P.review_list>
          {props.result?.review?.map((review, key) => {
            return (
              <P.review key={review.key}>
                {/* 별점 + 점수 */}
                <P.review_grade_wrapper>
                  {Array(review.grade)
                    .fill(0)
                    .map((_, i) => (
                      <P.grade_star />
                    ))}
                  <P.grade_number>{review.grade}</P.grade_number>
                </P.review_grade_wrapper>

                {/* 유저,작성일 정보 */}
                <P.user_wrapper>
                  <P.user_id>{review.name}</P.user_id>
                  <P.date>2024.03.20</P.date>
                </P.user_wrapper>

                {/* 리뷰본문 */}
                <P.contents_wrapper>
                  {review.contents.split("\n").length == 1 && review.contents}

                  {!more[key] &&
                    review.contents.split("\n").length == 2 &&
                    review.contents + "..."}

                  {more[key] &&
                    review.contents.split("\n").length == 2 &&
                    review.contents}

                  {!more[key] &&
                    review.contents.split("\n").length >= 3 &&
                    review.contents.split("\n")[0] +
                      "\n" +
                      review.contents.split("\n")[1] +
                      "..."}

                  {more[key] &&
                    review.contents.split("\n").length >= 3 &&
                    review.contents}
                </P.contents_wrapper>

                {review.contents.split("\n").length >= 2 && (
                  <P.more_button key={key} onClick={onclickMoreReview(key)}>
                    {more.more ? "접기" : "더보기"}
                  </P.more_button>
                )}
              </P.review>
            );
          })}
        </P.review_list>

        <P.pagenation_wrapper>
          <Pagination
            // 현제 보고있는 페이지
            activePage={1}
            // 한페이지에 출력할 아이템수
            itemsCountPerPage={5}
            // 총 아이템수
            totalItemsCount={300}
            // 표시할 페이지수
            pageRangeDisplayed={5}
            // 함수
            onChange={handlePageChange}
            firstPageText=" "
            lastPageText=" "
            nextPageText=" "
            prevPageText=" "
          />
        </P.pagenation_wrapper>
      </P.review_list_wrapper>
    </P.goods_review>
  );
}
