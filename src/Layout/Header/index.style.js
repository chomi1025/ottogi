import styled from "@emotion/styled";

export const Inner = styled.header`
  position: sticky;
  z-index: 999;
  top: 0;
  left: 0;
  margin: 0 auto;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.top && "space-between"};
  align-items: center;
  background-color: white;

  > div:first-of-type {
  }

  > div:last-child {
  }
`;

export const Top = styled.section`
  padding: 40px 0 8px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 1410px;
  z-index: 9999;

  h1 {
    width: 171px;
    height: 32px;
    position: relative;
    z-index: 1001;

    a {
      width: inherit;
      height: inherit;
      display: block;
    }
  }
`;

export const Bottom = styled.nav`
  background-color: white;
  position: sticky !important;
  z-index: 999;
  width: 100%;
  height: auto;
  top: 0px;
  left: 0;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);
`;

export const Category_All = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  font-size: inherit;
  height: 75px;
  cursor: pointer;
  position: relative;
  z-index: 10000;

  &:hover > div ul:first-of-type {
    display: block;
  }
`;

export const Category_list = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 100px;

  li {
    margin-left: 70px;
  }
`;

export const category_new = styled.li``;

export const category_only = styled.li``;

export const category_event = styled.li``;

export const category_gift = styled.li``;

export const category_best = styled.li``;
