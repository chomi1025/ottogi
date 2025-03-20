import styled from "@emotion/styled";

export const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 1125px;
`;

export const Contents = styled.div``;

export const Wrapper = styled.div``;

export const Section = styled.section`
  width: 1125px;
  padding-top: 80px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h3 {
    font-size: 22px;
    line-height: 26px;
  }

  a {
  }
`;

export const ContentsWrapper = styled.div`
  border-top: 2px solid #333;
  padding-top: 20px;
  margin-top: 20px;
  div {
    text-align: center;
    padding: 107px 0;
    border-bottom: 1px solid #eee;

    p {
      font-size: 18px;
      line-height: 26px;
      color: #ccc;
    }
  }
`;
