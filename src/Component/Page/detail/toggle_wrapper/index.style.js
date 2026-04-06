import styled from "@emotion/styled";

export const toggle_wrapper = styled.div`
  margin-top: ${(props) => props.top && "80px"};
  padding: 30px 0;
  border-top: ${(props) => props.top && "1px solid #eee"};
  border-bottom: 1px solid #eee;
`;

export const title_wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  h6 {
    font-size: 18px;
  }
`;

export const toggleIcon = styled.span`
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Farrow-b-20.svg?alt=media&token=3075a72c-df3b-421f-8879-609fbbf06df1)
    no-repeat center center;
  width: 20px;
  height: 20px;
  transform: ${(props) => props.toggle && "rotate(3.142rad)"};
  transition: 0.2s;
`;

export const Contents_wrapper = styled.div`
  display: ${(props) => props.toggle || "none"};
`;
