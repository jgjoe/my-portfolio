# 포트폴리오 사이트

**백엔드와 IT 시스템을 만들고 검증해 배포하는 과정을 보여주는 개인 포트폴리오**

[![Live](https://img.shields.io/badge/live-jgjoe.github.io-success)](https://jgjoe.github.io/my-portfolio/)
[![Stack](https://img.shields.io/badge/React-Tailwind%20CSS-61DAFB?logo=react&logoColor=black)](#기술-스택)
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![i18n](https://img.shields.io/badge/i18n-한국어%20%2F%20English-informational)](#설계-판단)

**[포트폴리오 바로가기](https://jgjoe.github.io/my-portfolio/)**

프로젝트를 단순히 나열하는 대신 **어떤 문제를 맡았고 무엇을 판단했으며 결과를 어떻게 검증했는지**가 보이도록 구성했습니다.

대표 프로젝트는 다음 순서로 배치했습니다.

1. **TraceVerity** — Process Intelligence, deterministic Python/DuckDB Core, Web/Power BI/Agent/MCP, usability·regression 검증
2. **혜택나침반** — RAG, 백엔드, 데이터, 운영 관측, 정량 평가
3. **오늘도 신선** — Android 제품 개발, 회귀 검증, 릴리스 판단
4. **길동이** — 6인 팀 백엔드, MongoDB, OpenAPI, 수상/논문

---

## 주요 기능

| 기능 | 내용 |
|---|---|
| **About** | 구현부터 운영까지 이어지는 일하는 방식 |
| **Key outcomes** | production canary 승격, 릴리스 보류 후 재출시, 논문과 수상 |
| **Projects** | 프로젝트별 문제, 기여, 판단, 결과, 검증 근거 |
| **Credentials** | 학력, 자격증, 연구와 수상, 핵심 기술 |
| **Contact** | 이메일과 GitHub 연결 |
| **다국어** | 한국어 / 영어 토글 |
| **반응형 UI** | 모바일·데스크톱 대응, 섹션 진입 애니메이션 |

## 설계 판단

### 내용을 코드에서 분리했다

문구가 컴포넌트 안에 박혀 있으면 프로젝트 하나를 고칠 때마다 화면 코드를 열어야 합니다.
포트폴리오 내용 전체를 `src/portfolioData.js` 한 곳에 모으고, 화면은 그 데이터를 그리기만 합니다.

다국어도 같은 파일에서 처리합니다. 값마다 `{ ko, en }`으로 두고 `pick(value, lang)` 헬퍼가 현재 언어를 고르는 방식이라,
**한글 문구와 영문 번역이 같은 데이터 구조 안에서 함께 관리됩니다.**

### 푸시하면 배포되게 했다

포트폴리오는 자주 고치는 문서라 배포가 번거로우면 갱신을 미루게 됩니다.
**GitHub Actions로 빌드·배포를 자동화**해 내용 수정에만 집중할 수 있게 했습니다.

### 프로젝트 카드를 판단과 결과 중심으로 읽게 했다

"무엇을 썼다"만 적으면 프로젝트가 서로 비슷해 보입니다.
대표 프로젝트는 핵심 기여와 판단을 기본 화면에서 먼저 보여주고, 품질 검증과 운영 관측 같은 세부 내용은 펼쳐서 볼 수 있게 했습니다.
측정값은 본문과 분리해 결과 타일로 제시하고 저장소, 평가셋, QA 기록, 런북 같은 검증 근거로 바로 이동할 수 있게 했습니다.

상단 핵심 성과는 다음 세 축으로 구성합니다.

- **13,087 cases / 48 tests** — 하나의 deterministic Core를 Web·Power BI·Agent·MCP까지 일관되게 검증
- **배포 보류 → 재출시** — OCR 잔여 오답을 근거로 보류하고 사용자 확인 흐름 도입
- **논문 2편과 수상 2회**

## 기술 스택

| 영역 | 기술 |
|---|---|
| 프론트 | React, Tailwind CSS, Framer Motion |
| 다국어 | 데이터 파일 내 `{ ko, en }` 병기 + `pick()` 헬퍼 |
| 배포 | GitHub Pages, GitHub Actions |

## 프로젝트 구조

```text
src/
├── index.js             React 진입점
├── App.js               전체 화면 조합
├── portfolioData.js     포트폴리오 내용 + 한/영 번역
├── components/          내비게이션, 모달, 프로젝트 미디어
├── sections/            Hero, About, Projects, Credentials, Contact
├── assets/              프로필 이미지
└── index.css             공통 디자인 토큰과 반응형 스타일
public/                프로젝트 이미지, OG 이미지
```

## 실행

```bash
npm install && npm start
```

내용을 고칠 때는 화면 코드가 아니라 `src/portfolioData.js`를 수정합니다.

## 범위와 조건

- 프로젝트 카드의 수치는 **각 프로젝트 저장소의 README·평가 기록을 근거**로 합니다.
- 혜택나침반의 지연 원인은 콜드/웜 요청과 구간을 나눠 측정한 해당 배포 환경의 결과로 표현하며, 일반적인 코드 원인까지 배제하는 식으로 단정하지 않습니다.
- 오늘도 신선의 OCR 수치는 독립 한국 라벨 55장·D-30 시나리오 기준의 회귀 측정값이며, 실사용 전체 정확도로 일반화하지 않습니다.
- `검증 근거 공개`는 평가셋·측정 스크립트·QA·릴리스 기록의 공개를 뜻하며, 비공개 원본 이미지나 사설 QA 데이터까지 공개한다는 의미는 아닙니다.

## 만든 사람

**조지관 (Jigwan Joe)**

- GitHub: [@jgjoe](https://github.com/jgjoe)
- Email: jigwan.joe@gmail.com
