"use Client";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import * as H from "./index.style";
import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { useRouter } from "next/router";
import { mainCategoryState, subCategoryState } from "@/state/categoryState";
import { useRecoilState } from "recoil";

export default function CategoryComponent(props) {
  const router = useRouter();
  const [mainCategory, setMainCategory] = useRecoilState(mainCategoryState); // Recoil 상태로 변경
  const [subCategory, setSubCategory] = useRecoilState(subCategoryState); // Recoil 상태로 변경
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 상태

  const handleMouseEnter = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false); // 마우스가 메뉴를 떠날 때 드롭다운 닫기
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const mainCategoryQuery = query(
        collection(db, "mainCategory"),
        orderBy("id")
      );
      const subCategoryQuery = query(
        collection(db, "subCategory"),
        orderBy("id")
      );
      const mainCategorySnapshot = await getDocs(mainCategoryQuery);
      const subCategorySnapshot = await getDocs(subCategoryQuery);

      setMainCategory(mainCategorySnapshot.docs.map((doc) => doc.data()));
      setSubCategory(subCategorySnapshot.docs.map((doc) => doc.data()));
    };

    fetchCategories();
  }, []);

  // 카테고리를 클릭했을 때 호출되는 함수
  const handleCategoryClick = (categoryId) => {
    // categoryId를 기반으로 해당 페이지로 이동
    router.push(`/front/product/category/${categoryId}`); // 페이지 이동
  };

  // 서브카테고리를 클릭했을 때 호출되는 함수
  const handleSubCategoryClick = (subCategoryId, categoryId) => {
    router.push(`/front/product/category/${categoryId}/${subCategoryId}`); // 서브 카테고리 페이지로 이동
  };

  return (
    <div
      onMouseEnter={() => setHoveredCategoryId(null)}
      onMouseLeave={() => setHoveredCategoryId(null)}
    >
      <H.CategoryWrapper>
        {mainCategory?.map((category) => (
          <H.Category
            key={category.id}
            onMouseEnter={() => setHoveredCategoryId(category.id)}
            sellect={hoveredCategoryId === category.id}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </H.Category>
        ))}
      </H.CategoryWrapper>

      {hoveredCategoryId &&
        subCategory.filter((sub) => sub.mainCategory === hoveredCategoryId)
          .length > 0 && (
          <H.SubcategoryWrapper>
            <H.Subcategory key="all">전체</H.Subcategory>

            {subCategory
              .filter((sub) => sub.mainCategory === hoveredCategoryId) // 서브카테고리 필터링
              .map((filteredSub) => (
                <H.Subcategory
                  key={filteredSub.id}
                  onClick={() =>
                    handleSubCategoryClick(filteredSub.id, hoveredCategoryId)
                  }
                >
                  {filteredSub.name}
                </H.Subcategory>
              ))}
          </H.SubcategoryWrapper>
        )}
    </div>
  );
}
