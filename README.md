

 
# 🍜 OTTOGI Mall (오뚜기몰 클론 코딩)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-12-black?style=flat-square&logo=next.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-DB7093?style=flat-square)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

　
# 🚀 프로젝트 소개

> **React와 Next.js 생태계에 첫발을 내딛으며 진행한 학습용 클론 프로젝트입니다.**
> 기성 서비스인 오뚜기몰의 UI를 가이드 삼아, 프론트엔드 개발의 기초가 되는 컴포넌트 설계, 전역 상태 관리, 서버리스 DB 연동의 전 과정을 직접 경험해 보는 것에 집중했습니다. 모든 기술 스택을 처음 접하며 마주한 고민들을 해결해 나간 기록입니다.

　
## 🔗 프로젝트 링크

| 구분 | 링크 |
| --- | --- |
| **🚀 서비스** | [오뚜기몰](https://ottogi-two.vercel.app) |
| **🧪 테스트 계정** | **EMAIL:** `test123@test.com` / **PW:** `123456` |

　
## ✨ 주요 기능 및 구현 화면

<details>
<summary><b>📸 주요 기능 상세보기 (클릭)</b></summary>
<br>

#### 🔑 인증 및 세션 관리
- Firebase Auth를 활용한 로그인/회원가입.
- 로그인 상태에 따른 헤더 UI 분기 처리.
- [상세보기](https://github.com/chomi1025/ottogi/wiki/%EB%A1%9C%EA%B7%B8%EC%9D%B8)

#### 🛍️ 상품 리스트 및 장바구니
- Firestore 실시간 데이터 페칭.
- Recoil을 활용해 상품 추가 시 상단 장바구니 카운트 즉각 업데이트.
- [상세보기](https://github.com/chomi1025/ottogi/wiki/%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88)

#### 📦 주문 프로세스
- 장바구니 데이터를 유지하며 주문서 페이지로 이동하는 로직 구축.
- [상세보기](https://github.com/chomi1025/ottogi/wiki/%EB%A1%9C%EA%B7%B8%EC%9D%B8)
</details>

　
## 🛠️ 기술 스택 및 선정 이유

| 분류 | 사용 기술 | 선정 이유 |
| --- | --- | --- |
| **Frontend** | Next.js 12 | SSR/SSG 데이터 페칭 전략 학습 및 SEO 최적화 경험 |
| **State Management** | Recoil | Redux 대비 빠른 상태 관리 구현 가능 |
| **Backend/DB** | Firebase | 별도 서버 구축 없이 인증 및 실시간 DB를 신속하게 구현 |

　
## 🧠 기술적 고민

**1. 전역 상태와 DB의 동기화**
- 장바구니 상태를 단순히 로컬(Recoil)에만 저장하지 않고, Firebase Firestore와 연동하여 사용자가 다시 접속했을 때도 장바구니 데이터가 유지되도록 설계했습니다.

**2. 컴포넌트 재사용성**
- 오뚜기몰 특유의 반복되는 상품 카드 UI를 공통 컴포넌트화하여 코드 중복을 줄이고 유지보수 효율을 높였습니다.

　
## ✨ 주요 학습 포인트

#### 🛠️ 첫 React & Next.js 경험
- **컴포넌트 기반 사고**: UI를 독립적인 컴포넌트 단위로 쪼개고 재사용하는 React의 핵심 개념을 익혔습니다.
- **Pages Router 활용**: Next.js 12의 라우팅 시스템과 SSR/SSG의 기초적인 데이터 페칭 방식을 경험했습니다.

#### 📦 처음 써보는 전역 상태 관리 (Recoil)
- **Props Drilling 해결**: 하위 컴포넌트로 데이터를 계속 넘겨줘야 하는 불편함을 해결하기 위해 **Recoil**을 도입했습니다.
- **실시간 UI 반영**: 장바구니에 상품을 담았을 때 상단 카운트 배지가 즉각적으로 업데이트되는 흐름을 구현하며 상태 관리의 필요성을 체감했습니다.

　
## 💡 프로젝트 후기
"처음"이라는 수식어가 많이 붙은 프로젝트인 만큼, 기능의 완성도보다 **어떻게 돌아가는가**를 이해하는 데 주력했습니다. 이 프로젝트를 통해 얻은 기초 지식은 이후 진행한 **'도복일번지'** 프로젝트의 밑거름이 되었습니다.


 
