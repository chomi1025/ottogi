import { useState } from "react";
import ResultPresenter from "./index.presenter";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "./../../../../../state/searchResultState";

export default function ResultContainer() {
  const [menu, setMenu] = useState(null);
  const router = useRouter();
  const keyword = router.query.keyword;
  const searchResults = useRecoilValue(searchResultsState); // 상태 값 읽기

  const onclickMenu = (index) => {
    setMenu(menu == index ? null : index);
  };

  const [tab, setTab] = useState(1);

  const onclickTab = (index) => {
    setTab(index);
  };

  return (
    <ResultPresenter
      menu={menu}
      setMenu={setMenu}
      onclickMenu={onclickMenu}
      tab={tab}
      onclickTab={onclickTab}
      keyword={keyword}
      searchResults={searchResults}
    />
  );
}
