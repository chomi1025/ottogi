import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 60px;

  > span {
    color: red;
    font-size: 13px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 12px;
`;

export const ContenstWrapper = styled.div`
  width: 420px;
  margin: 0 auto;

  form > div > button {
    display: block;
    width: 100%;
    padding: 20px 0;
    background: #d3233a;
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const PhoneInputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;

  > div {
    margin-top: 7px;
    margin-bottom: 14px;
    position: relative;
  }

  input {
    display: inline-block;
    border: 1px solid #aaa;
    width: 100%;
    padding: 10px 10px;
    border-radius: 3px;
  }

  span:first-of-type {
    font-weight: 700;
  }
`;

export const Error = styled.span`
  color: red;
  margin-left: 15px;
  font-size: 14px;
`;

export const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Inner = styled.div``;
