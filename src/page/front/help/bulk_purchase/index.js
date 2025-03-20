import Link from "next/link";
import * as B from "./index.style";
import { useState } from "react";

export default function BulkPurchaseUI() {
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;
  const totalPages = 100;

  // 페이지 버튼 렌더링
  const renderPageNumbers = () => {
    const startPage =
      Math.floor((activePage - 1) / itemsCountPerPage) * itemsCountPerPage + 1;
    return Array.from({ length: itemsCountPerPage }, (_, index) => {
      const pageNumber = startPage + index;
      return (
        <li
          key={pageNumber}
          onClick={() => setActivePage(pageNumber)}
          style={{
            padding: "0 5px",
            fontWeight: activePage === pageNumber ? "bold" : "normal",
          }}
          className={activePage === pageNumber ? "active" : ""}
        >
          <span>{pageNumber}</span>
        </li>
      );
    });
  };

  return (
    <B.Wrapper>
      <h3>대량주문문의</h3>

      <form>
        <select>
          <option value="productName">상품명</option>
          <option value="author">작성자</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
        </select>

        <input type="text" />

        <button>조회</button>
      </form>

      <div>
        <div>
          <p>
            총 <strong>286</strong>&nbsp;개
          </p>
          <Link href="">
            <a>문의하기</a>
          </Link>
        </div>

        <ul>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
          <li>
            <div>
              <span>답변완료</span>

              <Link href="">
                <a>
                  <p>진라면 순한맛 40봉지 200박스 구매</p>
                </a>
              </Link>
            </div>

            <p>김*록</p>
            <p>2024.11.13</p>
          </li>
        </ul>

        <B.Pagination>
          <li onClick={() => setActivePage(1)} disabled={activePage === 1} />

          <li
            onClick={() =>
              setActivePage((prev) =>
                prev <= 10
                  ? 1
                  : Math.floor((prev - 1) / itemsCountPerPage) *
                    itemsCountPerPage
              )
            }
            disabled={activePage <= 10}
          />

          {renderPageNumbers()}

          <li
            onClick={() =>
              setActivePage(
                Math.floor((activePage - 1) / itemsCountPerPage + 1) *
                  itemsCountPerPage +
                  1
              )
            }
            disabled={activePage > totalPages - itemsCountPerPage}
          />
          <li
            onClick={() => setActivePage(totalPages)}
            disabled={activePage === totalPages}
          />
        </B.Pagination>
      </div>
    </B.Wrapper>
  );
}
