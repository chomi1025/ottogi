"use Client";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import * as H from "./index.style";
import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { useRouter } from "next/router";
import { mainCategoryState, subCategoryState } from "@/state/categoryState";
import { useRecoilState } from "recoil";

export default function CategoryComponent() {
  const router = useRouter();
  const [mainCategory, setMainCategory] = useRecoilState(mainCategoryState);
  const [subCategory, setSubCategory] = useRecoilState(subCategoryState);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      if (mainCategory.length > 0 && subCategory.length > 0) return;

      const mainCategoryQuery = query(
        collection(db, "mainCategory"),
        orderBy("id"),
      );
      const subCategoryQuery = query(
        collection(db, "subCategory"),
        orderBy("id"),
      );
      const mainCategorySnapshot = await getDocs(mainCategoryQuery);
      const subCategorySnapshot = await getDocs(subCategoryQuery);

      setMainCategory(mainCategorySnapshot.docs.map((doc) => doc.data()));
      setSubCategory(subCategorySnapshot.docs.map((doc) => doc.data()));
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    router.push(`/front/product/category/${categoryId}`);
  };

  const handleSubCategoryClick = (subCategoryId, categoryId) => {
    router.push(`/front/product/category/${categoryId}/${subCategoryId}`);
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
              .filter((sub) => sub.mainCategory === hoveredCategoryId)
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
