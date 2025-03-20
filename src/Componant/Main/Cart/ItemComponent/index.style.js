import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  padding-left: 21px;
  padding: 20px 0;

  > a {
    display: flex;
    align-items: center;
    width: auto;
    flex: 1 1 0%;
    padding-right: 10px;

    p {
      padding: 0 10px 0 30px;
    }
    img {
      width: 120px;
      height: 120px;
    }
  }
`;

export const ItemCount = styled.div`
  width: 135px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 115px;
    height: 40px;
    display: flex;
    border-radius: 4px;
    border: 1px solid #ddd;

    input {
      width: 31.5px;
      height: 40px;
      text-align: center;
    }

    button:first-of-type {
      display: block;
      width: 40px;
      height: 40px;
      background-color: white;
    }

    button:last-of-type {
      width: 40px;
      height: 40px;
      background-color: white;
    }
  }
`;

export const ItemPrice = styled.div`
  width: 215px;

  p {
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const removeItem = styled.div`
  width: 50px;
  display: flex;
  align-items: center;

  button {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
