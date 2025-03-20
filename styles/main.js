import styled from "@emotion/styled";

export const Inner = styled.div`
  width: ${(props) => props.width};
  margin: 0 auto;
  margin-top: ${(props) => props.marginTop};
  overflow: ${(props) => props.overflow};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  position: ${(props) => props.position};
  justify-content: ${(props) => props.justifyContent};
`;

export const Title = styled.h2`
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontsize || "40px"};
  line-height: ${(props) => props.lineHeight};
`;
