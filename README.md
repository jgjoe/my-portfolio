# My Portfolio — 개인 포트폴리오 사이트

**AI로 빠르게 만들고, 테스트와 데이터로 검증한 프로젝트의 본인 역할, 핵심 판단과 결과를 보여주는 포트폴리오 사이트**

[![Live](https://img.shields.io/badge/live-jgjoe.github.io-success)](https://jgjoe.github.io/my-portfolio/)
[![Stack](https://img.shields.io/badge/React-Tailwind%20CSS-61DAFB?logo=react&logoColor=black)](#기술-스택)
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)

**[포트폴리오 바로가기](https://jgjoe.github.io/my-portfolio/)**

프로젝트를 나열하는 대신 어떤 문제를 맡았고, 무엇을 판단했고, 결과를 어떻게 검증했는지가 보이도록 구성했습니다.
대표 프로젝트는 다음 순서로 배치했습니다.

1. **TraceVerity** — 공통 계산 결과를 쓰는 웹과 AI, 조회 권한 범위 구분
2. **혜택나침반** — 같은 평가 조건으로 검색 후보를 비교해 채택·보류
3. **서울 공공자전거 데이터 파이프라인** — 원천 78개월 약 2.41억 행의 정제와 합계 대조, 변경 월 재처리
4. **Build Your Health** — 웹 주문 시스템 재구축의 측정 설계, SQL 검증과 인덱스 선정
5. **오늘도 신선** — 확인 후 저장과 사용성 결함 수정, 한정 재확인 및 스토어 출시
6. **길동이** — 6인 팀의 차량 도메인 API·DB 담당, 이후 개인 확장으로 SSE 알림 구현

추가 프로젝트는 쓰담, Movie Diary와 Kubernetes 운영 실습입니다. AI 코딩 도구 활용은 요구사항·검증 기준·변경 채택 판단과 함께 설명하며, 프로젝트별 코드 작성과 본인 기여 범위를 구분합니다.

---

## 주요 기능

| 기능 | 내용 |
|---|---|
| **핵심 성과** | 결과 일관성 검증, 변경 추적과 부분 재처리, 검증 기반 출시 판단을 대표 수치로 요약 |
| **프로젝트** | 프로젝트별 문제, 기여, 판단, 결과, 검증 근거 |
| **이력** | 학력, 자격증, 연구와 수상, 핵심 기술 |
| **연락** | 이메일과 GitHub 연결 |
| **다국어** | 한국어 / 영어 전환 |
| **PDF 저장** | `PDF로 저장` 버튼이나 브라우저 인쇄로 같은 데이터의 요약과 대표 프로젝트를 A4로 출력. 현재 선택은 요약 1쪽과 프로젝트 6쪽이며 고정 분량 목표가 아님 |
| **반응형 UI** | 모바일·데스크톱 대응, 다크 모드 |

## 설계 판단

### 내용을 코드에서 분리했다

문구가 컴포넌트 안에 있으면 프로젝트 하나를 고칠 때마다 화면 코드를 열어야 합니다.
포트폴리오 내용 전체를 `src/portfolioData.js` 한 곳에 모으고, 화면과 PDF 문서는 그 데이터를 그리기만 합니다.
다국어도 같은 파일에서 처리합니다. 값마다 `{ ko, en }`으로 두고 `pick(value, lang)` 헬퍼가 현재 언어를 고릅니다.

### 판단과 결과가 먼저 보이게 했다

"무엇을 썼다"만 적으면 프로젝트가 서로 비슷해 보입니다.
기본 카드에서 본인 기여와 핵심 선택을 읽을 수 있도록 프로젝트별 표시 항목을 정했습니다. 상세 영역은 추가 맥락·측정 조건을 제공하고 PDF는 대표 프로젝트의 전체 근거를 같은 순서로 보여 줍니다.
측정값은 결과 타일로 따로 보여주고, 검증 근거 창에서 확인 대상과 결과를 설명한 뒤 저장소·평가셋·QA 기록 같은 공개 근거로 연결합니다.

### 푸시하면 배포되게 했다

포트폴리오는 자주 고치는 문서라 배포가 번거로우면 갱신을 미루게 됩니다.
`main`에 푸시하면 GitHub Actions가 빌드해 GitHub Pages에 배포합니다.

## 기술 스택

| 영역 | 기술 |
|---|---|
| 프론트엔드 | React, Tailwind CSS, Framer Motion |
| 다국어 | 데이터 파일 내 `{ ko, en }` 병기 + `pick()` 헬퍼 |
| 배포 | GitHub Pages, GitHub Actions |

## 프로젝트 구조

```text
src/
├── index.js             React 진입점
├── App.js               전체 화면 조합
├── portfolioData.js     포트폴리오 내용 + 한/영 번역
├── components/          내비게이션, 모달, 프로젝트 미디어
├── sections/            Hero, Proof, Projects, Credentials, Contact
├── print/               PDF 저장용 A4 문서
├── assets/              프로필 이미지
└── index.css            디자인 토큰과 반응형 스타일
public/                  프로젝트 이미지, OG 이미지
```

## 실행

```bash
npm ci
npm start
```

내용을 고칠 때는 화면 코드가 아니라 `src/portfolioData.js`를 수정합니다.

## 만든 사람

**Jigwan Joe** — Backend Engineer · Data & AI

- GitHub: [@jgjoe](https://github.com/jgjoe)
- Email: jigwan.joe@gmail.com
