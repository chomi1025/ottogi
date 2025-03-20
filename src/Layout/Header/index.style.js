import styled from "@emotion/styled";

export const Inner = styled.div`
  width: 1410px;
  height: auto;
  margin: 0 auto;
  font-size: 18px;
  position: relative;
  display: flex;
  justify-content: ${(props) => props.top && "space-between"};
  align-items: center;

  > div:first-of-type {
  }

  > div:last-child {
  }
`;

export const Top = styled.header`
  /* box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05); */
  padding: 40px 0 8px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 100%;

  h1 {
    width: 171px;
    height: 32px;
    position: relative; /* position 속성 추가 */
    z-index: 1001;

    a {
      width: inherit;
      height: inherit;
      display: block;

      span {
        display: block;
        width: inherit;
        height: inherit;
        background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Logo.svg?alt=media&token=a9fa2351-6496-4cfd-a1f7-68fb5754f317")
          no-repeat center center;
        background-size: contain;
      }
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
`;

export const category_new = styled.li``;

export const category_only = styled.li`
  margin-left: 70px;
`;

export const category_event = styled.li`
  margin-left: 70px;
`;

export const category_gift = styled.li`
  margin-left: 70px;
  width: 75px;
  height: 21px;
  display: flex;
  align-items: center;
  position: relative;

  a {
    display: inline-block;
    z-index: 9;
    position: absolute;
    top: -7px;
    background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Header%2Fottogift.png?alt=media&token=bf325561-9510-427c-96ad-a924fc11b699)
      no-repeat center center;
    background-size: contain;
    width: 75px;
    height: 26px;
  }
`;

export const category_best = styled.li`
  margin-left: 70px;
`;
