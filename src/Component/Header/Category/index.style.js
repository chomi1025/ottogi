import styled from "@emotion/styled";

export const CategoryWrapper = styled.ul`
  display: none;
  font-size: 16px;
  width: 240px;
  padding: 15px 0;
  border: 1px solid #e4e4e4;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  width: 240px;
  max-height: 780px;
  height: calc(100vh - 175px);
  top: 75px;
  left: 0;
  background-color: white;
`;

export const Category = styled.li`
  padding: 12px 20px;
  line-height: 1.55;
  width: 240px;
  background-color: white;
  cursor: pointer;
  margin-right: 30px;
  color: ${(props) => props.sellect && "#d3233a"};
  font-weight: ${(props) => props.sellect && "700"};

  &:hover {
    color: #d3233a;
    font-weight: 700;
  }

  &:hover ul {
    display: block;
  }
`;

export const SubcategoryWrapper = styled.ul`
  position: absolute;
  top: 75px;
  left: 239px;
  width: 240px;
  height: 100%;
  max-height: 780px;
  height: calc(100vh - 175px);
  border: 1px solid #e4e4e4;
  padding: 15px 0;
  color: #d3233a;
  margin-right: 10px;
  background-color: white;
`;

export const Subcategory = styled.li`
  width: 240px;
  font-weight: normal;
  padding: 12px 20px;
  line-height: 1.55;
  word-break: keep-all;
  color: #1d1d1b;
  font-weight: normal;
  margin-right: 30px;
  font-size: 16px;

  &:hover {
    color: #d3233a;
    font-weight: 700;
  }
`;
