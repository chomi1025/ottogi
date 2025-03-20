import styled from "@emotion/styled";

export const Inner = styled.div`
  margin-bottom: ${(props) => {
    if (props.new) {
      return "80px";
    }
    if (props.how) {
      return "140px";
    }
    if (props.only) {
      return "60px";
    }
  }};
`;

export const Title_Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 32px;
`;
