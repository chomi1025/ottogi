import styled from "@emotion/styled";
import LayoutFooter from "./Footer/index.container";
import LayoutHeader from "./Header/index";

const LayoutBody = styled.main`
  //메인빼고는 위에 25px씩 주기
  padding: 25px 0 130px;
`;

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <LayoutBody>{props.children}</LayoutBody>
      <LayoutFooter />
    </>
  );
}
