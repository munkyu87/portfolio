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
      icon: "https://skillicons.dev/icons?i=mysql",
      level: "gold"
    },
    {
      skillName: "Oracle",
      icon: "https://skillicons.dev/icons?i=oracle",
      level: "gold"
    },
    {
      skillName: "ERP",
      icon: "https://skillicons.dev/icons?i=csharp",
      level: "gold"
    },
    {
      skillName: "selenium",
      icon: "https://skillicons.dev/icons?i=selenium",
      level: "gold"
    },
    {
      skillName: "appium",
      icon: "https://skillicons.dev/icons?i=appium",
      level: "gold"
    },
    {
      skillName: "Java",
      icon: "https://skillicons.dev/icons?i=java",
      level: "silver"
    },
    {
      skillName: "JPA",
      icon: "https://skillicons.dev/icons?i=spring",
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
      icon: "https://skillicons.dev/icons?i=intelliJ"
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
