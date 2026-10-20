export const pick = (value, lang) => value && typeof value === "object" && !Array.isArray(value) && ("ko" in value || "en" in value) ? value[lang] ?? value.ko : value;

export const portfolio = {
  name: { ko: "조지관", en: "Jigwan Joe" },
  ui: {
    projects: { ko: "프로젝트", en: "Projects" }, credentials: { ko: "이력", en: "Credentials" }, contact: { ko: "연락", en: "Contact" },
    viewWork: { ko: "대표 프로젝트 보기", en: "View selected work" }, resume: { ko: "PDF로 저장", en: "Save as PDF" }, skipToContent: { ko: "본문으로 바로가기", en: "Skip to content" }, languageLabel: { ko: "영문으로 보기", en: "View in Korean" },
    themeToLight: { ko: "라이트 모드로 보기", en: "Use light mode" }, themeToDark: { ko: "다크 모드로 보기", en: "Use dark mode" },
    menuOpen: { ko: "메뉴 열기", en: "Open menu" }, menuClose: { ko: "메뉴 닫기", en: "Close menu" },
    mobileNavigation: { ko: "모바일 포트폴리오 메뉴", en: "Mobile portfolio navigation" },
    closeDialog: { ko: "닫기", en: "Close dialog" },
    projectDeepDive: { ko: "프로젝트 상세 보기", en: "View project details" },
    projectRole: { ko: "내가 한 일", en: "My role" },
    projectDiagram: { ko: "구조도", en: "Structure" },
    enlargeHint: { ko: "눌러서 크게 보기", en: "Click to enlarge" },
    evidenceLinks: { ko: "검증 근거", en: "Evidence" },
    viewEvidence: { ko: "검증 근거 보기", en: "View evidence" },
    evidenceModalIntro: { ko: "무엇을 어떻게 확인했는지 정리했습니다. 공개 검증 자료가 있으면 함께 연결합니다.", en: "See what was checked and how it was checked. Public validation sources are linked when available." },
  },
  hero: {
    eyebrow: ["BACKEND", "DATA", "AI SERVICES", "VERIFIED BY TESTS"],
    title: { ko: "측정으로 고르고 검증해\n출시까지 마치는 신입 개발자", en: "A new developer who decides by measurement\nand ships verified work" },
    summary: { ko: "DB 조회 개선, 2억 4천만 건 데이터 검증, 앱 정식 출시를 해냈습니다. AI 코딩 도구를 활용하되 요구사항과 검증 기준을 정하고 테스트로 반영 여부를 판단합니다.", en: "I improved DB queries, verified 240M records, and shipped an app to production. I use AI coding tools, but I set requirements and validation criteria and let tests decide what is adopted." },
    profileRole: "Software Developer, Backend & Data",
    photoAlt: { ko: "조지관 프로필 사진", en: "Portrait of Jigwan Joe" },
    quickFacts: [
      { value: "4.04 / 4.5", label: { ko: "학점", en: "GPA" } },
      { value: { ko: "경기대 컴퓨터공학부", en: "Computer Engineering" }, label: { ko: "2026.02 졸업", en: "Graduated 2026.02" } },
      { kind: "list", label: { ko: "자격증", en: "Certificates" }, items: [{ ko: "정보처리기사", en: "Engineer Information Processing" }, "SQLD", "ADsP", "CSTS"] },
      { kind: "list", label: { ko: "어학", en: "Language" }, items: ["OPIc IH"] },
    ],
  },
  proof: {
    "title": {
      "ko": "핵심 역량",
      "en": "Core strengths"
    },
        "items": [
      {
        "kicker": { "ko": "백엔드와 데이터", "en": "BACKEND & DATA" },
        "value": { "ko": "대용량 데이터를 정제하고 DB 조회를 개선합니다", "en": "I clean big datasets and tune DB queries" },
        "label": {
          "ko": "주문 상세 조회의 DB 블록 읽기를 측정해 인덱스를 고르고, 78개월 공공자전거 기록 2억 4천만 건의 정상 기록과 격리 기록의 건수 합을 원본과 대조했습니다.",
          "en": "I chose indexes by measuring DB block reads, and reconciled 240M bike records over 78 months, accepted plus quarantined, with the source."
        },
        "stats": [
          { "ko": "정상 241,320,806 + 격리 29,666 = 원본 241,350,472건", "en": "241,320,806 accepted + 29,666 quarantined = 241,350,472 source rows" },
          { "ko": "Build Your Health: 상세 조회 DB 블록 읽기 6,285 → 14 (Oracle 생성 주문 60만 건 시험)", "en": "Build Your Health: order-detail DB block reads 6,285 → 14 (Oracle test, 600K generated orders)" }
        ],
        "projects": [
          { "name": { "ko": "서울 공공자전거", "en": "Seoul Bike" }, "target": "project-seoul-bike", "aria": { "ko": "서울 공공자전거 프로젝트로 이동", "en": "Jump to the Seoul Public Bike project" } },
          { "name": "Build Your Health", "target": "project-build-health", "aria": { "ko": "Build Your Health 프로젝트로 이동", "en": "Jump to the Build Your Health project" } }
        ]
      },
      {
        "kicker": { "ko": "제품 개발", "en": "PRODUCT" },
        "value": { "ko": "서비스를 끝까지 만들어 출시하고 개선합니다", "en": "I ship a service end to end and keep improving it" },
        "label": {
          "ko": "학부 과제에서 이어 간 앱을 ONEstore와 Google Play에 정식 출시했고, 사용자 4명의 관찰로 직접 입력과 소비 완료 복구 흐름을 개선했습니다.",
          "en": "I took a course-project app to production on ONEstore and Google Play, and improved manual entry and restoring consumed items based on observations with 4 users."
        },
        "stats": [
          { "ko": "4명, 32개 과업 관찰 → 소비 완료 복구와 직접 입력 경로 수정", "en": "4 users, 32 task observations → fixed consumed-item restore and manual-entry paths" },
          { "ko": "불편을 겪은 2명이 수정한 흐름 4개를 다시 수행해 8건 모두 완료", "en": "The 2 users who hit problems redid the 4 corrected flows; all 8 observations completed" }
        ],
        "projects": [
          { "name": { "ko": "오늘도 신선", "en": "Fridge D-Day" }, "target": "project-today-fresh", "aria": { "ko": "오늘도 신선 프로젝트로 이동", "en": "Jump to the Fridge D-Day project" } }
        ]
      },
      {
        "kicker": { "ko": "AI 응용", "en": "AI APPLICATIONS" },
        "value": { "ko": "AI 기능은 시험으로 확인한 뒤 반영합니다", "en": "I ship AI features only after testing them" },
        "label": {
          "ko": "정책 검색은 출처별 시험 질문으로, 업무 로그 AI 답변은 고정 질문으로 평가해 결과가 나아진 개선안만 반영했습니다.",
          "en": "I evaluated policy search and the log-analysis AI on fixed test questions and adopted only changes that improved results."
        },
        "stats": [
          { "ko": "혜택나침반: 상위 10개 안 정답 포함률 청년 60문항 46.7% → 51.7%", "en": "BenefitCompass: correct policy in top 10, Youth 60 queries, 46.7% → 51.7%" },
          { "ko": "TraceVerity: 안내문 수정안 채택 후 고정 질문 12개 시험에서 수치와 근거 기록 번호까지 맞은 답이 두 연결 방식 모두 36회 중 24회에서 35회 이상", "en": "TraceVerity: on 12 fixed questions, fully correct answers rose from 24 to 35+ of 36 runs on both connection methods" }
        ],
        "projects": [
          { "name": { "ko": "혜택나침반", "en": "BenefitCompass" }, "target": "project-benefit-compass", "aria": { "ko": "혜택나침반 프로젝트로 이동", "en": "Jump to the BenefitCompass project" } },
          { "name": "TraceVerity", "target": "project-traceverity", "aria": { "ko": "TraceVerity 프로젝트로 이동", "en": "Jump to the TraceVerity project" } }
        ]
      },
      {
        "kicker": { "ko": "팀 협업", "en": "TEAMWORK" },
        "value": { "ko": "설계를 문서로 공유하고 제안은 합의로 반영합니다", "en": "I document designs and build team agreement" },
        "label": {
          "ko": "11인 팀에서 공개 학습 자료와 국내 생활폐기물 자료 일부를 함께 쓰자고 제안하고 팀원들과 정확도와 일정을 검토해 합의한 뒤 학습한 모델을 로봇과 연동했습니다.",
          "en": "In a team of 11, I proposed adding a subset of Korean household-waste data to public training data, reached agreement, and integrated the trained model with the robot."
        },
        "stats": [
          { "ko": "쓰담: 캡스톤 시연, 2024 한국정보기술학회 대학생 논문경진대회 우수논문상", "en": "SSeudam: capstone demo; 2024 KIIT Student Paper Competition, Outstanding Paper Award" },
          { "ko": "길동이(6인 팀): 차량 API와 MongoDB 모델 구현, OpenAPI로 장치와 앱 담당자와 규격 공유", "en": "GildongE (team of 6): vehicle APIs and MongoDB models; shared specs with device and app teammates via OpenAPI" }
        ],
        "projects": [
          { "name": { "ko": "쓰담", "en": "SSeudam" }, "target": "project-ssodam", "aria": { "ko": "쓰담 프로젝트로 이동", "en": "Jump to the SSeudam project" } },
          { "name": { "ko": "길동이", "en": "GildongE" }, "target": "project-gildong", "aria": { "ko": "길동이 프로젝트로 이동", "en": "Jump to the GildongE project" } }
        ]
      }
    ]
  },
  projects: {
    eyebrow: { ko: "SELECTED WORK", en: "SELECTED WORK" }, title: { ko: "만들고 검증한 핵심 경험", en: "Selected work built and verified" },
    copy: { ko: "각 프로젝트에서 무엇을 정하고 어떻게 확인했는지, 결과와 근거를 함께 정리했습니다.", en: "For each project: what I decided, how I verified it, and the results with evidence." },
    featured: [
      {
        anchor: "project-gildong", title: "길동이 AI 차량 어시스턴트", titleLines: [{ ko: "길동이", en: "GildongE" }, { ko: "AI 차량 어시스턴트", en: "AI Vehicle Assistant" }], type: [{ ko: "6인 팀", en: "Team of 6" }, { ko: "백엔드 / DB 담당", en: "Backend / DB owner" }], period: "2025.03 — 2025.06",
        subtitle: { ko: "차량 데이터 API와 MongoDB 백엔드", en: "Vehicle data APIs and MongoDB backend" },
        lead: { ko: "졸음 감지 장치와 모바일 앱에서 들어오는 차량, 소모품, 주행 패턴 데이터를 사용자별로 제공하는 팀 프로젝트입니다.", en: "A team project that serves vehicle, consumable, and driving-pattern data from a drowsiness-detection device and mobile app per user." },
        tech: ["Java 17", "Spring Boot", "MongoDB", "Spring Data MongoDB", "Kakao OAuth API", "OpenAPI"],
        role: { ko: "6인 팀에서 차량 관련 API와 MongoDB 데이터 모델을 맡았고, 장치와 앱 담당자가 같은 규격으로 연동하도록 OpenAPI 문서를 작성했습니다.", en: "In a team of 6, I built the vehicle-related APIs and MongoDB data models, and wrote OpenAPI docs so device and app teammates could integrate against one spec." },
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "장치와 기능마다 형태가 다른 차량 데이터를 사용자 단위로 일관되게 다룰 서버가 필요했습니다.", en: "The team needed a backend that could handle differently shaped vehicle data consistently per user." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "데이터 형태가 장치와 기능마다 달라 차량 관련 5개 도메인(차량, 차량 모델, 소모품, 주행 패턴, 사용자)으로 나눠 REST API와 MongoDB 문서 모델로 구조화했습니다. 장치와 앱 담당자가 같은 규격으로 연동하도록 요청 및 응답 스키마와 오류 응답을 OpenAPI로 문서화했고, 사용자별 주간 평균 집계와 카카오 사용자 조회와 등록도 구현했습니다.", en: "Because data shapes differed by device and feature, I split the vehicle data into five domains (car, car model, consumable, driving pattern, user) and structured them as REST APIs and MongoDB document models. I documented request/response schemas and error responses with OpenAPI so device and app teammates could integrate against one spec, and also implemented per-user weekly averages and Kakao user lookup and registration." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "프로젝트는 캡스톤디자인 경진대회 심화캡스톤디자인 부문 은상을 받았고, 한국정보기술학회 논문으로 공저했습니다. SSE 알림은 팀 프로젝트와 별도로 개인 확장으로 구현했습니다.", en: "The project won the Silver Prize in the Capstone Design Competition (Advanced Division), and I co-authored a KIIT conference paper on it. The SSE alerts were built separately from the team project as an individual extension." } },
        ],
        results: [{ value: { ko: "5개 도메인", en: "5 domains" }, label: { ko: "API와 DB 모델 설계", en: "API and DB model design" } }, { value: { ko: "은상", en: "Silver" }, label: { ko: "캡스톤디자인 경진대회", en: "Capstone Design award" } }, { value: { ko: "학회 논문 공저", en: "Conference paper co-author" }, label: { ko: "한국정보기술학회", en: "KIIT" } }],
        evidenceNotes: [
          { showInPrint: false, label: { ko: "개인 구현 범위", en: "My implementation scope" }, copy: { ko: "차량 관련 5개 도메인 REST API와 MongoDB 모델, 사용자별 주간 평균 집계, 카카오 사용자 흐름을 구현했습니다.", en: "I implemented REST APIs and MongoDB models across five vehicle-related domains, per-user weekly aggregates, and Kakao user flows." } },
          { showInPrint: false, label: { ko: "팀 연동 기준", en: "Team integration" }, copy: { ko: "프론트와 장치가 맞춰 쓰도록 요청, 응답 스키마와 오류 응답을 OpenAPI 3.0 문서로 고정했습니다.", en: "Request/response schemas and error responses were fixed in OpenAPI 3.0 so frontend and device work could integrate against one contract." } },        ],
        evidenceButtonLabel: { ko: "구현 근거 보기", en: "View implementation notes" },
        evidenceTitle: { ko: "구현 범위와 연동 기준", en: "Implementation scope & integration" },
        links: [{ href: "https://github.com/jgjoe/gildonge-backend", label: { ko: "GitHub (백엔드)", en: "GitHub (backend)" } }, { href: "https://github.com/jgjoe/gildonge-alert", label: { ko: "GitHub (개인 확장)", en: "GitHub (individual extension)" } }],
        media: { type: "poster", src: "/gildongE_poster.jpg", alt: { ko: "길동이 프로젝트 포스터", en: "GildongE project poster" } },
      },
      {
        "anchor": "project-build-health",
        "architectureInDetails": false,
        "role": { "ko": "어떤 조회를 어떤 기준으로 측정할지 먼저 정하고 결과를 해석해 추가할 인덱스를 직접 골랐습니다.", "en": "I first decided which queries to measure and by what criteria, then interpreted the results and chose the indexes to add." },
        "title": "Build Your Health",
        "subtitle": {
          "ko": "웹 주문 시스템 재구축과 SQL 인덱스 검증",
          "en": "Order-system rebuild and SQL index validation"
        },
        "type": [
          {
            "ko": "개인",
            "en": "Personal"
          },
          {
            "ko": "측정 설계 / SQL 검증",
            "en": "Measurement design / SQL validation"
          }
        ],
        "period": {
          "ko": "2024 학부 과제 / 2026.10 개인 재구축",
          "en": "2024 course project / personal rebuild in Oct 2026"
        },
        "lead": {
          "ko": "JSP와 MySQL로 만든 웹 주문 시스템의 상품 조회, 로그인, 주문 흐름을 Spring Boot, MyBatis, Oracle로 재구축했습니다.",
          "en": "Rebuilt the product browsing, login, and ordering flows of a JSP/MySQL web order system with Spring Boot, MyBatis, and Oracle."
        },
        "tech": [
          "Java 17",
          "Spring Boot",
          "MyBatis",
          "Oracle",
          "SQL",
          "Docker"
        ],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "JSP와 MySQL로 만든 웹 주문 시스템을 Spring Boot, MyBatis, Oracle로 옮기면서, 조회에 필요한 인덱스를 같은 기준으로 비교해 정해야 했습니다.", en: "While rebuilding a JSP/MySQL order system on Spring Boot, MyBatis, and Oracle, I had to choose indexes by comparing candidates under the same criteria." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "측정할 쿼리 3종과 데이터 분포, 인덱스 후보, 반복 조건을 먼저 정하고 결과 검증과 실행계획 해석을 맡았습니다. 주문 상세 조회에는 외래 키 인덱스를, 회원별 조회 두 종류에는 함께 사용할 복합 인덱스를 선정했습니다.", en: "I defined three queries, the data distribution, index candidates, and repeat conditions, then validated results and interpreted execution plans. I selected a foreign-key index for order-detail queries and one composite index for both per-user queries." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "Oracle 생성 주문 60만 건 시험에서 상세 조회의 DB 블록 읽기는 6,285에서 14로 줄었고 선정한 인덱스 2개의 앱 반영을 확인했습니다. 후속 개선에서는 계획과 계정 잠금 정책을 승인했습니다. 주문 1만 건 회원의 내역 첫 페이지 DB 읽기는 8,113에서 55블록으로 줄었습니다.", en: "In an Oracle test with 600,000 generated orders, order-detail DB block reads fell from 6,285 to 14, and I verified integration of the two selected indexes. For the follow-up changes, I approved the plan and account-lockout policy. For a user with 10,000 orders, DB block reads on the first order-history page fell from 8,113 to 55." } },
        ],
        "results": [
          {
            "value": "6,285 → 14",
            "label": {
              "ko": "상세 조회 DB 블록 읽기(Oracle 생성 주문 60만 건 시험)",
              "en": "Order-detail DB block reads (Oracle test, 600K generated orders)"
            }
          },
          {
            "value": {
              "ko": "인덱스 2개 채택",
              "en": "2 indexes selected"
            },
            "label": {
              "ko": "두 조회를 함께 고려한 선정",
              "en": "Selected for both query needs"
            }
          },
          {
            "value": {
              "ko": "실행계획 비교",
              "en": "Plan comparison"
            },
            "label": {
              "ko": "외래 키와 복합 컬럼 순서 검증",
              "en": "Foreign key and composite-column order"
            }
          }
        ],
        "evidenceNotes": [
          {
            "label": {
              "ko": "측정 범위",
              "en": "Measurement scope"
            },
            "copy": {
              "ko": "Oracle에 생성한 주문 60만 건에서 지정 쿼리의 DB 블록 읽기와 실행계획을 같은 조건으로 비교해 인덱스를 선정했습니다.",
              "en": "I selected indexes by comparing DB block reads and execution plans for designated queries under the same conditions in an Oracle test with 600,000 generated orders."
            }
          },
          {
            "label": {
              "ko": "채택 근거",
              "en": "Selection evidence"
            },
            "copy": {
              "ko": "원본 측정 CSV, 35케이스의 실행계획과 인덱스 적용 마이그레이션을 공개 저장소에서 확인할 수 있습니다.",
              "en": "Raw measurement CSVs, execution plans for 35 cases, and the index migration are available in the public repository."
            }
          }
        ],
        "links": [
          {
            "href": "https://github.com/jgjoe/build-your-health",
            "label": "GitHub"
          },
          {
            "href": "https://github.com/jgjoe/build-your-health/blob/main/docs/db-tuning.md", "doc": true,
            "label": {
              "ko": "측정 설계와 선정 근거",
              "en": "Measurement and selection criteria"
            }
          },
          {
            "href": "https://github.com/jgjoe/build-your-health/tree/main/remake/perf/results", "doc": true,
            "label": {
              "ko": "측정 원자료와 실행계획",
              "en": "Raw results and query plans"
            }
          },
          {
            "href": "https://github.com/jgjoe/build-your-health/blob/main/docs/load-test-v3.md", "doc": true,
            "label": {
              "ko": "후속 부하 시험 결과",
              "en": "Follow-up load-test results"
            }
          }
        ],
        "architecture": {
          "variant": "decision",
          "title": {
            "ko": "측정으로 고른 조회 인덱스",
            "en": "Choosing query indexes from measurements"
          },
          "sources": [
            "Oracle",
            {
              "ko": "생성 주문 60만 건",
              "en": "600K generated orders"
            }
          ],
          "stages": [
            {
              "name": {
                "ko": "기준 고정",
                "en": "Fix criteria"
              },
              "copy": {
                "ko": "쿼리 3종 / 미적용 기준선 포함 5개 구성",
                "en": "3 queries / 5 configurations including a no-index baseline"
              }
            },
            {
              "name": {
                "ko": "계획과 DB 블록 읽기 비교",
                "en": "Compare plans and DB block reads"
              },
              "copy": {
                "ko": "외래 키와 컬럼 순서",
                "en": "Foreign key and column order"
              }
            }
          ],
          "decision": {
            "label": {
              "ko": "인덱스 선정",
              "en": "Index selection"
            },
            "result": {
              "ko": "두 조회에 쓸 복합 인덱스",
              "en": "Composite index for both queries"
            },
            "action": {
              "ko": "복합 인덱스 공동 활용",
              "en": "Reuse a composite index"
            }
          },
          "note": {
            "ko": "상세 조회의 외래 키 인덱스와 회원별 조회의 복합 인덱스 2개를 앱 스키마에 반영했습니다.",
            "en": "The order-detail foreign-key index and per-user composite index were integrated into the app schema."
          }
        },
        "media": {
          "type": "data-flow",
          "label": {
            "ko": "SQL 검증과 반영 흐름",
            "en": "SQL validation and integration"
          },
          "sources": [
            "Oracle",
            {
              "ko": "생성 주문 60만 건",
              "en": "600K generated orders"
            }
          ],
          "steps": [
            {
              "name": {
                "ko": "측정 범위 고정",
                "en": "Fix scope"
              },
              "copy": {
                "ko": "쿼리 3종 / 미적용 기준선 포함 5개 구성",
                "en": "3 queries / 5 configurations including a no-index baseline"
              }
            },
            {
              "name": {
                "ko": "실행계획과 DB 블록 읽기 비교",
                "en": "Compare plans and DB block reads"
              },
              "copy": {
                "ko": "외래 키, 컬럼 순서와 정렬 확인",
                "en": "Check foreign keys, column order, sorting"
              }
            },
            {
              "name": {
                "ko": "선정과 반영 확인",
                "en": "Select and verify integration"
              },
              "copy": {
                "ko": "인덱스 2개 선정과 반영",
                "en": "Select and integrate 2 indexes"
              }
            }
          ],
          "callouts": [
            {
              "value": "6,285 → 14",
              "label": {
                "ko": "상세 조회 DB 블록 읽기",
                "en": "Order-detail DB block reads"
              }
            },
            {
              "value": {
                "ko": "2개",
                "en": "2"
              },
              "label": {
                "ko": "채택 인덱스",
                "en": "Selected indexes"
              }
            },
            {
              "value": "Oracle",
              "label": {
                "ko": "로컬 생성 데이터 시험",
                "en": "Local generated-data test"
              }
            }
          ],
          "caption": {
            "ko": "측정 설계, 검증, 실행계획 해석과 인덱스 채택 결정을 맡았습니다.",
            "en": "My contribution is measurement design, validation, execution-plan interpretation, and index selection."
          }
        }
      },
      {
        anchor: "project-seoul-bike", title: "서울 공공자전거 데이터 파이프라인", titleLines: [{ ko: "서울 공공자전거", en: "Seoul Public Bike" }, { ko: "데이터 파이프라인", en: "Data Pipeline" }], type: [{ ko: "개인", en: "Personal" }, { ko: "데이터 품질 / 파이프라인", en: "Data quality / pipeline" }], period: { ko: "2026.09~2026.10", en: "2026.09 — 2026.10" },
        role: { ko: "처리 규칙과 검증 기준을 정하고, 바뀌거나 실패한 달만 다시 처리하며 기존 정상 결과를 보존하는지 검증했습니다.", en: "I set the processing rules and validation criteria, and verified that only changed or failed months are reprocessed while earlier valid results are preserved." }, visibleResultIndexes: [0, 2],
        subtitle: { ko: "대여 기록 정제와 월별 재처리 파이프라인", en: "Rental data cleaning and monthly reprocessing pipeline" },
        lead: { ko: "서울 공공자전거 대여 기록을 월 단위로 정제하고, 같은 이동인데 값이 서로 다른 기록 묶음은 따로 격리하는 배치 파이프라인입니다.", en: "A batch pipeline that cleans Seoul Public Bike rental records month by month and quarantines record groups for the same trip whose values disagree." },
        tech: ["Python", "DuckDB", "Parquet", "SQL", "Apache Airflow", "Google Cloud Storage", "BigQuery"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "서울시는 이미 올린 월별 파일을 나중에 고치기도 하고, 대여소 정보도 시점별로만 제공합니다. 그래서 무엇이 바뀌었는지 추적해 바뀐 달만 다시 처리해야 했습니다.", en: "Seoul sometimes corrects monthly files after publishing them, and station information is provided only as per-date snapshots. I therefore had to track what changed and reprocess only the changed months." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "파일 버전과 SHA-256 해시로 원천 변경을 추적했습니다. 같은 이동으로 묶인 기록의 값이 서로 다르면 하나를 임의로 고르지 않고 묶음 전체를 격리했습니다. 바뀐 달이나 실패한 달만 다시 처리하고 이전 검증 결과는 보존했으며, CLI와 Airflow가 같은 Python 처리 로직을 호출하도록 구성했습니다.", en: "I tracked source changes with file versions and SHA-256 hashes. When records grouped as the same trip had conflicting values, I quarantined the entire group rather than choosing one arbitrarily. I reprocessed only changed or failed months, preserved previously validated results, and configured the CLI and Airflow to call the same Python processing logic." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "2020-01~2026-06의 78개월 약 2억 4천만 행을 정제하고 정상 데이터와 격리 데이터의 합계를 원본 건수와 대조했습니다. 대표 2개월은 Google Cloud Storage에 보관하고 BigQuery에 적재해 로컬 건수와 집계가 일치함을 확인했습니다. 같은 입력은 중복 적재하지 않는지 확인했습니다. 별도 시험 데이터로 변경된 달의 재적재를 시험하고, 적재 실패나 이력 기록 중단 후 복구도 검증했습니다.", en: "I cleaned about 240 million rows across 78 months from January 2020 to June 2026 and reconciled accepted plus quarantined rows with the source count. Outputs for two representative months were stored in Google Cloud Storage and loaded into BigQuery, where counts and aggregates matched local results. I verified that identical inputs were not loaded again. Using separate test data, I tested reloads for changed months and recovery after load failures or interruptions to load-history recording." } },
        ],
        results: [{ value: { ko: "2억 4천만 건", en: "240M records" }, label: { ko: "78개월 원본부터 정제까지 처리", en: "processed from source to cleaned data across 78 months" } }, { value: "78 / 78", label: { ko: "정제 완료 월", en: "months cleaned" } }, { value: { ko: "건수 합 일치", en: "Row counts reconcile" }, label: { ko: "원본 = 정상 기록 + 격리 기록", en: "source = trusted + quarantined" } }],
        evidenceNotes: [
          { label: { ko: "전 기간 확인", en: "Full-period check" }, copy: { ko: "2020-01~2026-06의 78개월 2억 4,135만 행을 정제했고, 격리 기록 29,666행을 분석 데이터와 분리했습니다.", en: "Across 78 months from 2020-01 to 2026-06, about 241.35M rows were cleaned, and 29,666 rows were quarantined and excluded from analytical data." } },
          { label: { ko: "재처리 기준", en: "Reprocessing rule" }, copy: { ko: "원천 파일의 버전과 SHA-256을 기록해 변경된 월만 다시 처리하도록 구성했습니다.", en: "Source versions and SHA-256 hashes identify changed months so only affected periods are rebuilt." } },        ],
        links: [{ href: "https://github.com/jgjoe/seoul-bike-data-pipeline", label: "GitHub" }, { href: "https://github.com/jgjoe/seoul-bike-data-pipeline/blob/main/docs/production-validation.md", doc: true, label: { ko: "실데이터 규모 검증", en: "Real-data scale validation" } }, { href: "https://github.com/jgjoe/seoul-bike-data-pipeline/blob/main/docs/prd-v1.0-final.md", doc: true, label: { ko: "설계 기준 문서", en: "Design specification" } }],
        media: {
          type: "data-flow",
          label: { ko: "서울 공공자전거 데이터 신뢰성 흐름", en: "Seoul Public Bike data reliability flow" },
          sources: [{ ko: "대여이력 원천", en: "Rental history" }, { ko: "대여소 정보", en: "Station data" }],
          steps: [
            { name: { ko: "원천 보관", en: "Raw source" }, copy: { ko: "파일 버전과 SHA-256 기록", en: "file version and SHA-256" } },
            { name: { ko: "정리와 품질 검사", en: "Clean & quality check" }, copy: { ko: "문제 행과 충돌 묶음 격리", en: "quarantine invalid rows and conflicting groups" } },
            { name: { ko: "신뢰 데이터 저장", en: "Trusted warehouse" }, copy: { ko: "분석 가능한 데이터만 저장", en: "store validated analytical data" } },
            { name: { ko: "분석용 집계", en: "Analytical marts" }, copy: { ko: "이동 구간, 대여소 일별, 품질", en: "OD, station/day, quality" } },
          ],
          callouts: [
            { value: "SHA-256", label: { ko: "원천 변경 추적", en: "source change tracking" } },
            { value: { ko: "검증된 버전만", en: "Validated only" }, label: { ko: "분석 데이터로 전달", en: "published for analysis" } },
            { value: "Airflow", label: { ko: "과거 기간 재처리와 재시도 자동화", en: "backfill and retry automation" } },
          ],
          caption: { ko: "원천 버전과 품질 검사를 기준으로 검증된 데이터만 신뢰 데이터와 분석용 집계로 전달합니다.", en: "Source versions and quality checks gate what moves into trusted data and analytical marts." },
        },
      },
      {
        anchor: "project-traceverity", title: "TraceVerity", titleLines: ["TraceVerity"], subtitle: { ko: "업무 이벤트 로그에서 처리 시간과 재작업을 조회하는 분석 도구", en: "Analyze processing times and rework in business event logs" }, type: [{ ko: "개인", en: "Personal" }, { ko: "프로세스 분석", en: "Process Intelligence" }], period: { ko: "2026.09~2026.10", en: "2026.09 — 2026.10" },
        role: { ko: "계산 기준과 AI 조회 범위를 정하고 성능 개선의 사전 기준을 세웠습니다. AI 코딩 도구의 구현 제안을 검토하고 측정과 검증 결과를 채택했습니다.", en: "I set calculation and AI-access requirements and pre-registered the performance criteria. AI coding tools implemented the changes; I reviewed the proposals and accepted the measured and verified results." }, visibleResultIndexes: [1, 2],
        lead: { ko: "CSV와 XES 업무 로그를 가져와 처리 순서, 소요 시간과 재작업을 조회합니다. 브라우저에서 필드를 매핑하고 검증한 뒤 분석 화면으로 이어집니다.", en: "Import CSV or XES business event logs to explore activity sequences, processing times, and rework. Map fields and validate the log in the browser before opening the analysis view." },
        tech: ["Python", "DuckDB", "FastAPI", "React", "Power BI", "MCP", "PM4Py"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "웹 화면과 AI가 지표를 따로 계산하면 같은 데이터에서도 결과가 달라질 수 있습니다. 그래서 계산 기준을 한 곳에 두는 구조부터 만들었습니다.", en: "When the web view and AI compute metrics separately, the same data can yield different numbers, so I started with one place that owns the calculation." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "업로드한 업무 기록의 형식을 검사하고 핵심 지표를 하나의 계산 모듈에서 만들어, 웹과 AI 질의응답이 같은 결과를 읽게 했습니다. AI에는 정해진 계산 결과를 조회하는 읽기 전용 도구만 제공하고, SQL 실행이나 파일 및 네트워크 접근, 쓰기 권한은 열지 않았습니다. 로그 활동명에 심은 지시문을 연결 방식별 36회 노출한 별도 시험에서 금지 동작 0건을 확인했습니다.", en: "I validated the format of uploaded work records and calculated core metrics in one module, so the web and the AI Q&A read the same results. The AI gets only read-only tools for looking up computed results, with no SQL execution, file or network access, or write access. In separate tests, instructions embedded in activity names were exposed in 36 runs per route; zero forbidden actions were observed." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "실제 로그 2종의 처리 경로, 단계 간 이동, 소요 시간과 재작업을 PM4Py로 독립 대조해 정의를 맞춘 뒤 불일치 0을 확인했습니다. 로컬 LLM Qwen3-8B의 도구 안내 개선안을 검토해 채택했습니다. 같은 질문 12개를 실행 조건 3가지로 시험해 답의 수치와 근거 기록 번호를 대조했습니다. 두 연결 방식의 정답 수는 각각 36회 중 24회였고, 수정 후에는 35회와 36회였습니다.", en: "After aligning definitions, an independent PM4Py calculation found zero mismatches in paths, transitions, durations, and rework on two real-world logs. I reviewed and adopted tool-guidance changes for the local Qwen3-8B model. I tested the same 12 questions under three run conditions and checked the numbers and evidence record IDs in each answer. Each connection method started at 24 correct answers out of 36 runs; after the change, the counts were 35 and 36, respectively." } },
          { label: { ko: "측정한 성능", en: "Measured performance" }, copy: { ko: "200만 이벤트 실험 데이터를 같은 PC의 새 프로세스에서 예열 1회 후 5회 측정해 불러오기 중앙값이 24.1초에서 14.8초로 줄어든 것을 확인했습니다. 집계가 가장 느릴 것이라는 예상과 달리 불러오기가 가장 느려 원본을 두 번 읽는 작업과 반복되는 시각 변환을 줄이는 수정안을 채택했습니다.", en: "On a 2-million-event synthetic log, the median import time fell from 24.1 s to 14.8 s on the same workstation, using a fresh process per run, one warmup and five measured runs. I had predicted aggregation would be slowest; measurements instead identified import. I adopted changes that removed duplicate source scans and repeated timestamp-conversion work." } },
        ],
        results: [{ value: { ko: "공개 실데이터 2종", en: "2 public datasets" }, label: { ko: "같은 계산 기준으로 분석", en: "analyzed with one calculation rule" } }, { value: { ko: "독립 대조 불일치 0", en: "Zero cross-check mismatches" }, label: { ko: "실제 로그 2종의 지표를 PM4Py로 독립 계산해 비교", en: "Metrics independently recalculated with PM4Py on two real-world logs" } }, { value: { ko: "정답 24/36 → 35/36과 36/36", en: "24/36 → 35/36 and 36/36 correct" }, label: { ko: "고정 질문 12개, 실행 조건 3가지, 두 연결 방식 각 36회", en: "12 fixed questions, 3 run conditions, 36 runs per connection method" } }],
        evidenceNotes: [
          { label: { ko: "분석 결과", en: "Analysis finding" }, copy: { ko: "Help Desk 로그에서 상위 3개 활동이 재작업 이벤트 1,905개 중 1,632개인 85.67%를 차지했습니다. 기록상 소요 시간이 긴 경로도 찾아 추가 확인할 업무 가설을 정리했습니다.", en: "Three activities accounted for 1,632 of 1,905 rework events (85.67%) in the Help Desk log. I also identified paths associated with longer recorded case durations and documented hypotheses for further investigation." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "성능 수정 후 실제 로그 2종과 실험 로그의 가져오기 보고서 및 정해진 입력의 조회 도구 응답이 수정 전과 같은지 확인했습니다. 원본 로그와 평가용 라이브러리가 있는 환경에서 전체 회귀 시험 235건과 웹 빌드, 브라우저 시험 2건을 통과했습니다.", en: "After the performance change, the import reports and query-tool responses for fixed inputs matched the pre-change outputs on both real logs and the synthetic logs. With the original datasets and evaluation dependencies installed, all 235 regression tests, the web build and both browser tests passed." } },        ],
        architecture: {
          variant: "hub",
          title: { ko: "하나의 공통 계산 기준", en: "One shared calculation path" },
          sources: ["BPI Challenge 2012 XES", "Help Desk CSV", { ko: "로컬 CSV/XES 가져오기", en: "Local CSV/XES import" }],
          hub: { name: "Python / DuckDB Core", copy: { ko: "핵심 프로세스 지표를 한 곳에서 계산", en: "calculates core process metrics once" } },
          spokes: [
            { name: { ko: "브라우저 가져오기", en: "Browser import" }, copy: { ko: "필드 매핑과 형식 검증", en: "field mapping and validation" } },
            { name: "FastAPI / React", copy: { ko: "같은 결과를 웹에 표시", en: "shows the same results on the web" } },
            { name: "Agent / MCP", copy: { ko: "검증된 분석 결과만 사용", en: "uses validated analysis results" } },
            { name: "BPIC12 Power BI", copy: { ko: "별도 분석 화면", en: "separate analysis view" } },
          ],
          note: { ko: "핵심 계산은 Core가 담당하고 웹과 AI는 검증된 결과를 소비합니다.", en: "The Core owns metric calculation; the web and AI layers consume the verified results." },
        },
        links: [{ href: "https://github.com/jgjoe/traceverity", label: "GitHub" }, { href: "https://github.com/jgjoe/traceverity/blob/main/evidence/public-verification-summary.json", doc: true, label: { ko: "검증 요약", en: "Verification summary" } }, { href: "https://github.com/jgjoe/traceverity/blob/main/docs/ARCHITECTURE.md", doc: true, label: { ko: "아키텍처", en: "Architecture" } }, { href: "https://github.com/jgjoe/traceverity/blob/main/docs/REPRODUCTION.md", doc: true, label: { ko: "재현 가이드", en: "Reproduction guide" } }, { href: "https://github.com/jgjoe/traceverity/blob/ecb7504/docs/V2-VERIFICATION.md", doc: true, label: { ko: "지표와 AI 검증", en: "Metrics & AI verification" } }, { href: "https://github.com/jgjoe/traceverity/blob/ecb7504/docs/HELPDESK-ANALYSIS.md", doc: true, label: { ko: "분석 리포트", en: "Analysis report" } }, { href: "https://github.com/jgjoe/traceverity/pull/4", doc: true, label: { ko: "성능 검증 PR #4", en: "Performance PR #4" } }, { href: "https://github.com/jgjoe/traceverity/blob/98c78981c2d22e49e7fbe3e9fc82646bb0a811a1/evidence/performance/README.md", doc: true, label: { ko: "성능 측정", en: "Performance measurements" } }],
        media: { type: "browser-gallery", host: "TraceVerity / local", label: { ko: "TraceVerity 대표 화면 선택", en: "Choose a TraceVerity view" }, images: [
          { src: "/traceverity-summary.jpg", tab: { ko: "핵심 지표", en: "Core metrics" }, alt: { ko: "TraceVerity BPI Challenge 2012 데이터의 핵심 분석 지표", en: "TraceVerity core metrics for BPI Challenge 2012" }, caption: { ko: "BPI Challenge 2012의 COMPLETE 관점에서 건수, 소요 시간과 재작업을 계산한 실제 로컬 화면입니다.", en: "Local analysis of BPI Challenge 2012 in the COMPLETE perspective: counts, cycle times, and rework." } },
          { src: "/traceverity-variants.jpg", tab: { ko: "프로세스 흐름", en: "Process flow" }, alt: { ko: "TraceVerity 주요 업무 흐름별 건수와 비율", en: "TraceVerity case counts and shares by process variant" }, caption: { ko: "같은 데이터에서 업무 단계의 순서별 건수와 비율을 비교합니다.", en: "Compare case counts and shares for different activity sequences in the same dataset." } },
          { src: "/traceverity-activity.jpg", tab: { ko: "활동 / 재작업", en: "Activity & rework" }, alt: { ko: "TraceVerity 활동별 이벤트, 케이스와 재작업 건수", en: "TraceVerity event, case, and rework counts by activity" }, caption: { ko: "활동별 발생 건수와 재작업 건수를 분리해 확인합니다.", en: "View event counts and rework counts separately for each activity." } },
        ] },
      },
      {
        anchor: "project-benefit-compass", title: "혜택나침반", titleLines: [{ ko: "혜택나침반", en: "BenefitCompass" }], type: [{ ko: "개인", en: "Personal" }, { ko: "RAG 시스템", en: "RAG system" }], period: "2026.06 — 2026.09",
        role: { ko: "두 사이트의 정책 통합과 검색 개선안 비교, 채택 판단과 단계 배포를 직접 진행했습니다.", en: "I unified policies from two sites, compared and decided which search improvements to adopt, and ran the staged rollout." },
        subtitle: { ko: "정부 정책 통합 검색과 질의응답 서비스", en: "Unified government policy search and Q&A" },
        lead: { ko: "온통청년과 정부24의 공식 정책을 한 번에 검색하고, 찾은 정책을 근거로 AI가 답합니다. 공개 데모로 배포했습니다.", en: "Searches official policies from Youth Policy and Gov24 in one place and answers from the policies it finds (RAG). Deployed as a public demo." },
        tech: ["Spring Boot", "FastAPI", "pgvector", "React", "E5", "Prometheus"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "1만 개가 넘는 정책이 두 사이트에 흩어져 있고, 키워드 검색만으로는 자신에게 맞는 제도를 찾기 어려웠습니다.", en: "More than 10,000 policies were spread across two sites, and keyword search made relevant programs hard to find." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "두 사이트의 정책 13,589개를 통합해 17,609개 검색 단위로 만들었습니다. 출처별 평가에서 상위 10개 결과의 정답 포함률을 높이는 키워드 보정을 적용했습니다. 뜻으로 찾는 검색에 키워드 일치 점수를 더하는 방식입니다.", en: "I unified 13,589 policies from two sites into 17,609 search chunks. In evaluations for each source, I improved top-10 recall by adding a keyword-match boost to semantic search." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "상위 10개 안 정답 포함률이 문서 기반 평가셋인 청년정책 60문항에서는 46.7%에서 51.7%로, 정부24 21문항에서는 61.9%에서 76.2%로 올랐습니다. 후보 검증 뒤 API를 요청 10%에서 100%까지 단계적으로 전환했고, 요청 ID와 메트릭으로 API, 검색, DB 구간을 나눠 관측했습니다.", en: "The share of queries with the correct policy in the top 10 rose from 46.7% to 51.7% on 60 Youth policy queries from a document-based evaluation set, and from 61.9% to 76.2% on 21 Gov24 queries. After validating the candidate, I rolled the API out from 10% to 100% of requests and used request IDs and metrics to observe API, retrieval, and DB segments separately." } },
        ],
        results: [{ value: "13,589", label: { ko: "통합한 공식 정책", en: "official policies unified" } }, { value: { ko: "정답 검색률 상승", en: "Higher hit rate" }, label: { ko: "상위 10개 안 정답 포함률 청년 60문항 46.7%→51.7%, 정부24 21문항 61.9%→76.2%", en: "correct policy in the top 10: Youth 60 queries 46.7%→51.7%, Gov24 21 queries 61.9%→76.2%" } }, { value: "10% → 100%", label: { ko: "새 검색을 요청 일부부터 단계적으로 전환", en: "new search rolled out gradually from a share of requests" } }],
        evidenceNotes: [
          { label: { ko: "지표 뜻", en: "Metric meaning" }, copy: { ko: "Recall@10은 각 질문의 정답 정책이 상위 10개 검색 결과 안에 포함된 비율입니다.", en: "Recall@10 is the share of queries whose labeled gold policy appears within the top 10 search results." } },
          { label: { ko: "비교 조건", en: "Comparison" }, copy: { ko: "문서 기반 평가셋의 Youth 60문항과 Gov24 21문항에서 실서비스와 같은 검색 조건으로 어휘 보정 전후와 리랭커 후보를 비교했습니다.", en: "On the document-based evaluation set (60 Youth queries and 21 Gov24 queries), lexical-bias and reranker candidates were compared under the same retrieval conditions as the live service." } },
          { label: { ko: "채택한 변경", en: "Adopted change" }, copy: { ko: "최소 어휘 보정은 Recall@10을 Youth 46.7→51.7%, Gov24 61.9→76.2%로 높여 유지했습니다.", en: "The minimal lexical bias improved Recall@10 from 46.7→51.7% on Youth and 61.9→76.2% on Gov24, so it was kept." } },
          { label: { ko: "선정 기준", en: "Selection criteria" }, copy: { ko: "출처별 평가 문항을 고정해 검색 방식을 비교하고 상위 10개 결과의 정답 포함률을 높인 키워드 보정을 선정했습니다.", en: "Using a fixed query set for each source, I compared search variants and selected keyword boosting that improved top-10 recall on both." } },
        ],
        architecture: {
          variant: "decision",
          title: { ko: "검색 품질을 확인하고 더 나은 경로만 배포", en: "Measure retrieval quality before shipping changes" },
          sources: [{ ko: "온통청년", en: "Youth policies" }, { ko: "정부24", en: "Gov24" }],
          stages: [
            { name: { ko: "정책 정리", en: "Prepare policies" }, copy: { ko: "13,589개 정책 / 17,609개 검색 단위", en: "13,589 policies / 17,609 search chunks" } },
            { name: { ko: "검색 품질 평가", en: "Evaluate retrieval" }, copy: { ko: "같은 조건에서 결과 비교", en: "compare under the same conditions" } },
            { name: { ko: "근거 기반 답변", en: "Grounded answer" }, copy: { ko: "검색된 정책만 근거로 응답", en: "answer from retrieved policies only" } },
          ],
          decision: {
            label: { ko: "검색 방식 선정", en: "Search method selection" },
            result: { ko: "검증 결과: 뜻 기반 검색에 어휘 보정을 더한 방식 유지", en: "Result: keep meaning-based search with lexical bias" },
            action: { ko: "키워드 보정 적용", en: "Apply keyword boosting" },
          },
          note: { ko: "같은 평가 문항으로 어휘 보정 전후와 리랭커 후보를 비교", en: "Lexical bias and reranker candidates compared on the same evaluation queries" },
        },
        links: [{ href: "https://jgjoe.github.io/benefit-compass", label: { ko: "데모 보기", en: "View demo" } }, { href: "https://github.com/jgjoe/benefit-compass", label: "GitHub" }, { href: "https://github.com/jgjoe/benefit-compass/tree/main/eval", doc: true, label: { ko: "평가셋과 측정 스크립트", en: "Evaluation set & scripts" } }, { href: "https://github.com/jgjoe/benefit-compass/blob/main/docs/operations/PRODUCTION_LAB_2_2026-07-21.md", doc: true, label: { ko: "운영 실험 기록", en: "Production lab record" } }, { href: "https://github.com/jgjoe/benefit-compass/blob/main/docs/operations/RUNBOOK.md", doc: true, label: { ko: "운영 런북", en: "Runbook" } }],
        media: { type: "browser-gallery", host: "jgjoe.github.io/benefit-compass", label: { ko: "혜택나침반 검색 화면 선택", en: "Choose a BenefitCompass search view" }, images: [
          { src: "/benefit-compass-answer.jpg", tab: { ko: "검색과 답변", en: "Query & answer" }, alt: { ko: "혜택나침반의 월세 지원 검색어와 답변", en: "BenefitCompass rental-support query and answer" }, caption: { ko: "배포된 서비스에 ‘월세 지원’을 검색한 화면입니다. (2026.10.15)", en: "A rental-support query on the deployed service, captured on Oct 15, 2026." } },
          { src: "/benefit-compass-source.jpg", tab: { ko: "답변의 근거", en: "Supporting source" }, alt: { ko: "혜택나침반 답변과 출처, 지원 조건, 공식 안내 링크", en: "BenefitCompass answer, source, eligibility details, and official link" }, caption: { ko: "답변 아래에서 정책의 출처, 지원 조건과 공식 안내 링크를 확인합니다.", en: "The policy card below the answer shows its source, eligibility details, and official link." } },
        ] },
      },
      {
        anchor: "project-today-fresh", title: "오늘도 신선", titleLines: [{ ko: "오늘도 신선", en: "Fridge D-Day" }], type: [{ ko: "학부 과제 후 개인", en: "Course project continued independently" }, { ko: "Android 공개 출시", en: "Android release" }], period: { ko: "2025.09~2026.10", en: "2025.09 — 2026.10" },
        role: { ko: "기획과 구현안 검토, 출시 검증을 맡고 사용자 관찰을 바탕으로 개선안을 채택했습니다.", en: "I handled planning, implementation review, and release validation, and adopted improvements based on user observations." }, visibleResultIndexes: [1, 2],
        subtitle: { ko: "식품 유통기한 관리 Android 앱", en: "Food expiry tracking Android app" },
        lead: { ko: "유통기한을 촬영하거나 입력해 식품을 등록하고 D-Day, 알림, 위젯으로 관리합니다. 사진은 서버로 보내지 않고 기기 안에서 글자를 인식합니다.", en: "Register foods by photographing or typing expiry dates, then manage them with D-Day status, notifications, and a widget. Text recognition runs on the device without sending photos to a server." },
        tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "ML Kit OCR", "MVVM"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "유통기한을 직접 입력하는 번거로움과 식품 기록을 외부로 보내는 부담을 줄이고자 했습니다.", en: "I wanted to reduce the hassle of typing expiry dates by hand and the burden of sending food records off the device." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "기기 내 문자인식과 알림, 위젯, 백업 및 복원 기능의 요구사항을 정하고 동작을 검증했습니다. 저장 전 사용자 확인 단계를 넣어 재출시했고 이후 Galaxy A32 실기기에서 회귀 검사를 수행했습니다. 사진과 식품 기록은 기기에 저장하며 앱 자체에는 인터넷 권한이 없습니다.", en: "I defined requirements for on-device text recognition, notifications, widgets, and backup and restore, and verified these features. I re-released with a confirm-before-save step and then ran regression checks on a physical Galaxy A32. Photos and food records stay on the device, and the app itself has no internet permission." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "ONEstore와 Google Play에 정식 출시했습니다. 재출시 뒤 4명이 각 8개 과업을 수행한 32건의 관찰로 소비 완료 복구와 직접 입력 흐름을 개선했습니다. 해당 불편을 겪은 2명이 수정한 흐름 4개를 다시 수행한 8건의 관찰에서 모두 과업을 완료했습니다.", en: "The app is officially released on ONEstore and Google Play. After the re-release, I improved consumed-item restore and manual-entry flows through 32 observations with 4 users performing 8 tasks each. The 2 users affected repeated the 4 corrected flows and completed all 8 task observations." } },
        ],
        results: [{ value: "ONEstore", label: { ko: "공개 배포", en: "public release" } }, { value: "Google Play", label: { ko: "정식 출시", en: "production release" } }, { value: { ko: "사용자 관찰 후 개선", en: "Improved after user observation" }, label: { ko: "4명 관찰로 찾은 불편을 고치고 재확인", en: "Fixed issues found with 4 users, then re-checked" } }],
        evidenceNotes: [
          { label: { ko: "OCR 확인", en: "OCR check" }, copy: { ko: "서로 다른 한국 식품 라벨 55장을 고정 회귀셋으로 사용해 OCR 변경 전후의 퇴행을 확인했습니다.", en: "A fixed regression set of 55 different Korean food labels was used to check OCR changes for regressions." } },
          { label: { ko: "출시 판단", en: "Release decision" }, copy: { ko: "저장 전 사용자 확인 단계를 추가하고 검증한 뒤 재출시했습니다.", en: "I added and verified a confirm-before-save step, then re-released." } },
          { label: { ko: "사용성 재확인", en: "Usability retest" }, copy: { ko: "초기 4명이 각 8과업을 수행한 32건의 관찰 뒤, 결함을 겪은 2명이 수정한 흐름 4개를 다시 수행했고 이 8건의 관찰에서 모두 과업을 완료했습니다.", en: "After 32 initial observations (4 users × 8 tasks), the 2 users who hit defects redid the 4 corrected flows, and all 8 of those observations ended in completed tasks." } },
        ],
        links: [{ href: "https://m.onestore.co.kr/v2/ko-kr/app/0001003331", label: { ko: "ONEstore에서 보기", en: "View on ONEstore" } }, { href: "https://play.google.com/store/apps/details?id=app.fridgedday", label: { ko: "Google Play에서 보기", en: "View on Google Play" } }, { href: "https://github.com/jgjoe/fridge-d-day", label: "GitHub" }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/QA_RELEASE_RECORD.md", doc: true, label: { ko: "QA와 릴리스 기록", en: "QA & release record" } }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/docs/qa/OCR_BENCHMARK.md", doc: true, label: { ko: "OCR 벤치마크", en: "OCR benchmark" } }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/.github/workflows/android-ci.yml", doc: true, label: { ko: "CI 설정", en: "CI workflow" } }],
        media: { type: "gallery", label: { ko: "오늘도 신선 대표 화면", en: "Fridge D-Day highlights" }, images: [
          { src: "/today-fresh-1.png", alt: { ko: "오늘도 신선 Today 화면", en: "Fridge D-Day Today screen" } },
          { src: "/today-fresh-2.png", alt: { ko: "오늘도 신선 Scan 화면", en: "Fridge D-Day Scan screen" } },
          { src: "/today-fresh-3.png", alt: { ko: "오늘도 신선 Record 화면", en: "Fridge D-Day Record screen" } },
        ] },
      },
    ],
    posterOpen: { ko: "프로젝트 포스터 보기", en: "View project poster" },
    posterClose: { ko: "프로젝트 포스터 닫기", en: "Hide project poster" },
    moreEyebrow: { ko: "MORE WORK", en: "MORE WORK" }, moreTitle: { ko: "추가 프로젝트", en: "Additional projects" },
    more: [
      { anchor: "project-ssodam", title: { ko: "쓰담", en: "SSeudam" }, type: ["YOLOv8", "Android", "Robot"], link: null, copy: { ko: "11인 팀에서 공개 학습 자료와 국내 생활폐기물 자료 일부를 함께 쓰자고 제안하고 정확도와 일정을 함께 검토해 합의했습니다. 대화형 쓰레기통 로봇의 객체 탐지와 로봇 연동을 담당했으며 공동 논문은 대학생 논문경진대회 우수논문상을 받았습니다.", en: "In a team of 11, I proposed combining public training data with a subset of a Korean household-waste dataset and reached agreement after reviewing accuracy and timing together. I handled object detection and integration for the interactive trash-bin robot. Our co-authored paper received an Outstanding Paper Award at a student paper competition." }, media: { src: "/ssodam_poster.jpg", alt: { ko: "쓰담 프로젝트 포스터", en: "SSeudam project poster" } } },
      { title: "Movie Diary", type: ["React", "FastAPI", "Cloud Run"], link: "https://github.com/jgjoe/movie-diary", copy: { ko: "일기에서 감정을 읽어 영화를 추천하는 서비스로, 백엔드는 Cloud Run에 배포하고 프론트엔드는 GitHub Actions로 자동 배포했습니다.", en: "I built an emotion-based film recommendation service with third-party APIs, deployed the backend on Cloud Run, and automated frontend deployment with GitHub Actions." } },
      { title: { ko: "Kubernetes 운영 실습", en: "Kubernetes Operations Lab" }, type: ["Kubernetes", "kind", "Docker"], link: "https://github.com/jgjoe/kubernetes-ops-lab", copy: { ko: "Kubernetes에서 Pod 장애와 잘못된 배포를 직접 재현하고, 상태 변화와 복구 과정을 확인한 운영 실습입니다.", en: "A local Kubernetes lab that reproduces pod failures and failed rollouts, then verifies state transitions and recovery." } },
    ],
  },
  credentials: {
    eyebrow: { ko: "CREDENTIALS", en: "CREDENTIALS" }, title: { ko: "학력과 자격, 연구 및 수상", en: "Education, certifications, research & awards" }, skillsTitle: { ko: "핵심 기술", en: "CORE STACK" },
    groups: [
      { title: { ko: "학력", en: "Education" }, items: [{ ko: "경기대학교 컴퓨터공학부 졸업", en: "B.S. in Computer Engineering, Kyonggi University" }, { ko: "2020.03 — 2026.02 / 학점 4.04/4.5", en: "Mar. 2020 — Feb. 2026 / GPA 4.04/4.5" }] },
      { title: { ko: "자격증", en: "Certificates" }, items: [{ ko: "정보처리기사", en: "Engineer Information Processing" }, "SQLD", "ADsP", "CSTS Foundation Level"] },
      { title: { ko: "연구와 수상", en: "Research & awards" }, items: [{ ko: "한국정보기술학회 논문 2편 공저", en: "Co-author of 2 KIIT conference papers" }, { ko: "2025 산학협력 캡스톤디자인 경진대회 심화캡스톤디자인 부문 은상", en: "2025 Industry-Academia Capstone Design Competition, Advanced Division Silver Prize" }, { ko: "2024 한국정보기술학회 대학생 논문경진대회 우수논문상", en: "2024 KIIT Student Paper Competition, Outstanding Paper Award" }] },
      { title: { ko: "오픈소스", en: "Open source" }, link: { href: "https://github.com/pydantic/logfire/pull/2260", label: { ko: "병합된 변경 보기", en: "View merged change" } }, items: [{ ko: "pydantic/logfire PR #2260 병합(2026.10): CLI 인증이 환경변수로 지정한 서버 주소를 쓰도록 수정하고 테스트와 문서를 추가", en: "pydantic/logfire PR #2260 merged (Oct 2026): CLI auth now uses the server URL set by environment variable; added tests and docs" }] },
    ],
  },
  skills: [
    { title: { ko: "언어와 애플리케이션 개발", en: "Languages & Application Development" }, items: ["Java", "Kotlin", "Python", "TypeScript", "SQL", "Spring Boot", "MyBatis", "FastAPI", "REST API", "OpenAPI", "Android (Jetpack Compose)"] },
    { title: { ko: "데이터 시스템", en: "Data & Systems" }, items: ["Oracle", "PostgreSQL / pgvector", "MySQL", "MongoDB", "DuckDB", "Parquet", "Apache Airflow", "BigQuery"] },
    { title: { ko: "AI 응용", en: "AI Applications" }, items: ["RAG", "Embedding · Vector Search (pgvector)", "Retrieval Evaluation (Recall · MRR)", "MCP", "LLM Agent Tool Restriction"] },
    { title: { ko: "품질과 배포", en: "Quality & Delivery" }, items: ["Pytest", "Playwright", "JUnit", "GitHub Actions", "Docker", "Prometheus", "Google Cloud Run"] },
  ],
  contact: { eyebrow: { ko: "LET'S TALK", en: "LET'S TALK" }, title: { ko: "검증된 결과물을 함께 만듭니다", en: "Let's build verified work together" }, copy: { ko: "프로젝트나 포지션 제안은 이메일로 연락해 주세요.", en: "For project or role opportunities, feel free to reach out by email." }, email: "jigwan.joe@gmail.com", github: "https://github.com/jgjoe" },
};

const featuredOrder = ["Build Your Health", "서울 공공자전거 데이터 파이프라인", "오늘도 신선", "혜택나침반", "TraceVerity", "길동이 AI 차량 어시스턴트"];
portfolio.projects.featured.sort((a, b) => featuredOrder.indexOf(a.title) - featuredOrder.indexOf(b.title));
