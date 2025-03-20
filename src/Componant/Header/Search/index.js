"use client";
import Link from "next/link";
import * as H from "./index.style";
import { useState, useRef, useEffect } from "react";
import { searchTermState } from "../../../state/searchState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchResultsState } from "../../../state/searchResultState";

export default function SearchComponent() {
  //추천검색어
  const [searchKeywords, setSearchKeywords] = useState([
    "햇반",
    "컵밥",
    "과자",
    "음료수",
  ]);

  const [recommendKeywords, setRecommendKeywords] = useState([
    "가뿐한끼 현미밥 150G",
    "맛있는 오뚜기밥 (210GX3) 3개 골라담기",
    "진라면 매운맛 (120GX5)",
    "컵밥 4개 골라담기",
    "참깨라면 용기 110G",
    "컵밥 톡톡김치알밥(증량) 222G",
    "컵밥 차돌강된장보리밥(증량) 310G",
    "컵밥 참치마요덮밥(증량) 247G",
    "컵밥 진한쇠고기미역국밥(증량) 314G",
    "컵밥 김치참치덮밥(증량) 310G",
  ]);

  const [PopularKeywords, setPopularKeywords] = useState([
    "라면",
    "오뚜기밥",
    "컵밥",
    "피자",
    "컵누들",
    "카레",
    "참치",
    "진라면",
    "밥",
    "만두",
  ]);

  // input 클릭시 창띄우는거
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const wrapperRef = useRef(null);

  const handleInputClick = () => {
    setDropdownVisible(true);
  };

  const handleOutsideClick = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [keyword, setKeyword] = useState(""); // keyword 상태 추가

  const [searchTerm, setSearchTermValue] = useRecoilState(searchTermState);

  const setSearchResults = useSetRecoilState(searchResultsState); // 상태 업데이트 함수

  //input내부의 검색어 삭제버튼
  const Today = new Date();

  const onClickDelete = (index) => {
    const newArray = [...searchKeywords];
    const result = newArray.filter((_, el) => el !== index);
    setSearchKeywords(result);
  };

  const onClickAllDelete = () => {
    const newArray = [];
    setSearchKeywords(newArray);
  };

  //input값 감지 함수
  const onChangeInput = (event) => {
    setSearchTermValue(event.target.value);
    setKeyword(event.target.value);
  };

  //검색기능 함수
  const onClickSearch = async (event) => {
    event.preventDefault();

    try {
      const productsRef = collection(db, "product");
      const q = query(
        productsRef,
        where("name", ">=", keyword),
        where("name", "<=", keyword + "\uf8ff")
      );

      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSearchResults((prev) => [...prev, ...results]); //리코일로 결과값 담기
      router.push("/front/product/search/" + searchTerm); //페이지 이동

      // 상태 업데이트
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <H.Search>
        <H.InputWrapper>
          <form ref={wrapperRef} onSubmit={onClickSearch}>
            <input
              type="text"
              placeholder="라면은 역시 오뚜기 라면~🍜"
              onClick={handleInputClick}
              onChange={onChangeInput}
            />
            <button type="submit" />
          </form>
        </H.InputWrapper>

        <H.SearchWrapper isDropdownVisible={isDropdownVisible}>
          {searchKeywords.length == 0 || (
            <H.RecentWrapper>
              <div>
                <h4>최근 검색어</h4>
                <button onClick={onClickAllDelete}>전체 삭제</button>
              </div>
              <ul>
                {searchKeywords?.map((el, index) => (
                  <li key={index}>
                    <Link href="/main">
                      <a>{el}</a>
                    </Link>
                    <button onClick={() => onClickDelete(index)} />
                  </li>
                ))}
              </ul>
            </H.RecentWrapper>
          )}

          <H.RecommendedWrapper>
            <h4>추천 검색어</h4>
            <ul>
              {recommendKeywords?.map((el, index) => (
                <li key={index}>
                  <Link href="/main">
                    <a>{el.length > 17 ? el.substr(0, 16) + "..." : el}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </H.RecommendedWrapper>

          <H.PopularWrapper>
            <div>
              <h4>인기 검색어</h4>
              <span>{Today.toLocaleDateString()}기준</span>
            </div>
            <ul>
              {PopularKeywords?.map((el, index) =>
                index <= 2 ? (
                  <li key={index}>
                    <H.KeywordsTop3>{index + 1}</H.KeywordsTop3>
                    <Link href="/main">
                      <a>{el}</a>
                    </Link>
                  </li>
                ) : (
                  <li key={index}>
                    <H.KeywordsIndex>{index + 1}</H.KeywordsIndex>
                    <Link href="/main">
                      <a>{el}</a>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </H.PopularWrapper>
        </H.SearchWrapper>
      </H.Search>
    </>
  );
}
