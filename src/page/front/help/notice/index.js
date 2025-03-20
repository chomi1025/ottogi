import Link from "next/link";
import * as N from "./index.style";
import { useState } from "react";

export default function NoticeUI() {
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;
  const totalPages = 2;

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
          className={activePage === pageNumber ? "active" : "inactive"}
        >
          <span>{pageNumber}</span>
        </li>
      );
    });
  };

  return (
    <N.Wrapper>
      <h3>공지사항</h3>
      <ul>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
        <li>
          <Link href="">
            <a>
              <span>공지</span> <p>뚜밀리 회원등급 개편안내♥</p>
            </a>
          </Link>

          <p>2024.08.02</p>
        </li>
      </ul>

      <N.Pagination>
        <li onClick={() => setActivePage(1)} disabled={activePage === 1} />

        <li
          onClick={() =>
            setActivePage((prev) =>
              prev <= 10
                ? 1
                : Math.floor((prev - 1) / itemsCountPerPage) * itemsCountPerPage
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
      </N.Pagination>
    </N.Wrapper>
  );
}
