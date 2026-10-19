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
    title: { ko: "업무 시스템과 데이터·AI 서비스를\n만드는 백엔드 개발자", en: "A backend developer building business systems\nand data & AI services" },
    summary: { ko: "앱 출시와 SQL 조회 검증, 대규모 데이터 정제 경험이 있습니다. AI 코딩 도구를 활용하며 요구사항과 검증 기준을 정하고 결과를 확인합니다.", en: "My experience includes releasing an app, validating SQL query improvements, and cleaning large datasets. I use AI coding tools, define requirements and validation criteria, and verify results." },
    profileRole: "Backend Engineer · Data & AI",
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
        "kicker": { "ko": "데이터", "en": "DATA" },
        "value": { "ko": "대용량 데이터를 정제하고 DB 조회를 개선합니다", "en": "I clean large datasets and reduce DB query reads." },
        "label": {
          "ko": "78개월 공공자전거 기록 2억 4천만 건을 정제하고, 정상 데이터와 격리 데이터의 건수 합이 원본 건수와 맞는지 대조했습니다.",
          "en": "I cleaned 240M public bike records across 78 months and reconciled that accepted plus quarantined row counts equal the source count."
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
        "kicker": { "ko": "AI 응용", "en": "AI APPLICATIONS" },
        "value": { "ko": "AI 기능을 서비스에 연결하고 결과를 점검합니다", "en": "I connect AI features to services and check the results" },
        "label": {
          "ko": "공식 정책 13,589개를 통합하고 출처별 평가에서 상위 10개 결과의 정답 포함률을 높인 키워드 보정을 적용했습니다.",
          "en": "I unified 13,589 official policies and applied keyword boosting that improved top-10 recall in evaluations for each source."
        },
        "stats": [
          { "ko": "혜택나침반: 상위 10개 안 정답 포함률 청년 60문항 46.7% → 51.7%", "en": "BenefitCompass: correct policy in top 10, Youth 60 queries, 46.7% → 51.7%" },
          { "ko": "TraceVerity: 공개 데이터 2종에서 Direct Agent와 MCP Agent의 답 22건을 비교해 불일치 0건 확인", "en": "TraceVerity: Compared 22 answers from Direct Agent and MCP Agent across 2 public datasets; no mismatches." }
        ],
        "projects": [
          { "name": { "ko": "혜택나침반", "en": "BenefitCompass" }, "target": "project-benefit-compass", "aria": { "ko": "혜택나침반 프로젝트로 이동", "en": "Jump to the BenefitCompass project" } },
          { "name": "TraceVerity", "target": "project-traceverity", "aria": { "ko": "TraceVerity 프로젝트로 이동", "en": "Jump to the TraceVerity project" } }
        ]
      },
      {
        "kicker": { "ko": "제품 개발", "en": "PRODUCT" },
        "value": { "ko": "서비스를 끝까지 만들어 출시하고 개선합니다", "en": "I ship a service end to end and keep improving it" },
        "label": {
          "ko": "저장 전 사용자 확인 단계를 넣어 재출시했고 이후 사용자 4명의 관찰로 직접 입력과 소비 완료 복구 흐름을 개선했습니다.",
          "en": "I re-released the app with a confirm-before-save step, then used observations with 4 users to improve manual entry and restoring items marked as consumed."
        },
        "stats": [
          { "ko": "4명·32개 과업 관찰 → 소비 완료 복구·직접 입력 경로 수정", "en": "4 users, 32 task observations → fixed consumed-item restore and manual-entry paths" },
          { "ko": "불편을 겪은 2명이 수정한 흐름 4개를 다시 수행해 8건 모두 완료", "en": "The 2 users who hit problems redid the 4 corrected flows; all 8 observations completed" }
        ],
        "projects": [
          { "name": { "ko": "오늘도 신선", "en": "Fridge D-Day" }, "target": "project-today-fresh", "aria": { "ko": "오늘도 신선 프로젝트로 이동", "en": "Jump to the Fridge D-Day project" } }
        ]
      },
      {
        "kicker": { "ko": "팀 협업", "en": "TEAMWORK" },
        "value": { "ko": "팀에서 맡은 파트를 풀어 내고 연동합니다", "en": "I solve my part in a team and integrate it" },
        "label": {
          "ko": "11인 팀에서 공개 데이터셋 조합을 제안하고 팀원들과 정확도와 일정을 검토해 합의한 뒤 학습한 모델을 로봇과 연동했습니다.",
          "en": "In a team of 11, I proposed combining public datasets, reached agreement after reviewing accuracy and timing with teammates, and integrated the trained model with the robot."
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
    copy: { ko: "AI 코딩 도구를 활용한 개인 프로젝트에서 요구사항과 검증 기준 수립, 변경 채택 판단을 담당했습니다.", en: "In personal projects using AI coding tools, I defined requirements and validation criteria and decided which changes to adopt." },
    featured: [
      {
        anchor: "project-gildong", title: "길동이 AI 차량 어시스턴트", titleLines: [{ ko: "길동이", en: "GildongE" }, { ko: "AI 차량 어시스턴트", en: "AI Vehicle Assistant" }], type: [{ ko: "6인 팀", en: "Team of 6" }, { ko: "백엔드 / DB 담당", en: "Backend / DB owner" }], period: "2025.03 — 2025.06",
        subtitle: { ko: "차량 데이터 API와 MongoDB 백엔드", en: "Vehicle data APIs and MongoDB backend" },
        lead: { ko: "졸음 감지 장치와 모바일 앱에서 들어오는 차량, 소모품, 주행 패턴 데이터를 사용자별로 제공합니다. 캡스톤디자인 경진대회 은상을 받은 팀 프로젝트입니다.", en: "Serves vehicle, consumable, and driving-pattern data from a drowsiness-detection device and mobile app per user. A team project that won the silver prize at a capstone design competition." },
        tech: ["Java 17", "Spring Boot", "MongoDB", "Spring Data MongoDB", "Kakao OAuth API", "OpenAPI"],
        role: { ko: "6인 팀에서 차량 관련 API와 MongoDB 데이터 모델을 맡았고, 장치와 앱 담당자가 같은 규격으로 연동하도록 OpenAPI 문서를 작성했습니다.", en: "In a team of 6, I built the vehicle-related APIs and MongoDB data models, and wrote OpenAPI docs so device and app teammates could integrate against one spec." },
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "장치와 기능마다 형태가 다른 차량 데이터를 사용자 단위로 일관되게 다룰 서버가 필요했습니다.", en: "The team needed a backend that could handle differently shaped vehicle data consistently per user." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "데이터 형태가 장치와 기능마다 달라 차량 관련 5개 도메인(차량, 차량 모델, 소모품, 주행 패턴, 사용자)으로 나눠 REST API와 MongoDB 문서 모델로 구조화했습니다. 장치와 앱 담당자가 같은 규격으로 연동하도록 요청·응답 스키마와 오류 응답을 OpenAPI로 문서화했고, 사용자별 주간 평균 집계와 카카오 사용자 조회·등록도 구현했습니다.", en: "Because data shapes differed by device and feature, I split the vehicle data into five domains (car, car model, consumable, driving pattern, user) and structured them as REST APIs and MongoDB document models. I documented request/response schemas and error responses with OpenAPI so device and app teammates could integrate against one spec, and also implemented per-user weekly averages and Kakao user lookup and registration." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "프로젝트는 캡스톤디자인 경진대회 심화캡스톤디자인 부문 은상을 받았고, 한국정보기술학회 논문으로 공저했습니다. SSE 알림은 팀 프로젝트와 별도로 개인 확장 저장소 gildonge-alert에 구현했습니다.", en: "The project won the Silver Prize in the Capstone Design Competition (Advanced Division), and I co-authored a KIIT conference paper on it. The SSE alerts were built separately from the team project, in my individual extension repository gildonge-alert." } },
        ],
        results: [{ value: { ko: "5개 도메인", en: "5 domains" }, label: { ko: "API·DB 모델 설계", en: "API and DB model design" } }, { value: { ko: "은상", en: "Silver" }, label: { ko: "캡스톤디자인 경진대회", en: "Capstone Design award" } }, { value: { ko: "학회 논문 공저", en: "Conference paper co-author" }, label: { ko: "한국정보기술학회", en: "KIIT" } }],
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
          "ko": "2024 원본 / 2026.10 재구축",
          "en": "2024 original / Oct 2026 rebuild"
        },
        "lead": {
          "ko": "JSP와 MySQL로 만든 웹 주문 시스템을 Spring Boot, MyBatis, Oracle로 재구축하고, 주요 조회에 맞는 인덱스를 측정으로 골라 반영했습니다.",
          "en": "Rebuilt a JSP/MySQL web order system with Spring Boot, MyBatis, and Oracle, then chose and applied indexes for key queries based on measurements."
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
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "JSP·MySQL로 만든 웹 주문 시스템을 Spring Boot·MyBatis·Oracle로 옮기면서, 조회에 필요한 인덱스를 같은 기준으로 비교해 정해야 했습니다.", en: "While rebuilding a JSP/MySQL order system on Spring Boot, MyBatis, and Oracle, I had to choose indexes by comparing candidates under the same criteria." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "측정할 쿼리 3종과 데이터 분포, 인덱스 후보, 반복 조건을 먼저 정하고 결과 검증과 실행계획 해석을 맡았습니다. 주문 상세 조회에는 외래 키 인덱스를, 회원별 조회 두 종류에는 함께 사용할 복합 인덱스를 선정했습니다. 재구축에는 AI 코딩 도구를 활용했습니다.", en: "I defined three queries, the data distribution, index candidates, and repeat conditions, then validated results and interpreted execution plans. I selected a foreign-key index for order-detail queries and one composite index for both per-user queries. I used AI coding tools in the rebuild." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "상세 조회의 DB 블록 읽기가 6,285에서 14로 줄었습니다(Oracle 생성 주문 60만 건 시험). 선정한 인덱스 2개는 앱 스키마에 반영해 자동 적용을 확인했습니다.", en: "Order-detail DB block reads fell from 6,285 to 14 (Oracle test, 600K generated orders). I confirmed automatic application of the two selected indexes in the app schema." } },
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
        anchor: "project-seoul-bike", title: "서울 공공자전거 데이터 파이프라인", titleLines: [{ ko: "서울 공공자전거", en: "Seoul Public Bike" }, { ko: "데이터 파이프라인", en: "Data Pipeline" }], type: [{ ko: "개인", en: "Personal" }, { ko: "데이터 품질 / 파이프라인", en: "Data quality / pipeline" }], period: "2026.09",
        role: { ko: "변경되거나 실패한 달만 다시 처리하고, 이전 검증 결과를 보존하는 처리 흐름을 설계하고 구현했습니다.", en: "I designed and implemented a processing flow that reprocesses only changed or failed months and preserves previously validated results." }, visibleResultIndexes: [0, 2],
        subtitle: { ko: "대여 기록 정제와 월별 재처리 파이프라인", en: "Rental data cleaning and monthly reprocessing pipeline" },
        lead: { ko: "서울 공공자전거 대여 기록 78개월, 약 2억 4천만 행을 월별로 정제하고 정상 데이터와 격리 데이터의 합계를 원본 건수와 대조했습니다.", en: "Cleans 78 months of Seoul Public Bike rental records, about 240 million rows, month by month, and reconciles clean plus quarantined rows with the source count." },
        tech: ["Python", "DuckDB", "Parquet", "SQL", "Apache Airflow"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "서울시는 이미 올린 월별 파일을 나중에 고치기도 하고, 대여소 정보도 시점별로만 제공합니다. 그래서 무엇이 바뀌었는지 추적해 바뀐 달만 다시 처리해야 했습니다.", en: "Seoul sometimes corrects monthly files after publishing them, and station information is provided only as per-date snapshots. I therefore had to track what changed and reprocess only the changed months." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "파일 버전과 SHA-256 해시로 원천 변경을 추적했습니다. 같은 이동으로 묶인 기록의 값이 서로 다르면 하나를 임의로 고르지 않고 묶음 전체를 격리했습니다. 바뀐 달이나 실패한 달만 다시 처리하고 이전 검증 결과는 보존했으며, CLI와 Airflow가 같은 Python 처리 로직을 호출하도록 구성했습니다.", en: "I tracked source changes with file versions and SHA-256 hashes. When records grouped as the same trip had conflicting values, I quarantined the entire group rather than choosing one arbitrarily. I reprocessed only changed or failed months, preserved previously validated results, and configured the CLI and Airflow to call the same Python processing logic." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "2020-01~2026-06의 78개월 전체를 원천부터 정제까지 처리했습니다(총 241,350,472행). 정상 241,320,806행과 문제 29,666행을 더하면 원본 건수와 같아, 행 수 기준 대조가 맞았습니다. 대표 월의 분석용 집계도 대조했습니다.", en: "I processed all 78 months from 2020-01 to 2026-06, from source to cleaned data (241,350,472 rows in total). Normal rows (241,320,806) plus problem rows (29,666) equal the source row count, so the row-count reconciliation matched. Aggregates for representative months were also reconciled." } },
        ],
        results: [{ value: { ko: "2억 4천만 건", en: "240M records" }, label: { ko: "78개월 원본부터 정제까지 처리", en: "processed from source to cleaned data across 78 months" } }, { value: "78 / 78", label: { ko: "정제 완료 월", en: "months cleaned" } }, { value: { ko: "건수 합 일치", en: "Row counts reconcile" }, label: { ko: "원본 = 정상 처리 + 문제 데이터", en: "source = trusted + quarantined" } }],
        evidenceNotes: [
          { label: { ko: "전 기간 확인", en: "Full-period check" }, copy: { ko: "2020-01~2026-06의 78개월 2억 4,135만 행을 정제했고, 품질 문제 29,666행을 분석 데이터와 분리했습니다.", en: "Across 78 months from 2020-01 to 2026-06, about 241.35M rows were cleaned and 29,666 quality-issue rows were isolated from analytical data." } },
          { label: { ko: "재처리 기준", en: "Reprocessing rule" }, copy: { ko: "원천 파일의 버전과 SHA-256을 기록해 변경된 월만 다시 처리하도록 구성했습니다.", en: "Source versions and SHA-256 hashes identify changed months so only affected periods are rebuilt." } },        ],
        links: [{ href: "https://github.com/jgjoe/seoul-bike-data-pipeline", label: "GitHub" }, { href: "https://github.com/jgjoe/seoul-bike-data-pipeline/blob/main/docs/production-validation.md", doc: true, label: { ko: "실데이터 규모 검증", en: "Real-data scale validation" } }, { href: "https://github.com/jgjoe/seoul-bike-data-pipeline/blob/main/docs/prd-v1.0-final.md", doc: true, label: { ko: "설계 기준 문서", en: "Design specification" } }],
        media: {
          type: "data-flow",
          label: { ko: "서울 공공자전거 데이터 신뢰성 흐름", en: "Seoul Public Bike data reliability flow" },
          sources: [{ ko: "대여이력 원천", en: "Rental history" }, { ko: "대여소 정보", en: "Station data" }],
          steps: [
            { name: { ko: "원천 보관", en: "Raw source" }, copy: { ko: "파일 버전과 SHA-256 기록", en: "file version and SHA-256" } },
            { name: { ko: "정리와 품질 검사", en: "Clean & quality check" }, copy: { ko: "오류 행과 그룹 분리", en: "isolate invalid rows/groups" } },
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
        anchor: "project-traceverity", title: "TraceVerity", titleLines: ["TraceVerity"], subtitle: { ko: "업무 이벤트 로그에서 처리 시간과 재작업을 조회하는 분석 도구", en: "Analyze processing times and rework in business event logs" }, type: [{ ko: "개인", en: "Personal" }, { ko: "프로세스 분석", en: "Process Intelligence" }], period: "2026.09",
        role: { ko: "계산 기준을 한 곳에 두는 구조와 AI에게 줄 권한의 범위를 직접 설계하고 검증했습니다.", en: "I designed and verified a structure that keeps calculation in one place and limits what the AI can access." }, visibleResultIndexes: [1, 2],
        lead: { ko: "CSV와 XES 업무 로그를 가져와 처리 순서, 소요 시간과 재작업을 조회합니다. 브라우저에서 필드를 매핑하고 검증한 뒤 분석 화면으로 이어집니다.", en: "Import CSV or XES business event logs to explore activity sequences, processing times, and rework. Map fields and validate the log in the browser before opening the analysis view." },
        tech: ["Python", "DuckDB", "FastAPI", "React", "Power BI", "MCP"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "웹 화면과 AI가 지표를 따로 계산하면 같은 데이터에서도 결과가 달라질 수 있습니다. 그래서 계산 기준을 한 곳에 두는 구조부터 만들었습니다.", en: "When the web view and AI compute metrics separately, the same data can yield different numbers, so I started with one place that owns the calculation." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "업로드한 업무 기록의 형식을 검사하고 핵심 지표를 하나의 계산 모듈에서 만들어, 웹과 AI 질의응답이 같은 결과를 읽게 했습니다. AI에는 정해진 계산 결과를 조회하는 읽기 전용 도구만 제공하고, SQL 실행이나 파일 및 네트워크 접근, 쓰기 권한은 열지 않았습니다.", en: "I validated the format of uploaded work records and calculated core metrics in one module, so the web and the AI Q&A read the same results. The AI gets only read-only tools for looking up computed results, with no SQL execution, file or network access, or write access." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "공개 실데이터 2종에서 케이스 수, 이벤트 수, 주요 흐름, 단계 간 이동, 재작업 집계를 독립적으로 다시 계산해 대조했습니다. 같은 계산 도구에 직접 연결한 방식과 MCP를 거친 방식의 답 22개 항목도 모두 일치했습니다. 회귀 테스트는 개발본 190/190, 공개 저장소 168/168을 통과했고, 원본이나 계산 규칙 검증에 실패하면 분석을 멈춥니다.", en: "On two public real-world datasets, I independently recalculated case counts, event counts, main flows, step transitions, and rework counts and compared them with the results. All 22 answer items matched between connecting directly to the same calculation tool and going through MCP. Regression tests passed 190/190 on the development build and 168/168 on the public repository, and analysis stops if source or calculation-rule validation fails." } },
        ],
        results: [{ value: { ko: "공개 실데이터 2종", en: "2 public datasets" }, label: { ko: "같은 계산 기준으로 분석", en: "analyzed with one calculation rule" } }, { value: { ko: "22개 항목 일치", en: "22 matching checks" }, label: { ko: "공개 데이터 2종에서 직접 연결과 MCP 경유 답을 비교", en: "Compared answers from direct connection and MCP on 2 public datasets" } }, { value: { ko: "AI 권한 제한", en: "Limited AI access" }, label: { ko: "계산 결과 조회만 허용", en: "may only read computed results" } }],
        evidenceNotes: [
          { label: { ko: "검증 대상", en: "What was checked" }, copy: { ko: "케이스 수, 이벤트 수, 주요 흐름, 단계 간 이동, 재작업 집계를 두 실제 이벤트 로그에서 독립 재계산해 Core 결과와 대조했습니다.", en: "Case counts, event counts, major paths, direct transitions, and rework aggregates were independently re-derived on two real event logs and compared with Core results." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "개발본의 독립 회귀 테스트 190/190과 공개 저장소의 회귀 테스트 168/168을 각각 통과했습니다. 두 데이터셋에서 같은 계산 도구에 직접 연결한 방식과 MCP를 거친 방식의 결과를 비교한 22개 항목은 모두 일치했습니다.", en: "Independent regression testing of the development version passed 190/190, and the public repository passed its 168/168 regression tests. All 22 comparisons between connecting directly to the same calculation tool and going through MCP matched across two datasets." } },        ],
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
        links: [{ href: "https://github.com/jgjoe/traceverity", label: "GitHub" }, { href: "https://github.com/jgjoe/traceverity/blob/main/evidence/public-verification-summary.json", doc: true, label: { ko: "검증 요약", en: "Verification summary" } }, { href: "https://github.com/jgjoe/traceverity/blob/main/docs/ARCHITECTURE.md", doc: true, label: { ko: "아키텍처", en: "Architecture" } }, { href: "https://github.com/jgjoe/traceverity/blob/main/docs/REPRODUCTION.md", doc: true, label: { ko: "재현 가이드", en: "Reproduction guide" } }],
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
        lead: { ko: "온통청년과 정부24의 공식 정책 13,589개를 한 번에 검색하고, 찾은 정책을 근거로 AI가 답합니다. 공개 데모로 배포했습니다.", en: "Searches 13,589 official policies from Youth Policy and Gov24 in one place and answers from the policies it finds (RAG). Deployed as a public demo." },
        tech: ["Spring Boot", "FastAPI", "pgvector", "React", "E5", "Prometheus"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "1만 개가 넘는 정책이 두 사이트에 흩어져 있고, 키워드 검색만으로는 자신에게 맞는 제도를 찾기 어려웠습니다.", en: "More than 10,000 policies were spread across two sites, and keyword search made relevant programs hard to find." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "두 사이트의 정책 13,589개를 통합해 17,609개 검색 단위로 만들었습니다. 출처별 평가에서 상위 10개 결과의 정답 포함률을 높이는 키워드 보정을 적용했습니다. 뜻으로 찾는 검색에 키워드 일치 점수를 더하는 방식입니다.", en: "I unified 13,589 policies from two sites into 17,609 search chunks. In evaluations for each source, I improved top-10 recall by adding a keyword-match boost to semantic search." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "상위 10개 안 정답 포함률이 문서 기반 평가셋인 청년정책 60문항에서는 46.7%에서 51.7%로, 정부24 21문항에서는 61.9%에서 76.2%로 올랐습니다. 후보 검증 뒤 API를 요청 10%에서 100%까지 단계적으로 전환했고, 요청 ID와 메트릭으로 API·검색·DB 구간을 나눠 관측했습니다.", en: "The share of queries with the correct policy in the top 10 rose from 46.7% to 51.7% on 60 Youth policy queries from a document-based evaluation set, and from 61.9% to 76.2% on 21 Gov24 queries. After validating the candidate, I rolled the API out from 10% to 100% of requests and used request IDs and metrics to observe API, retrieval, and DB segments separately." } },
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
        anchor: "project-today-fresh", title: "오늘도 신선", titleLines: [{ ko: "오늘도 신선", en: "Fridge D-Day" }], type: [{ ko: "개인", en: "Solo" }, { ko: "Android 공개 출시", en: "Android release" }], period: { ko: "2025.09~2026.10", en: "2025.09 — 2026.10" },
        role: { ko: "기획과 개발, 출시, 사용자 관찰 뒤 개선까지 직접 진행했습니다.", en: "I handled planning, development, release, and improvements after user observation myself." }, visibleResultIndexes: [1, 2],
        subtitle: { ko: "식품 유통기한 관리 Android 앱", en: "Food expiry tracking Android app" },
        lead: { ko: "유통기한을 촬영하거나 입력해 식품을 등록하고 D-Day, 알림, 위젯으로 관리합니다. ONEstore와 Google Play에 정식 출시했습니다.", en: "Register foods by photographing or typing expiry dates, then manage them with D-Day status, notifications, and a widget. Released on ONEstore and Google Play." },
        tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "ML Kit OCR", "MVVM"],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "유통기한을 직접 입력하는 번거로움과 식품 기록을 외부로 보내는 부담을 줄이고자 했습니다.", en: "I wanted to reduce the hassle of typing expiry dates by hand and the burden of sending food records off the device." } },
          { label: { ko: "내가 한 일과 판단", en: "What I did & decided" }, copy: { ko: "기기 내 문자인식과 알림, 위젯, 백업 및 복원을 구현했습니다. 저장 전 사용자 확인 단계를 넣어 재출시했고 이후 Galaxy A32 실기기에서 회귀 검사를 수행했습니다. 사진과 식품 기록은 기기에 저장하며 앱 자체에는 인터넷 권한이 없습니다.", en: "I built on-device text recognition, notifications, widgets, and backup/restore. I re-released with a confirm-before-save step and then ran regression checks on a physical Galaxy A32. Photos and food records stay on the device, and the app itself has no internet permission." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "ONEstore와 Google Play에 정식 출시했습니다. 재출시 뒤 4명이 각 8개 과업을 수행한 32건의 관찰로 소비 완료 복구와 직접 입력 흐름을 개선했습니다. 해당 불편을 겪은 2명이 수정한 흐름 4개를 다시 수행한 8건의 관찰에서 모두 과업을 완료했습니다.", en: "The app is officially released on ONEstore and Google Play. After the re-release, I improved consumed-item restore and manual-entry flows through 32 observations with 4 users performing 8 tasks each. The 2 users affected repeated the 4 corrected flows and completed all 8 task observations." } },
        ],
        results: [{ value: "ONEstore", label: { ko: "공개 배포", en: "public release" } }, { value: "Google Play", label: { ko: "정식 출시", en: "production release" } }, { value: { ko: "사용자 관찰 후 개선", en: "Improved after user observation" }, label: { ko: "4명 관찰로 찾은 불편을 고치고 재확인", en: "Fixed issues found with 4 users, then re-checked" } }],
        evidenceNotes: [
          { label: { ko: "OCR 확인", en: "OCR check" }, copy: { ko: "서로 다른 한국 식품 라벨 55장을 고정 회귀셋으로 사용해 OCR 변경 전후의 퇴행을 확인했습니다.", en: "A fixed regression set of 55 different Korean food labels was used to check OCR changes for regressions." } },
          { label: { ko: "출시 판단", en: "Release decision" }, copy: { ko: "저장 전 사용자 확인 단계를 추가하고 검증한 뒤 재출시했습니다.", en: "I added and verified a confirm-before-save step, then re-released." } },
          { label: { ko: "사용성 재확인", en: "Usability retest" }, copy: { ko: "초기 4명이 각 8과업을 수행한 32건의 관찰 뒤, 결함을 겪은 2명이 수정한 흐름 4개를 다시 수행했고 이 8건의 관찰에서 모두 과업을 완료했습니다.", en: "After 32 initial observations (4 users × 8 tasks), the 2 users who hit defects redid the 4 corrected flows, and all 8 of those observations ended in completed tasks." } },
        ],
        links: [{ href: "https://m.onestore.co.kr/v2/ko-kr/app/0001003331", label: { ko: "ONEstore에서 보기", en: "View on ONEstore" } }, { href: "https://play.google.com/store/apps/details?id=app.fridgedday", label: { ko: "Google Play에서 보기", en: "View on Google Play" } }, { href: "https://github.com/jgjoe/fridge-d-day", label: "GitHub" }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/QA_RELEASE_RECORD.md", doc: true, label: { ko: "QA와 릴리스 기록", en: "QA & release record" } }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/docs/qa/OCR_BENCHMARK.md", doc: true, label: { ko: "OCR 벤치마크", en: "OCR benchmark" } }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/.github/workflows/android-ci.yml", doc: true, label: { ko: "CI 설정", en: "CI workflow" } }],
        media: { type: "gallery", label: { ko: "오늘도 신선 v2 대표 화면", en: "Fridge D-Day v2 highlights" }, images: [
          { src: "/today-fresh-1.png", alt: { ko: "오늘도 신선 v2 Today 화면", en: "Fridge D-Day v2 Today screen" } },
          { src: "/today-fresh-2.png", alt: { ko: "오늘도 신선 v2 Scan 화면", en: "Fridge D-Day v2 Scan screen" } },
          { src: "/today-fresh-3.png", alt: { ko: "오늘도 신선 v2 Record 화면", en: "Fridge D-Day v2 Record screen" } },
        ] },
      },
    ],
    posterOpen: { ko: "프로젝트 포스터 보기", en: "View project poster" },
    posterClose: { ko: "프로젝트 포스터 닫기", en: "Hide project poster" },
    moreEyebrow: { ko: "MORE WORK", en: "MORE WORK" }, moreTitle: { ko: "추가 프로젝트", en: "Additional projects" },
    more: [
      { anchor: "project-ssodam", title: { ko: "쓰담", en: "SSeudam" }, type: ["YOLOv8", "Android", "Robot"], link: null, copy: { ko: "11인 팀에서 공개 데이터셋 조합을 제안하고 정확도와 일정을 함께 검토해 합의했습니다. 대화형 쓰레기통 로봇의 객체 탐지와 로봇 연동을 담당했으며 팀 프로젝트는 대학생 논문경진대회 우수논문상을 받았습니다.", en: "In a team of 11, I proposed combining public datasets and reached agreement after reviewing accuracy and timing together. I handled object detection and integration for the interactive trash-bin robot. The team project received an Outstanding Paper Award at a student paper competition." }, media: { src: "/ssodam_poster.jpg", alt: { ko: "쓰담 프로젝트 포스터", en: "SSeudam project poster" } } },
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
      { title: { ko: "오픈소스", en: "Open source" }, link: { href: "https://github.com/pydantic/logfire/pull/2260", label: { ko: "병합된 변경 보기", en: "View merged change" } }, items: [{ ko: "pydantic/logfire PR #2260 병합(2026.10): CLI 인증이 환경변수로 지정한 서버 주소를 쓰도록 수정하고 테스트·문서를 추가", en: "pydantic/logfire PR #2260 merged (Oct 2026): CLI auth now uses the server URL set by environment variable; added tests and docs" }] },
    ],
  },
  skills: [
    { title: { ko: "언어와 백엔드", en: "Languages & Backend" }, items: ["Java", "Kotlin", "Python", "TypeScript", "SQL", "Spring Boot", "MyBatis", "FastAPI", "REST API", "OpenAPI"] },
    { title: { ko: "데이터 시스템", en: "Data & Systems" }, items: ["Oracle", "PostgreSQL / pgvector", "MySQL", "MongoDB", "DuckDB", "Parquet", "Apache Airflow"] },
    { title: { ko: "AI 응용", en: "AI Applications" }, items: ["RAG", "Embedding · Vector Search (pgvector)", "Retrieval Evaluation (Recall · MRR)", "MCP", "LLM Agent Tool Restriction"] },
    { title: { ko: "품질과 배포", en: "Quality & Delivery" }, items: ["Pytest", "Playwright", "JUnit", "GitHub Actions", "Docker", "Prometheus", "Google Cloud Run"] },
  ],
  contact: { eyebrow: { ko: "LET'S TALK", en: "LET'S TALK" }, title: { ko: "검증된 결과물을 함께 만듭니다", en: "Let's build verified work together" }, copy: { ko: "프로젝트나 포지션 제안은 이메일로 연락해 주세요.", en: "For project or role opportunities, feel free to reach out by email." }, email: "jigwan.joe@gmail.com", github: "https://github.com/jgjoe" },
};

const featuredOrder = ["TraceVerity", "혜택나침반", "길동이 AI 차량 어시스턴트", "서울 공공자전거 데이터 파이프라인", "Build Your Health", "오늘도 신선"];
portfolio.projects.featured.sort((a, b) => featuredOrder.indexOf(a.title) - featuredOrder.indexOf(b.title));
