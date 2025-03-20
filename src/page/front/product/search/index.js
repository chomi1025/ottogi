import { Inner } from "../../../../../styles/main";
import ResultContainer from "./result/index.container";

export default function SearchKeyword(props) {
  return (
    <Inner width={"1410px"}>
      {/* 검색결과 없을 시 */}
      {/* {props.searchResult || <NoResult />} */}

      {/* 검색결과 */}
      {props.searchResult || <ResultContainer />}
    </Inner>
  );
}
