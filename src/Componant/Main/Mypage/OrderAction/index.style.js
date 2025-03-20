import styled from "@emotion/styled";

export const Contents = styled.div`
  margin-top: 60px;
  height: 50px;

  h3 {
    font-size: 32px;
    line-height: 38px;
  }

  form {
    display: flex;
    align-items: center;
    margin-top: 30px;
    padding: 20px 30px;
    background: #f8f8f8;
    border-radius: 6px;

    ul {
      display: flex;
      height: 50px;
      flex: 1 1 0%;
      li {
        display: block;
        align-items: center;
        line-height: 50px;
        width: calc(100% / 4);
        text-align: center;
        color: #333;
        border: 1px solid #e4e4e4;
        background-color: #fff;

        &:not(:first-of-type) {
          margin-left: -1px;
        }

        &:first-of-type {
          border-radius: 6px 0 0 6px;
        }
        &:last-of-type {
          border-radius: 0 6px 6px 0;
        }
      }
    }
  }

  .react-datepicker-popper {
    background-color: white;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    position: absolute;
    top: 224px;
    left: 871.5px;
    z-index: 1;
    display: block;
    width: 446px;
    padding: 0 44px 40px;
    border-radius: 8px;
  }

  .react-datepicker__input-container {
    > input {
      padding: 0 20px;
    }
  }

  .react-datepicker__header--custom > div:first-of-type {
    padding: 30px 0;
  }

  .react-datepicker__current-month {
    padding: 30px 0;
  }

  .react-datepicker__month {
    font-size: 0.9em;
  }
  .react-datepicker__aria-live {
    display: none;
  }
  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__day--outside-month {
    color: #ccc;
  }
  .react-datepicker__day-names {
    display: flex;
    color: #888;
    font-size: 16px;
    font-weight: 400;
    padding: 0 0 14px;

    > div {
      width: calc(100% / 7);
      text-align: center;
    }
  }

  .react-datepicker__week {
    display: flex;

    > div {
      width: calc(100% / 7);
      text-align: center;
      padding: 9.5px;
    }
  }
`;

export const DateWrapper = styled.div`
    margin-left: 20px;
    flex: 1 1 0%;
    display: flex;
    align-items: center;

    input {
      cursor: pointer;
      padding-right: 40px;
      width: 208px;
      height: 50px;
      border-radius: 6px;
      color: #aaa;
      border: 1px solid #ddd !important;

      &:first-of-type {
      }
    }

    span {
      display: inline-block;
      color: #333;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      margin: 0 8px;
    }

    button {
      cursor: pointer;
      width: 66px;
      height: 50px;
      padding: 0;
      margin-left: 10px;
      background-color: #fff;
      border: 1px solid #333;
      border-radius: 6px;
    }
  }
`;
