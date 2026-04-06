import { useState } from "react";
import * as O from "./index.style";
import DatePicker from "react-datepicker";
export default function OrderActionComponent(props) {
  // 탭메뉴
  const [selectedTab, setSelectedTab] = useState(0);

  // 달력관련
  const [startDate, setStartDate] = useState(
    new Date(new Date().setMonth(new Date().getMonth() - 1))
  );
  const [endDate, setEndDate] = useState(new Date());

  const handleClick = (index) => {
    setSelectedTab(index); // 클릭한 탭의 인덱스를 상태로 저장
    const today = new Date();
    let calculatedStartDate;
    let calculatedEndDate = new Date(); // 기본적으로 현재 날짜

    // 탭에 따라 startDate와 endDate를 계산
    switch (index) {
      case 0: // 1개월
        calculatedStartDate = new Date(today.setMonth(today.getMonth() - 1));
        break;
      case 1: // 3개월
        calculatedStartDate = new Date(today.setMonth(today.getMonth() - 3));
        break;
      case 2: // 6개월
        calculatedStartDate = new Date(today.setMonth(today.getMonth() - 6));
        break;
      case 3: // 12개월
        calculatedStartDate = new Date(today.setMonth(today.getMonth() - 12));
        break;
      default:
        calculatedStartDate = today; // 기본값
        break;
    }
    setStartDate(calculatedStartDate); // startDate를 계산된 값으로 설정
    setEndDate(calculatedEndDate); // endDate는 현재 날짜로 설정
  };

  return (
    <>
      <O.Contents>
        <h3>{props.title}</h3>
        <form>
          <ul>
            {["1개월", "3개월", "6개월", "12개월"].map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)} // 클릭 시 해당 탭 선택
                style={{
                  backgroundColor: selectedTab === index ? "red" : "",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <O.DateWrapper>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy년 MM월 dd일"
              placeholderText="날짜를 선택해주세요"
              renderCustomHeader={({
                monthDate,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* 이전 달 버튼 */}
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    ◀
                  </button>

                  {/* 현재 월 */}
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      color: "#1d1d1b",
                    }}
                  >
                    {monthDate.getFullYear()}.
                    {String(monthDate.getMonth() + 1).padStart(2, "0")}
                  </span>

                  {/* 다음 달 버튼 */}
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    ▶
                  </button>
                </div>
              )}
            />
            <span>~</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy년 MM월 dd일"
              placeholderText="날짜를 선택해주세요"
              renderCustomHeader={({
                monthDate,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* 이전 달 버튼 */}
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    ◀
                  </button>

                  {/* 현재 월 */}
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      color: "#1d1d1b",
                    }}
                  >
                    {monthDate.getFullYear()}.
                    {String(monthDate.getMonth() + 1).padStart(2, "0")}
                  </span>

                  {/* 다음 달 버튼 */}
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  >
                    ▶
                  </button>
                </div>
              )}
            />
            <button>조회</button>
          </O.DateWrapper>
        </form>

        <div>주문 내역이 없습니다.</div>
      </O.Contents>
    </>
  );
}
