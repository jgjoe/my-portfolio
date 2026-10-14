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
    enlargeHint: { ko: "눌러서 크게 보기", en: "Click to enlarge" },
    evidenceLinks: { ko: "검증 근거", en: "Evidence" },
    viewEvidence: { ko: "검증 근거 보기", en: "View evidence" },
    evidenceModalIntro: { ko: "무엇을 어떻게 확인했는지 정리했습니다. 공개 검증 자료가 있으면 함께 연결합니다.", en: "See what was checked and how it was checked. Public validation sources are linked when available." },
  },
  hero: {
    eyebrow: ["BACKEND", "DATA ENGINEERING", "SOFTWARE QUALITY"],
    title: { ko: "업무 시스템의 API와\n데이터 흐름을 만듭니다", en: "I build APIs and data flows\nfor business systems" },
    summary: { ko: "Spring Boot로 차량 API와 실시간 알림을 구현하고, 주문 조회의 실행계획을 비교해 인덱스를 골랐습니다. 서울 공공자전거 대여 기록 약 2억 4천만 행을 정제하고 원본과 처리 결과를 대조한 신입 개발자입니다.", en: "A new-graduate developer who built vehicle APIs and real-time alerts with Spring Boot, selected indexes by comparing query plans, and reconciled cleaned data with about 240 million Seoul bike rental source rows." },
    approach: { ko: "AI 코딩 도구를 활용하되 요구사항과 검증 기준을 먼저 정하고, 확인한 결과를 바탕으로 변경을 채택합니다.", en: "I use AI coding tools, define requirements and validation criteria first, and adopt changes based on checked results." },
    profileRole: "Backend & Data Engineer",
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
      "ko": "핵심 성과",
      "en": "Key outcomes"
    },
    "items": [
      {
        "kicker": {
          "ko": "백엔드 구현",
          "en": "BACKEND DEVELOPMENT"
        },
        "value": {
          "ko": "API와 실시간 알림",
          "en": "APIs and real-time alerts"
        },
        "label": {
          "ko": "6인 팀에서 차량 관련 5개 도메인의 API와 DB 모델, SSE 알림을 맡고 앱·장치 연동 규격을 공유했습니다.",
          "en": "Owned APIs, DB models, and SSE alerts for five vehicle-related domains in a team of six, and shared app/device contracts."
        },
        "project": {
          "ko": "길동이",
          "en": "GildongE"
        },
        "target": "project-gildong",
        "projectAria": {
          "ko": "길동이 백엔드 프로젝트로 이동",
          "en": "Jump to the GildongE backend project"
        }
      },
      {
        "kicker": {
          "ko": "SQL 검증과 판단",
          "en": "SQL VALIDATION"
        },
        "value": {
          "ko": "읽기량으로 고른 인덱스",
          "en": "Indexes chosen by read cost"
        },
        "label": {
          "ko": "로컬 Oracle의 생성 주문 60만 건에서 상세 조회의 논리 블록 읽기가 6,285에서 14로 줄어든 것을 확인하고 두 조회를 고려해 인덱스를 골랐습니다.",
          "en": "Confirmed that order-detail logical block reads fell from 6,285 to 14 on 600K generated local Oracle orders; selected indexes for both queries."
        },
        "project": "Build Your Health",
        "target": "project-build-health",
        "projectAria": {
          "ko": "주문 시스템 SQL 검증 프로젝트로 이동",
          "en": "Jump to order-system SQL validation"
        }
      },
      {
        "kicker": {
          "ko": "대용량 데이터 처리",
          "en": "LARGE-SCALE DATA"
        },
        "value": {
          "ko": "대용량 데이터도 검증합니다",
          "en": "I verify data even at scale"
        },
        "label": {
          "ko": "서울 공공자전거 대여 기록 2억 4천만 건을 다루며 원본이 바뀐 달만 다시 처리하고, 처리 결과와 원본의 건수를 대조했습니다.",
          "en": "Processed 240 million Seoul public bike rental records, reprocessing only months whose source changed and reconciling record counts with the source."
        },
        "project": {
          "ko": "서울 공공자전거",
          "en": "Seoul Bike"
        },
        "target": "project-seoul-bike",
        "projectAria": {
          "ko": "서울 공공자전거 데이터 파이프라인 프로젝트로 이동",
          "en": "Jump to the Seoul Public Bike data pipeline project"
        }
      }
    ]
  },
  projects: {
    eyebrow: { ko: "SELECTED WORK", en: "SELECTED WORK" }, title: { ko: "개발과 검증의 핵심 경험", en: "Selected development and validation work" },
    copy: { ko: "팀 프로젝트에서는 차량 도메인 백엔드를 맡았습니다. 개인 프로젝트는 AI 코딩 도구와 함께 구현하며 요구사항, 검증 기준과 변경 채택을 판단했습니다.", en: "I owned the vehicle-domain backend in a team project. For personal projects, I worked with AI coding tools and made decisions on requirements, validation criteria, and which changes to adopt." },
    featured: [
      {
        anchor: "project-gildong", title: "길동이 AI 차량 어시스턴트", titleLines: [{ ko: "길동이", en: "GildongE" }, { ko: "AI 차량 어시스턴트", en: "AI Vehicle Assistant" }], type: [{ ko: "6인 팀", en: "Team of 6" }, { ko: "백엔드 / DB 담당", en: "Backend / DB owner" }], period: "2025.03 — 2025.06",
        lead: { ko: "졸음 감지 장치와 모바일 앱 등에서 들어오는 차량 데이터를 사용자 단위로 관리하는 AI 차량 어시스턴트 백엔드입니다.", en: "The backend for an AI vehicle assistant that manages per-user vehicle data from sources such as a drowsiness-detection device and mobile app." },
        tech: ["Java 17", "Spring Boot", "MongoDB", "Spring Data MongoDB", "Kakao OAuth API", "OpenAPI"],
        visibleDetailIndexes: [1, 3],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "장치와 기능마다 형태가 다른 차량 데이터를 사용자 단위로 일관되게 다룰 서버가 필요했습니다.", en: "The team needed a backend that could handle differently shaped vehicle data consistently per user." } },
          { label: { ko: "해결 과정", en: "How I solved it" }, copy: { ko: "6인 팀에서 차량 관련 5개 도메인의 Spring Boot API와 MongoDB 모델을 담당했습니다. MongoDB 변경 감지와 SSE를 연결해 사용자별 여러 기기에 알림을 보내고 종료된 연결을 정리했습니다.", en: "In a team of six, I owned Spring Boot APIs and MongoDB models for five vehicle-related domains. I connected MongoDB change detection to SSE for multiple devices per user and cleaned up closed connections." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "장치와 기능마다 데이터 형태가 달라 5개 도메인으로 분리하고 MongoDB 문서 모델로 구조화했습니다.", en: "Because data shapes differed by device and feature, I split the backend into five domains and structured them as MongoDB documents." } },
          { label: { ko: "팀 연동", en: "Team integration" }, copy: { ko: "장치와 앱 담당자가 같은 규격으로 연동할 수 있도록 요청·응답 스키마와 오류 응답을 OpenAPI로 문서화했습니다. 사용자별 주간 평균 집계와 카카오 사용자 조회·등록도 구현했습니다.", en: "I documented request/response schemas and errors with OpenAPI for device and app integration, and implemented per-user weekly aggregation plus Kakao user lookup and registration." } },
        ],
        results: [{ value: { ko: "5개 도메인", en: "5 domains" }, label: { ko: "API·DB 모델 설계", en: "API and DB model design" } }, { value: { ko: "은상", en: "Silver" }, label: { ko: "캡스톤디자인 경진대회", en: "Capstone Design award" } }, { value: { ko: "학회 논문 공저", en: "Conference paper co-author" }, label: { ko: "한국정보기술학회", en: "KIIT" } }],
        evidenceNotes: [
          { showInPrint: false, label: { ko: "개인 구현 범위", en: "My implementation scope" }, copy: { ko: "차량 관련 5개 도메인 REST API와 MongoDB 모델, 사용자별 주간 평균 집계, 카카오 사용자 흐름을 구현했습니다.", en: "I implemented REST APIs and MongoDB models across five vehicle-related domains, per-user weekly aggregates, and Kakao user flows." } },
          { showInPrint: false, label: { ko: "팀 연동 기준", en: "Team integration" }, copy: { ko: "프론트와 장치가 맞춰 쓰도록 요청, 응답 스키마와 오류 응답을 OpenAPI 3.0 문서로 고정했습니다.", en: "Request/response schemas and error responses were fixed in OpenAPI 3.0 so frontend and device work could integrate against one contract." } },        ],
        evidenceButtonLabel: { ko: "구현 범위와 연동 기준", en: "Implementation scope & integration" },
        evidenceTitle: { ko: "구현 범위와 연동 기준", en: "Implementation scope & integration" },
        links: [{ href: "https://github.com/jgjoe/gildonge-backend", label: { ko: "GitHub (백엔드)", en: "GitHub (backend)" } }],
        media: { type: "poster", src: "/gildongE_poster.jpg", alt: { ko: "길동이 프로젝트 포스터", en: "GildongE project poster" } },
      },
      {
        "anchor": "project-build-health",
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
          "ko": "JSP와 MySQL로 만든 웹 주문 시스템을 Spring Boot·MyBatis·Oracle로 옮기는 과정에서, 조회 쿼리와 인덱스 후보를 같은 기준으로 비교했습니다.",
          "en": "During a rebuild from JSP/MySQL to Spring Boot, MyBatis, and Oracle, I compared query and index candidates under fixed criteria."
        },
        "tech": [
          "Java 17",
          "Spring Boot",
          "MyBatis",
          "Oracle",
          "SQL",
          "Docker"
        ],
        "visibleDetailIndexes": [
          0,
          1
        ],
        "details": [
          {
            "label": {
              "ko": "본인 역할",
              "en": "My role"
            },
            "copy": {
              "ko": "AI 코딩 도구로 진행한 재구축에서 측정할 쿼리·데이터 분포·인덱스 후보와 반복 조건을 먼저 정했습니다. 테스트 기준 고정, 검증, 실행계획 해석과 채택 결정을 맡았습니다.",
              "en": "For the AI-assisted rebuild, I defined queries, data distribution, index candidates, and repeated-run conditions first. My role was fixing test criteria, validating results, interpreting plans, and selecting indexes."
            }
          },
          {
            "label": {
              "ko": "핵심 판단",
              "en": "Key decision"
            },
            "copy": {
              "ko": "주문 상세 조회의 외래 키 인덱스 누락을 확인했습니다. 회원별 조회에서는 복합 인덱스의 컬럼 순서와 정렬 여부를 비교해 두 조회에 함께 쓸 인덱스를 골랐고, 건수 조회에 조금 유리한 단일 인덱스는 중복돼 추가하지 않았습니다.",
              "en": "I identified a missing foreign-key index in order-detail queries. For per-user queries, I compared composite-column order and sorting, selected one index for both queries, and omitted a slightly better count-only index because it was redundant."
            }
          },
          {
            "label": {
              "ko": "측정 결과",
              "en": "Measured result"
            },
            "copy": {
              "ko": "로컬 Oracle에 생성한 주문 60만 건에서 상세 조회의 논리 블록 읽기, 즉 쿼리가 읽는 DB 블록 수가 6,285에서 14로 줄었습니다. 채택한 인덱스 2개의 앱 스키마 반영과 자동 적용도 확인했습니다.",
              "en": "On 600,000 generated orders in local Oracle, logical block reads—the database blocks read by the query—fell from 6,285 to 14 for order details. I also checked schema integration and automatic application of the two selected indexes."
            }
          },
          {
            "label": {
              "ko": "검증 조건",
              "en": "Validation conditions"
            },
            "copy": {
              "ko": "고정 시드 데이터로 쿼리 3종을 인덱스 미적용 기준선을 포함한 다섯 구성에서 비교했습니다. 워밍업 5회 뒤 30회씩 두 회차를 측정한 웜 캐시 시험에서 논리 읽기와 실행계획은 두 회차가 같았습니다. 회차 간 편차가 있는 ms 수치 대신 이 근거로 선정했습니다.",
              "en": "I compared three queries across five configurations, including a baseline without indexes, on fixed-seed data. Warm-cache runs used five warmups and 30 measurements in each of two rounds; logical reads and plans matched between rounds. These were the selection evidence instead of variable millisecond measurements."
            }
          }
        ],
        "results": [
          {
            "value": "6,285 → 14",
            "label": {
              "ko": "로컬 Oracle / 생성 주문 60만 건의 상세 조회 논리 블록 읽기",
              "en": "Order-detail logical reads / local Oracle, 600K generated orders"
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
              "ko": "로컬 Oracle의 생성 데이터에서 지정 쿼리의 논리 블록 읽기와 실행계획을 확인한 결과입니다.",
              "en": "These results cover logical block reads and execution plans for the designated queries on generated data in local Oracle."
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
            "href": "https://github.com/jgjoe/build-your-health/blob/main/docs/db-tuning.md",
            "label": {
              "ko": "측정 설계와 선정 근거",
              "en": "Measurement and selection criteria"
            }
          },
          {
            "href": "https://github.com/jgjoe/build-your-health/tree/main/remake/perf/results",
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
                "ko": "계획과 읽기량 비교",
                "en": "Compare plans and reads"
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
              "ko": "중복 단일 인덱스는 제외",
              "en": "Omit the redundant single-column index"
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
                "ko": "실행계획과 읽기량 대조",
                "en": "Compare plans and reads"
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
                "ko": "2개 채택, 중복 후보 제외",
                "en": "Adopt 2; omit a redundant candidate"
              }
            }
          ],
          "callouts": [
            {
              "value": "6,285 → 14",
              "label": {
                "ko": "상세 조회 논리 읽기",
                "en": "Order-detail logical reads"
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
        anchor: "project-seoul-bike", title: "서울 공공자전거 데이터 파이프라인", titleLines: [{ ko: "서울 공공자전거", en: "Seoul Public Bike" }, { ko: "데이터 파이프라인", en: "Data Pipeline" }], type: [{ ko: "개인", en: "Personal" }, { ko: "데이터 엔지니어링", en: "Data Engineering" }], period: "2026.09",
        lead: { ko: "서울 공공자전거 대여 기록 78개월, 2억 4천만 건을 정제해 분석용 데이터로 만드는 배치 파이프라인입니다.", en: "A batch pipeline that cleans 240 million Seoul Public Bike rental records across 78 months into analytical datasets." },
        tech: ["Python", "DuckDB", "Parquet", "SQL", "Apache Airflow"],
        visibleDetailIndexes: [1, 2],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "서울시가 이미 올린 월별 파일을 나중에 고치기도 하고 대여소 정보는 시점별로만 제공돼서 무엇이 바뀌었는지 추적해 바뀐 달만 다시 처리해야 했습니다.", en: "The city sometimes revises monthly files it has already published, and station data is only available as point-in-time snapshots, so the pipeline had to track what changed and rebuild only those months." } },
          { label: { ko: "해결 과정", en: "How I solved it" }, copy: { ko: "파일 버전과 해시로 원천 변경을 추적하고, 품질 검사에서 걸린 행을 분리했습니다. 정상 행과 문제 행의 합계가 원본과 일치하는지 대조한 뒤 분석용 집계에 연결했습니다.", en: "I tracked source changes with file versions and hashes, separated rows failing quality checks, and reconciled accepted plus quarantined counts with the source before downstream aggregation." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "바뀐 월이나 실패한 월만 다시 처리하고 검증을 마친 이전 결과는 보존했습니다. CLI와 Airflow가 같은 Python 처리 로직을 호출하도록 구성했습니다.", en: "I reprocessed only changed or failed months while preserving earlier verified results. The CLI and Airflow call the same Python processing logic." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "원천부터 정제까지 78개월 241,350,472행을 처리했습니다. 정상 241,320,806행과 문제 29,666행의 합계가 원본 건수와 일치했고 대표 월의 분석용 집계도 대조했습니다.", en: "Source-to-clean processing covered 78 months and 241,350,472 rows. The accepted 241,320,806 rows plus 29,666 quarantined rows matched the source count, and representative monthly aggregates were also checked." } },
        ],
        results: [{ value: { ko: "2억 4천만 건", en: "240M records" }, label: { ko: "원본부터 정제까지 처리", en: "processed from source to cleaned data" } }, { value: "78 / 78", label: { ko: "정제 완료 월", en: "months cleaned" } }, { value: { ko: "건수 일치", en: "Exact counts" }, label: { ko: "원본 = 정상 처리 + 문제 데이터", en: "source = clean + quarantined" } }],
        evidenceNotes: [
          { label: { ko: "전 기간 확인", en: "Full-period check" }, copy: { ko: "2020-01~2026-06의 78개월 2억 4,135만 행을 정제했고, 품질 문제 29,666행을 분석 데이터와 분리했습니다.", en: "Across 78 months from 2020-01 to 2026-06, about 241.35M rows were cleaned and 29,666 quality-issue rows were isolated from analytical data." } },
          { label: { ko: "재처리 기준", en: "Reprocessing rule" }, copy: { ko: "원천 파일의 버전과 SHA-256을 기록해 변경된 월만 다시 처리하도록 구성했습니다.", en: "Source versions and SHA-256 hashes identify changed months so only affected periods are rebuilt." } },        ],
        links: [{ href: "https://github.com/jgjoe/seoul-bike-data-pipeline", label: "GitHub" }, { href: "https://github.com/jgjoe/seoul-bike-data-pipeline/blob/main/docs/production-validation.md", label: { ko: "실데이터 규모 검증", en: "Real-data scale validation" } }, { href: "https://github.com/jgjoe/seoul-bike-data-pipeline/blob/main/docs/prd-v1.0-final.md", label: { ko: "설계 기준 문서", en: "Design specification" } }],
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
        anchor: "project-traceverity", title: "TraceVerity", titleLines: ["TraceVerity"], subtitle: { ko: "업무 처리 기록 분석 도구", en: "Process Intelligence Workbench" }, type: [{ ko: "개인", en: "Personal" }, { ko: "프로세스 분석", en: "Process Intelligence" }], period: "2026.09",
        lead: { ko: "기업 시스템에 쌓이는 업무 처리 기록을 읽어, 업무가 실제로 어떤 순서로 흐르고 어디서 반복되는지 보여 주는 분석 도구입니다. 기록 파일을 브라우저에 올리면 바로 분석합니다.", en: "An analysis tool that reads work records from business systems to show the order work actually follows and where it repeats. Upload a log file in the browser and it is analyzed right away." },
        tech: ["Python", "DuckDB", "FastAPI", "React", "Power BI", "MCP"],
        visibleDetailIndexes: [1, 2],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "웹 화면과 AI가 지표를 따로 계산하면 같은 데이터에서도 결과가 달라질 수 있습니다. 그래서 계산 기준을 한 곳에 두는 구조부터 만들었습니다.", en: "When the web view and AI compute metrics separately, the same data yields different numbers, so I started with one place that owns the calculation." } },
          { label: { ko: "해결 과정", en: "How I solved it" }, copy: { ko: "업무 로그의 형식을 검사하고 핵심 지표를 하나의 계산 모듈에서 만들었습니다. 웹과 AI 질의응답이 같은 결과를 읽도록 연결했습니다.", en: "I validated uploaded log formats, calculated core metrics in one module, and connected the web and AI interfaces to the same results." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "AI에는 정해진 계산 결과를 조회하는 도구만 제공했습니다. SQL 실행이나 파일·네트워크 접근, 쓰기 권한은 열지 않아 계산과 답변의 역할을 나눴습니다.", en: "I gave the AI only predefined tools for reading computed results, without direct SQL, filesystem, network, or write access, separating calculation from answering." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "두 실제 업무 데이터셋에서 Direct/MCP 연결 방식의 22개 비교 항목이 일치했습니다. 원본과 계산 규칙 검증에 실패하면 분석을 멈춥니다.", en: "All 22 Direct/MCP comparison checks matched across two real workflow datasets. Analysis stops when source or calculation-rule validation fails." } },
        ],
        results: [{ value: { ko: "공개 실데이터 2종", en: "2 public datasets" }, label: { ko: "같은 계산 기준으로 분석", en: "analyzed with one calculation rule" } }, { value: { ko: "22개 항목 일치", en: "22 matching checks" }, label: { ko: "두 데이터셋의 Direct/MCP 비교", en: "Direct/MCP comparisons on two datasets" } }, { value: { ko: "AI 권한 제한", en: "Limited AI access" }, label: { ko: "계산 결과 조회만 허용", en: "may only read computed results" } }],
        evidenceNotes: [
          { label: { ko: "검증 대상", en: "What was checked" }, copy: { ko: "케이스 수, 이벤트 수, 주요 흐름, 단계 간 이동, 재작업 집계를 두 실제 이벤트 로그에서 독립 재계산해 Core 결과와 대조했습니다.", en: "Case counts, event counts, major paths, direct transitions, and rework aggregates were independently re-derived on two real event logs and compared with Core results." } },
          { label: { ko: "결과", en: "Result" }, copy: { ko: "개발본의 독립 회귀 테스트 190/190과 공개 저장소의 회귀 테스트 168/168을 각각 통과했습니다. 두 데이터셋에서 Direct/MCP 결과를 비교한 22개 항목은 모두 일치했습니다.", en: "Independent regression testing of the development version passed 190/190, and the public repository passed its 168/168 regression tests. All 22 Direct/MCP result comparisons matched across two datasets." } },        ],
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
        links: [{ href: "https://github.com/jgjoe/traceverity", label: "GitHub" }, { href: "https://github.com/jgjoe/traceverity/blob/main/evidence/public-verification-summary.json", label: { ko: "검증 요약", en: "Verification summary" } }, { href: "https://github.com/jgjoe/traceverity/blob/main/docs/ARCHITECTURE.md", label: { ko: "아키텍처", en: "Architecture" } }, { href: "https://github.com/jgjoe/traceverity/blob/main/docs/REPRODUCTION.md", label: { ko: "재현 가이드", en: "Reproduction guide" } }],
        media: { type: "browser-gallery", host: "TraceVerity / local", label: { ko: "TraceVerity 대표 화면 선택", en: "Choose a TraceVerity view" }, images: [
          { src: "/traceverity-import.png", tab: { ko: "가져오기", en: "Import" }, alt: { ko: "TraceVerity 이벤트 로그 가져오기와 핵심 요약 화면", en: "TraceVerity event-log import and core summary" }, caption: { ko: "CSV/XES 파일을 가져와 검증한 뒤 같은 화면에서 핵심 지표를 확인합니다.", en: "Import and validate CSV/XES files, then review core metrics in the same workspace." } },
          { src: "/traceverity-variants.png", tab: { ko: "프로세스 흐름", en: "Process flow" }, alt: { ko: "TraceVerity 주요 프로세스 흐름과 직접 전이 분석 화면", en: "TraceVerity process variants and direct-follow transitions" }, caption: { ko: "주요 업무 흐름과 단계 간 이동을 실제 데이터에서 비교합니다.", en: "Compare major process paths and direct transitions from real event data." } },
          { src: "/traceverity-activity.png", tab: { ko: "활동 / 재작업", en: "Activity & rework" }, alt: { ko: "TraceVerity 활동별 재작업과 개별 케이스 조회 화면", en: "TraceVerity activity rework and case-trace lookup" }, caption: { ko: "활동별 재작업 수와 개별 케이스 흐름을 확인할 수 있습니다.", en: "Inspect rework by activity and drill into an individual case trace." } },
        ] },
      },
      {
        title: "혜택나침반", titleLines: [{ ko: "혜택나침반", en: "BenefitCompass" }], type: [{ ko: "개인", en: "Personal" }, { ko: "RAG 시스템", en: "RAG system" }], period: "2026.06 — 2026.09",
        lead: { ko: "온통청년과 정부24의 공식 정책을 한 번에 검색하고, 찾은 정책을 근거로 AI가 답하는 서비스(RAG)입니다.", en: "A service that searches official policies from Youth Policy and Gov24 in one place and has AI answer from the policies it finds (RAG)." },
        tech: ["Spring Boot", "FastAPI", "pgvector", "React", "E5", "Prometheus"],
        visibleDetailIndexes: [1, 2],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "1만 개가 넘는 정책이 두 사이트에 흩어져 있고, 키워드 검색만으로는 자신에게 맞는 제도를 찾기 어려웠습니다.", en: "More than 10,000 policies were spread across two sites, and keyword search made relevant programs hard to find." } },
          { label: { ko: "해결 과정", en: "How I solved it" }, copy: { ko: "두 사이트의 정책 13,589개를 하나로 합치고, 뜻으로 찾는 검색에 키워드 일치 점수를 더한 방식을 같은 평가셋으로 비교해 정확도가 오른 경우에만 적용했습니다.", en: "I merged 13,589 policies from the two sites, compared meaning-based search with an added keyword-match score on the same evaluation set, and shipped it only where accuracy improved." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "검색 결과를 다시 정렬하는 후보는 청년정책 평가에서 품질이 떨어져 적용하지 않았습니다. 원본의 지역 정보를 서비스 적용 지역으로 신뢰하기 어려워 지역 필터도 공개하지 않았습니다.", en: "I did not adopt the candidate that reordered search results because it reduced quality in the Youth Policy evaluation. I also kept the regional filter out of the public service because the source region data could not reliably identify where each policy applied." } },
          { label: { ko: "배포와 운영", en: "Delivery & operations" }, copy: { ko: "후보 검증 후 API를 10%에서 100%로 단계 배포했고, 요청 ID와 메트릭으로 API, 검색, DB 구간을 나눠 관측했습니다.", en: "After candidate validation, I rolled the API from 10% to 100% and used request IDs and metrics to separate API, retrieval, and DB segments." } },
        ],
        results: [{ value: "13,589", label: { ko: "통합한 공식 정책", en: "official policies unified" } }, { value: { ko: "정답 검색률 상승", en: "Higher hit rate" }, label: { ko: "상위 10개 안 정답 포함률 청년 60문항 46.7%→51.7%, 정부24 21문항 61.9%→76.2%", en: "correct policy in the top 10: Youth 60 queries 46.7%→51.7%, Gov24 21 queries 61.9%→76.2%" } }, { value: "10% → 100%", label: { ko: "새 검색을 요청 일부부터 단계적으로 전환", en: "new search rolled out gradually from a share of requests" } }],
        evidenceNotes: [
          { label: { ko: "지표 뜻", en: "Metric meaning" }, copy: { ko: "Recall@10은 각 질문의 정답 정책이 상위 10개 검색 결과 안에 포함된 비율입니다.", en: "Recall@10 is the share of queries whose labeled gold policy appears within the top 10 search results." } },
          { label: { ko: "비교 조건", en: "Comparison" }, copy: { ko: "직접 라벨링한 Youth 60문항과 Gov24 21문항에서 production과 같은 검색 조건으로 어휘 보정 전후와 리랭커 후보를 비교했습니다.", en: "On 60 labeled Youth queries and 21 Gov24 queries, lexical-bias and reranker candidates were compared under production-parity retrieval conditions." } },
          { label: { ko: "채택한 변경", en: "Adopted change" }, copy: { ko: "최소 어휘 보정은 Recall@10을 Youth 46.7→51.7%, Gov24 61.9→76.2%로 높여 유지했습니다.", en: "The minimal lexical bias improved Recall@10 from 46.7→51.7% on Youth and 61.9→76.2% on Gov24, so it was kept." } },
          { label: { ko: "채택하지 않은 변경", en: "Rejected change" }, copy: { ko: "cross-encoder 리랭커는 Gov24 일부 지표를 개선했지만 Youth Recall@5, Recall@10, MRR을 악화시켜 No-Go로 판정했습니다.", en: "The cross-encoder reranker improved some Gov24 metrics but hurt Youth Recall@5, Recall@10, and MRR, so it was a No-Go." } },
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
            label: { ko: "리랭커 실험", en: "Reranker experiment" },
            result: { ko: "검증 결과: bi-encoder + 어휘 보정 유지", en: "Result: keep bi-encoder + lexical bias" },
            action: { ko: "리랭커는 배포하지 않음", en: "Do not ship the reranker" },
          },
          note: { ko: "같은 평가 문항으로 어휘 보정 전후와 리랭커 후보를 비교", en: "Lexical bias and reranker candidates compared on the same evaluation queries" },
        },
        links: [{ href: "https://jgjoe.github.io/benefit-compass", label: { ko: "데모 보기", en: "View demo" } }, { href: "https://github.com/jgjoe/benefit-compass", label: "GitHub" }, { href: "https://github.com/jgjoe/benefit-compass/tree/main/eval", label: { ko: "평가셋과 측정 스크립트", en: "Evaluation set & scripts" } }, { href: "https://github.com/jgjoe/benefit-compass/blob/main/docs/operations/PRODUCTION_LAB_2_2026-07-21.md", label: { ko: "운영 실험 기록", en: "Production lab record" } }, { href: "https://github.com/jgjoe/benefit-compass/blob/main/docs/operations/RUNBOOK.md", label: { ko: "운영 런북", en: "Runbook" } }],
        media: { type: "image", src: "/benefit-compass-demo.png", host: "jgjoe.github.io/benefit-compass", alt: { ko: "혜택나침반의 월세 지원 검색 결과", en: "BenefitCompass search results for rental support" }, caption: { ko: "실제 배포 환경에서 확인한 검색 결과", en: "Search result captured from the live deployment" } },
      },
      {
        anchor: "project-today-fresh", title: "오늘도 신선", titleLines: [{ ko: "오늘도 신선", en: "Fridge D-Day" }], type: [{ ko: "개인", en: "Solo" }, { ko: "Android 공개 출시", en: "Android release" }], period: { ko: "2025.09 — 진행 중", en: "2025.09 — Present" },
        lead: { ko: "유통기한을 촬영하거나 입력해 식품을 등록하고 D-Day, 알림, 위젯으로 관리하는 Android 앱입니다.", en: "An Android app for registering expiry dates by camera or manual entry, then managing them with D-Day status, notifications, and a widget." },
        tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "ML Kit OCR", "MVVM"],
        visibleDetailIndexes: [2, 4],
        details: [
          { label: { ko: "문제", en: "Problem" }, copy: { ko: "기존 앱은 유통기한을 손으로 입력해야 해 번거롭고, 사진을 서버로 보내는 방식은 개인정보 수집 부담이 있었습니다.", en: "Existing apps required tedious manual entry of expiry dates, and sending photos to a server raised personal-data concerns." } },
          { label: { ko: "해결 과정", en: "How I solved it" }, copy: { ko: "기기 내 문자인식과 알림·위젯·백업 및 복원 기능을 만들었습니다. 촬영 이미지와 식품 기록은 기기에 저장하고 앱 자체 인터넷 권한 없이 처리합니다.", en: "I built on-device recognition, notifications, widgets, and backup/restore. Photos and food records remain on the device, and the app itself has no internet permission." } },
          { label: { ko: "판단", en: "Decision" }, copy: { ko: "이미지는 기기 안에서 처리하고 OCR 결과는 사용자가 확인한 뒤 저장하도록 최종 흐름을 정했습니다. 남은 인식 오류가 확인된 버전은 이 흐름을 적용한 뒤 재출시했습니다.", en: "Images stay on-device, and users confirm recognized dates before saving. I applied this flow after residual OCR errors were found, then re-released the app." } },
          { label: { ko: "품질 검증", en: "Quality gate" }, copy: { ko: "55장 고정 회귀셋과 Galaxy A32 실기기 테스트로 OCR 변경과 주요 기능의 퇴행을 확인했습니다.", en: "A fixed 55-image regression set and Galaxy A32 device tests checked OCR changes and key flows for regressions." } },
          { label: { ko: "결과", en: "Outcome" }, copy: { ko: "4명의 32개 과업 관찰에서 반복된 소비 완료 복구와 직접 입력 경로의 불편을 고쳤습니다. 문제를 겪은 2명이 네 수정 흐름을 재확인한 8개 관찰에서 모두 완료했고, ONEstore와 Google Play에 정식 출시했습니다.", en: "I fixed repeated friction in consumed-item recovery and manual entry found across 32 task observations with four people. Two affected users completed all eight retest observations of four corrected flows. The app was released on ONEstore and Google Play." } },
        ],
        results: [{ value: "ONEstore", label: { ko: "공개 배포", en: "public release" } }, { value: "Google Play", label: { ko: "정식 출시", en: "production release" } }, { value: { ko: "사용성 확인 후 개선", en: "Usability-tested improvements" }, label: { ko: "4명 관찰 후, 문제를 겪은 2명의 네 수정 흐름을 재확인", en: "4 initial participants; four corrected flows retested by 2 affected users" } }],
        evidenceNotes: [
          { label: { ko: "OCR 확인", en: "OCR check" }, copy: { ko: "서로 다른 한국 식품 라벨 55장을 고정 회귀셋으로 사용해 OCR 변경 전후의 퇴행을 확인했습니다.", en: "A fixed regression set of 55 different Korean food labels was used to check OCR changes for regressions." } },
          { label: { ko: "출시 판단", en: "Release decision" }, copy: { ko: "남은 오답과 표본 공백 때문에 후보 출시를 보류했고, 저장 전 사용자 확인 단계를 추가한 뒤 재배포했습니다.", en: "Residual errors and coverage gaps triggered a release hold; I added confirm-before-save before re-releasing." } },
          { label: { ko: "사용성 재확인", en: "Usability retest" }, copy: { ko: "초기 4명 × 8과업의 32개 관찰 후 결함을 겪은 2명이 네 수정 흐름을 재수행했고, 이 8개 관찰에서 모두 과업을 완료했습니다.", en: "After 32 observations from 4 people × 8 tasks, two affected users repeated four corrected flows and completed the tasks in all eight retest observations." } },
        ],
        links: [{ href: "https://m.onestore.co.kr/v2/ko-kr/app/0001003331", label: { ko: "ONEstore에서 보기", en: "View on ONEstore" } }, { href: "https://play.google.com/store/apps/details?id=app.fridgedday", label: { ko: "Google Play에서 보기", en: "View on Google Play" } }, { href: "https://github.com/jgjoe/fridge-d-day", label: "GitHub" }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/QA_RELEASE_RECORD.md", label: { ko: "QA와 릴리스 기록", en: "QA & release record" } }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/docs/qa/OCR_BENCHMARK.md", label: { ko: "OCR 벤치마크", en: "OCR benchmark" } }, { href: "https://github.com/jgjoe/fridge-d-day/blob/main/.github/workflows/android-ci.yml", label: { ko: "CI 설정", en: "CI workflow" } }],
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
      { title: { ko: "쓰담", en: "SSeudam" }, type: ["YOLOv8", "Android", "Robot"], link: null, copy: { ko: "대화형 쓰레기통 로봇에서 실시간 객체 탐지와 로봇 연동을 맡아 2024 한국정보기술학회 대학생 논문경진대회 우수논문상을 받았습니다.", en: "I handled real-time object detection and robot integration for an interactive trash-bin robot that received a 2024 KIIT student paper award." }, media: { src: "/ssodam_poster.jpg", alt: { ko: "쓰담 프로젝트 포스터", en: "SSeudam project poster" } } },
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
      { title: { ko: "오픈소스", en: "Open source" }, link: { href: "https://github.com/pydantic/logfire/pull/2260", label: { ko: "병합된 변경 보기", en: "View merged change" } }, items: [{ ko: "CLI 인증의 환경변수 서버 주소 반영, 테스트·문서 추가 — pydantic/logfire PR #2260 병합 (2026.10)", en: "CLI auth uses the environment-configured server URL; added tests and docs — pydantic/logfire PR #2260 merged (Oct 2026)" }] },
    ],
  },
  skills: [
    { title: { ko: "언어와 백엔드", en: "Languages & Backend" }, items: ["Java", "Kotlin", "Python", "TypeScript", "SQL", "Spring Boot", "MyBatis", "FastAPI", "REST API", "OpenAPI"] },
    { title: { ko: "데이터 시스템", en: "Data & Systems" }, items: ["Oracle", "PostgreSQL / pgvector", "MySQL", "MongoDB", "DuckDB", "Parquet", "Apache Airflow"] },
    { title: { ko: "품질과 배포", en: "Quality & Delivery" }, items: ["Pytest", "Playwright", "JUnit", "GitHub Actions", "Docker", "Prometheus", "Google Cloud Run"] },
  ],
  contact: { eyebrow: { ko: "LET'S TALK", en: "LET'S TALK" }, title: { ko: "안정적인 서비스를 함께 만듭니다", en: "Let's build reliable services together" }, copy: { ko: "프로젝트나 포지션 제안은 이메일로 연락해 주세요.", en: "For project or role opportunities, feel free to reach out by email." }, email: "jigwan.joe@gmail.com", github: "https://github.com/jgjoe" },
};
