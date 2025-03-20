import { userState } from "@/state/userState";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRecoilValue } from "recoil";

export const Card = styled.div`
  padding: 40px 0;
  background: #f8f2eb;
  border-radius: 10px;
  width: 100%;
  display: flex;
`;

export const CardLeft = styled.div`
  width: 50%;
  padding-left: 60px;
  p {
    font-size: 28px;
    line-height: 1.5;
    font-weight: bold;
  }
`;
export const CardRight = styled.div`
  width: 50%;
  display: flex;
`;

export const Mileage = styled.div`
  width: 50%;
  border-left: 1px solid #e4d8cd;
  text-align: center;

  a:first-of-type {
    font-weight: 500;
  }

  p {
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: bold;
  }

  a:last-child {
    display: inline-block;
    min-width: 90px;
    color: #333;
    padding: 10px 20px;
    border: 1px solid #333;
    border-radius: 6px;
  }
`;

export const Coupon = styled.div`
  width: 50%;
  border-left: 1px solid #e4d8cd;
  text-align: center;

  a:first-of-type {
    font-weight: 500;
  }

  p {
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: bold;
  }

  a:last-child {
    display: inline-block;
    min-width: 90px;
    color: #333;
    padding: 10px 20px;
    border: 1px solid #333;
    border-radius: 6px;
  }
`;

export default function CardComponent() {
  const user = useRecoilValue(userState);

  return (
    <>
      <Card>
        <CardLeft>
          <p>
            {user.nickname} 뚜밀리님
            <br /> 오늘도 행복하세요💛
          </p>

          <Link href="/main">
            <a>전체 등급이 궁금해요 </a>
          </Link>
        </CardLeft>

        <CardRight>
          <Mileage>
            <Link href="/main">
              <a>마일리지</a>
            </Link>

            <p>1,000</p>

            <Link href="/main">
              <a>사용하기</a>
            </Link>
          </Mileage>

          <Coupon>
            <Link href="/main">
              <a>쿠폰</a>
            </Link>

            <p>2</p>

            <Link href="/main">
              <a>쿠폰등록</a>
            </Link>
          </Coupon>
        </CardRight>
      </Card>
    </>
  );
}
