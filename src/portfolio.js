/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Munkyu Choi",
  title: "안녕, 나는 최문규!",
  subTitle: emoji(
    "프론트엔드 개발자입니다. 하지만 백엔드와 인프라를 포함한 다양한 개발에 흥미가 많고, AI, 웹, DB, 모바일, ERP 시스템 등 여러 분야의 개발을 즐깁니다. 새로운 기술을 탐구하며 풀스택 개발자를 지향하고 있습니다."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/munkyu87",
  linkedin:
    "https://www.linkedin.com/in/%EB%AC%B8%EA%B7%9C-%EC%B5%9C-5a30892b2/",
  gmail: "munstar87@naver.com",
  blog: "https://munkyu87.github.io/",
  instagram: "https://instagram.com/mk_choi87",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "✨ 내가 만들고 즐기는 것",
  // subTitle: "주로 사용하는 개발",
  // skillSubTitle: "주로 사용하는 도구",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React",
      icon: "https://skillicons.dev/icons?i=react&theme=light",
      level: "gold"
    },
    {
      skillName: "React Native",
      icon: "https://skillicons.dev/icons?i=react",
      level: "gold"
    },
    {
      skillName: "TypeScript",
      icon: "https://skillicons.dev/icons?i=typescript",
      level: "gold"
    },
    {
      skillName: "JavaScript",
      icon: "https://skillicons.dev/icons?i=javascript",
      level: "gold"
    },
    {
      skillName: "MySQL",
      icon: "https://skillicons.dev/icons?i=mysql",
      level: "gold"
    },
    {
      skillName: "MsSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      level: "gold"
    },
    {
      skillName: "Oracle",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      level: "gold"
    },
    {
      skillName: "ERP",
      icon: "https://skillicons.dev/icons?i=githubactions",
      level: "gold"
    },
    {
      skillName: "selenium",
      icon: "https://skillicons.dev/icons?i=selenium",
      level: "gold"
    },
    {
      skillName: "appium",
      icon: "https://cdn.simpleicons.org/appium",
      level: "gold"
    },
    {
      skillName: "AI",
      icon: "https://skillicons.dev/icons?i=ai",
      level: "silver"
    },
    {
      skillName: "Java",
      icon: "https://skillicons.dev/icons?i=java",
      level: "silver"
    },
    {
      skillName: "Spring",
      icon: "https://skillicons.dev/icons?i=spring",
      level: "silver"
    },
    {
      skillName: "JPA",
      icon: "https://cdn.simpleicons.org/hibernate",
      level: "silver"
    },
    {
      skillName: "Docker",
      icon: "https://skillicons.dev/icons?i=docker",
      level: "silver"
    },
    {
      skillName: ".NET",
      icon: "https://skillicons.dev/icons?i=dotnet",
      level: "silver"
    },
    {
      skillName: "C#",
      icon: "https://skillicons.dev/icons?i=cs",
      level: "silver"
    },
    {
      skillName: "AWS",
      icon: "https://skillicons.dev/icons?i=aws",
      level: "bronze"
    }
  ],
  softwareTools: [
    {
      toolName: "Github",
      icon: "https://skillicons.dev/icons?i=github"
    },
    {
      toolName: "vscode",
      icon: "https://skillicons.dev/icons?i=vscode"
    },
    {
      toolName: "intelliJ",
      icon: "https://skillicons.dev/icons?i=idea"
    },
    {
      toolName: "Git",
      icon: "https://skillicons.dev/icons?i=git"
    },
    {
      toolName: "sentry",
      icon: "https://skillicons.dev/icons?i=sentry"
    },
    {
      toolName: "postman",
      icon: "https://skillicons.dev/icons?i=postman"
    },
    {
      toolName: "Figma",
      icon: "https://skillicons.dev/icons?i=figma"
    },
    {
      toolName: "Cursor",
      icon: "https://cdn.simpleicons.org/cursor"
    },
    {
      toolName: "Jira",
      icon: "https://cdn.simpleicons.org/jira"
    },
    {
      toolName: "Confluence",
      icon: "https://cdn.simpleicons.org/confluence"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: 80, //Insert relative proficiency in percentage
      color: "#4e73df"
    },
    {
      Stack: "Backend",
      progressPercentage: 50,
      color: "#1cc88a"
    },
    {
      Stack: "Database",
      progressPercentage: 80,
      color: "#f6c23e"
    },
    {
      Stack: "ERP",
      progressPercentage: 85,
      color: "#36b9cc"
    },
    {
      Stack: "Programing",
      progressPercentage: 70,
      color: "#e74a3b"
    }
  ],
  display: true,
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "프로젝트",
  subtitle: "참여하거나 개인적으로 진행한 주요 프로젝트입니다.",
  projects: [
    {
      image: require("./assets/images/projects/nationalParkKiosk.png"),
      platform: "App",
      projectName: "국립공원 키오스크",
      projectDesc: "React Native 기반 무인 주문/결제 키오스크",
      contribution: "FrontEnd 100%",
      tech: [
        "React Native",
        "JavaScript",
        "KG Inicis",
        "KISAgent",
        "본인인증",
        "Kiosk UI/UX",
        "..."
      ],
      longDesc: `- 국립공원 현장 키오스크용 주문 화면 및 결제 UX 구현
      - 상품 목록/수량 조절/금액 합계 등 핵심 주문 흐름 개발
      - KG 이니시스 결제 모듈 연동 및 결제 승인/실패 처리 플로우 적용
      - KISAgent 연동 기반 단말 결제 통신 처리 및 예외 케이스 대응
      - 결제 전 본인인증 절차를 포함한 사용자 인증 흐름 반영
      - 직관적인 버튼 구성과 가독성 중심 UI로 빠른 현장 사용성 확보
      - 운영 환경을 고려한 단순하고 안정적인 화면 전환 구조 적용`,
    },
    {
      image: require("./assets/images/projects/abcMartChat.png"),
      platform: "App",
      projectName: "ABC마트 앱 채팅",
      projectDesc: "KLAT 채팅 솔루션 연동 기반 고객 상담 채팅 고도화",
      contribution: `PM 역할 수행
      (채팅 기능 기획/정의, 협업 및 연동 주도)`,
      tech: [
        "KLAT Chat Solution",
        "채팅 기능 기획(PM)",
        "서비스 정책 설계",
        "운영/예외 시나리오 정의",
        "..."
      ],
      longDesc: `- 개발 담당이 아닌 채팅 기능 PM 역할로 프로젝트 참여
      - KLAT 채팅 솔루션 도입 및 앱 연동 범위/요구사항 정의
      - 전체/안읽음 필터, 안읽은 메시지 뱃지, 최근 대화 시간 표시 기능 기획
      - 채팅방 검색(사용자/대화 기준) 및 리스트 탐색 UX 플로우 설계
      - 스와이프 액션(읽음 처리/나가기)과 같은 운영 편의 기능 정책 수립
      - 아바타, 메시지 미리보기, 하단 탭 네비게이션 등 채팅 메인 화면 구조 정리
      - 기획/디자인/개발 간 커뮤니케이션을 통한 릴리즈 품질 관리`,
    },
    {
      image: require("./assets/images/projects/animalRace.png"),
      platform: "Web",
      projectName: "빙글빙글 동물레이스",
      projectDesc: "귀여운 동물들이 달리는 랜덤 레이싱 게임",
      contribution: "100%",
      tech: ["React", "TypeScript", "framer-motion", "MobX", "..."],
      longDesc: `- 캐릭터와 바퀴 수를 자유롭게 선택
      - 각 캐릭터마다 고유한 스킬 발동
      - 랜덤 요소가 가미된 예측불가 레이스
      - 실시간 순위와 생동감 넘치는 애니메이션`,
      footerLink: [
        {
          name: "TechBlog",
          url: "https://munkyu87.github.io/sideproject/animalRace/"
        },
        {
          name: "Play Game",
          url: "https://munkyu87.github.io/race/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/myPeople.png"),
      platform: "App",
      projectName: "MyPeople",
      projectDesc: "나의 사람들 정보, 일정을 관리",
      contribution: "100%",
      tech: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "AsyncStorage",
        "react-native-calendars",
        "Webview",
        "..."
      ],
      longDesc: `- 연락처 관리
      - 캘린더 일정 관리
      - 연락 기능(전화 걸기, SMS 보내기, 이메일 보내기)
      - MBTI 연동
      `,
      footerLink: [
        {
          name: "TechBlog",
          url: "https://munkyu87.github.io/sideproject/MyPeople/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/sallime.png"),
      platform: "App",
      projectName: "AI 마을살림e",
      projectDesc: "AI 경로당 ERP",
      contribution: `FrontEnd 80% 
      BackEnd 20% 
      Database 50%`,
      tech: [
        "React Native",
        "TypeScript",
        "MobX",
        "OCR(Azure, GoogleCloudVision)",
        "TTS",
        "STT",
        "RAG",
        "MCP",
        "Java Spring",
        "AI(Azure, ChatGPT)",
        "Gemini",
        "Vision Camera",
        "MySql",
        "eas",
        "..."
      ],
      longDesc: `- 회계 및 운영관리
      - 경로당 물품관리
      - 물품 신청 및 A/S 관리
      - 시설보수 관리
      - 영수증, 지출결의서, 보고서 등 수많은 문서를 AI에 기반해 자동 관리
      - 출석관리
      - 수요현황 조사
      - AI 음성인식
      - 고령의 사용자 대상 UI, UX 등 ..`,
      footerLink: [
        {
          name: "Visit WebSite",
          url: "https://www.sallim-e.com/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/coupangPOS.png"),
      platform: "Windows",
      projectName: "CoupangPOS",
      projectDesc: "주문, 결제, 매장 관리를 더 빠르고 쉽게",
      contribution: "FrontEnd 40%",
      tech: [
        "React Native",
        "React",
        "TypeScript",
        "C#",
        "MySql",
        "Selenium",
        "Appium",
        "ARP",
        "..."
      ],
      longDesc: `- React Native를 활용하여 Windows 및 iOS 환경에서 전반적인 POS 프론트엔드 개발
      - 주문/결제/포인트/정산/매출 등을 통합 관리하는 Sales Dashboard 구현
      - 동일 네트워크상 단말기 자동 연동 구현
      - Selenium, Appium 기반의 자동화 환경 구축
      - 고객만족도 조사(NPS) 기능 구현
      - 카카오톡 전송 시스템 구축`,
      footerLink: [
        {
          name: "Visit WebSite",
          url: "https://www.coupangpos.com/pos"
        }
      ]
    },
    {
      image: require("./assets/images/projects/rental.png"),
      platform: "Web",
      projectName: "건설근로 단말기 Rental",
      projectDesc: "재고관리 렌탈 프로그램",
      contribution: `FrontEnd 100% 
      BackEnd 50% 
      Database 50%`,
      tech: [
        "React",
        "TypeScript",
        "MySql",
        "Java Spring",
        "RPA",
        "..."
      ],
      longDesc: `- 임대관리(임대, 교환, 연장, 횟, 결제)
      - 입고관리
      - 판매관리
      - 재고관리
      - 수리
      - 대상업체 자동 이메일 발송 시스템 구축`,
      footerLink: [
        {
          name: "Visit WebSite",
          url: "http://ec2-43-200-67-228.ap-northeast-2.compute.amazonaws.com:9020/"
        }
      ]
    },
    {
      image: require("./assets/images/projects/evcare.png"),
      platform: "windows",
      projectName: "EVCare 보험청구 관리 시스템",
      projectDesc: "공급망 관리(SCM) 및 발주/입고/재고 통합 관리 웹 시스템",
      contribution: `Product Owner 역할 수행
      서비스 기획 및 요구사항 정의 60%
      사용자 여정/프로세스 설계 60%
      디자인·개발 협업 주도`,
      tech: [
        "React Native Windows",
        "C#",
      ],
      longDesc: `- 보험금 청구 프로세스
      - 재증명 발급 프로세스
      - 빠른청구 프로세스
      - 간편청구(EMR) 프로세스 등`,
    },
    {
      image: require("./assets/images/projects/emax.png"),
      platform: "Windows",
      projectName: "가구점 ERP 시스템",
      projectDesc: "가구점 대상 유통 ERP",
      contribution: `ERP 화면 80% 
      DB 설계 및 개발 80%`,
      tech: [
        "Emax",
        "VB.net",
        "MS-SQL",
        "..."
      ],
      longDesc: `- 판매관리
      - 재고관리
      - 고객관리
      - 무역관리
      - 정산관리
      - 배송관리 구축 개발
      - Franchise관리 구축 개발
      - 적용 업체: 인아트, 이노메싸`,
    },
    {
      image: require("./assets/images/projects/erp.png"),
      platform: "Windows",
      projectName: "기업 통합 ERP 시스템",
      projectDesc: "매입·매출·재고·정산 중심의 기업용 통합 ERP 시스템",
      contribution: `ERP 화면 60% 
      DB 설계 및 개발 60%`,
      tech: [
        "Emax",
        "VB.net",
        "MS-SQL",
        "MySQL",
        "..."
      ],
      longDesc: `- 매입관리
      - 매출관리
      - 재고관리
      - 고객관리
      - 정산관리
      - 적용 업체: 젠틀몬스터, 지씨바이오, 스페셜라이즈드, 혜림원, 쏘시오보떼, 디벨롭리스온 등`,
    },
    {
      image: require("./assets/images/projects/funeralHall.png"), // 적절한 이미지로 교체
      platform: "Windows",
      projectName: "장례식장 ERP 시스템",
      projectDesc: "장례식장 통합 정산 및 판매 ERP 시스템",
      contribution: "ERP 화면 및 DB 개발 40%",
      tech: [
        "C#.Net",
        "MS-SQL",
        "..."
      ],
      longDesc: `- 장례식장 대상 통합 정산 솔루션 개발
      - 기준정보 관리(사용자, 거래처, 품목, 세트) 모듈 개발
      - 매입/재고 모듈 (매입등록/수정, 실재고 이월, 세트관리 등) 개발
      - 판매/고인/빈소 관리 기능 개발
      - 정산 모듈 (빈소정산, 퇴실 정산 등) 개발
      - LCD 전광판 연동 화면 구성
      - 적용 병원: 고대병원(안산,안암,구로), 분당차병원, 중앙보훈병원, 수원연화장, 평택병원, 인천사랑병원, 더바른, 하남시마루공원 등`,
    },
    {
      image: require("./assets/images/projects/yangjisa.png"), // 적절한 이미지로 교체
      platform: "Web",
      projectName: "SCM 시스템",
      projectDesc: "공급망 관리(SCM) 및 발주/입고/재고 통합 관리 웹 시스템",
      contribution: "DB 설계 및 쿼리/프로시저 개발 80%",
      tech: [
        "MySQL",
        "MS-SQL",
      ],
      longDesc: `- SCM 프로세스(발주, 입고, 출고, 재고)의 전체 흐름에 맞춘 DB 스키마 설계 및 구조 정비
      - 대량 데이터 기반의 복잡한 조회/집계 로직 쿼리 개발
      - 발주, 입고, 물류 이동, 재고관리 등 주요 기능에 필요한 Stored Procedure 및 View 개발
      - 성능 병목을 유발하는 쿼리 최적화 및 인덱스 전략 수립
      - ERP와의 데이터 동기화를 위한 테이블 구조 개선 및 배치 로직 반영
      - 운영 중 발생하는 데이터 이슈 분석 및 DB 차원의 문제 해결
      - 적용 업체: 위드랜드, 양지사 등`,
    },
    {
      projectName: "그 외..",
      projectDesc: "주 참여 프로젝트 외에 다수의 기술 작업 수행",
      longDesc: `- 삼성 SmartThings 스마트 플러그 API 연동
      - Aparch SuperSet 대시보드 DB 스키마 연동 구현
      - 통계 화면용 SQL 쿼리 및 집계 로직 설계
      - Weather(Open-Meteo) API 연동
      - VisionCamera 기반 촬영·미리보기 공통 컴포넌트 구현
      - EAS(Build, Submit) 환경 구축 및 Android/iOS 자동 빌드
      - RN앱 Webview → Web ↔ React Native 양방향 통신 브릿지 구현
      - Naver News API 연동 시도`,
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const certificationSection = {
  title: "📄 자격증",
  // subtitle: "서브 타이틀",

  certificationsCards: [
    {
      name: "SQLD (SQL 개발자)",
      issuer: "한국데이터산업진흥원",
      date: "2023-04-14",
      certNumber: "SQLD-048001032",
      logo: "certifications/한국데이터산업진흥원Logo.png",
      image: "certifications/sqld자격증.png"
    },
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2018-05-25",
      certNumber: "18201010939D",
      logo: "certifications/한국산업인력공단Logo.png",
      image: "certifications/정보처리기사.png"
    },
    {
      name: "리눅스마스터 2급",
      issuer: "한국정보통신진흥협회",
      date: "2013-12-20",
      certNumber: "LMS-1304-001418",
      logo: "certifications/한국정보통신진흥협회Logo.png",
      image: "certifications/리눅스마스터.png"
    },
    {
      name: "정보처리산업기사",
      issuer: "한국산업인력공단",
      date: "2013-11-15",
      certNumber: "1320307156K",
      logo: "certifications/한국산업인력공단Logo.png",
      image: "certifications/정보처리산업기사.png"
    },
    {
      name: "정보처리기능사",
      issuer: "한국산업인력공단",
      date: "2011-12-02",
      certNumber: "11652001779C",
      logo: "certifications/한국산업인력공단Logo.png",
      image: "certifications/정보처리기능사.png"
    },
    {
      name: "MOS PowerPoint",
      issuer: "Microsoft",
      date: "2013-04-20",
      certNumber: "5KPP-FV7w",
      logo: "certifications/마이크로소프트Logo.png",
      image: "certifications/mos-Powerpoint.jpg"
    }
  ],
  display: true
};

const verificationSection = {
  title: "검증/인증",
  subtitle: "프로젝트 수행 결과에 대한 공식 인증 및 감리 완료 이력",
  cards: [
    {
      title: "중소기업 스마트서비스 지원사업 사업관리시스템 감리",
      subtitle: "최종완료보고서 제출 및 최종 승인",
      image: require("./assets/images/verifications/sme-audit-final-approval-1.png"),
      description:
        "보험청구 데이터 히스토리 기반 통합 처리 플랫폼 과제에 대해 사업관리시스템 내 감리 절차를 최종 승인까지 완료했습니다.",
      footerLink: [
        {
          name: "증빙 화면 2",
          url: require("./assets/images/verifications/sme-audit-final-approval-2.png")
        }
      ]
    },
    {
      title: "GS 인증(TTA 1등급) 시험성적서",
      subtitle: "경로당 ERP AI 마을살림e",
      image: require("./assets/images/projects/sallime.png"),
      description:
        "AI 마을살림e 프로젝트의 GS 인증(TTA 1등급) 시험성적서 문서를 통해 품질 검증 이력을 확인할 수 있습니다.",
      footerLink: [
        {
          name: "시험성적서 보기(PDF)",
          url: "/docs/gs-tta-grade1-test-report-260212.pdf"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle:
  //   "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "munstar87@naver.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  certificationSection,
  verificationSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
