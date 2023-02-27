// frontend
import javascript from "../../skills-svg/javascript.svg";
import react from "../../skills-svg/react.svg";
import typescript from "../../skills-svg/typescript.svg";
import nextjs from "../../skills-svg/nextdotjs.svg";
import redux from "../../skills-svg/redux.svg";

// Cooperation And ETC
import git from "../../skills-svg/git.svg";
import github from "../../skills-svg/github.svg";
import sass from "../../skills-svg/sass.svg";
import notion from "../../skills-svg/notion.svg";
import bootstrap from "../../skills-svg/bootstrap.svg";

// Backend
import mongodb from "../../skills-svg/mongodb.svg";
import nodejs from "../../skills-svg/nodedotjs.svg";
import firebase from "../../skills-svg/firebase.svg";

// MainData - Frontend
export const skillFronted = [
  {
    image: javascript,
    alt: "javascript",
    desc: [
      { text: "활용도 8/10" },
      { text: "완벽하진 않지만 활용에 익숙합니다." },
    ],
  },
  {
    image: react,
    alt: "react",
    desc: [
      { text: "활용도 9/10" },
      { text: "함수형 컴포넌트 사용에 익숙합니다." },
      { text: "기본적인 HOOK 부터 최적화에 필요한 " },
      {
        text: "useMemo, useCallback 훅 등을 적절히 사용합니다.",
      },
    ],
  },
  {
    image: typescript,
    alt: "typescript",
    desc: [
      { text: "활용도 8/10" },
      { text: "적절한 타입을 찾아가며 적용시킬 수 있습니다." },
      { text: "Interface와 Type 의 상속을 적절히 구현합니다." },
      {
        text: "Next.js 와 ReduxToolkit, 등 다른 라이브러리와 함께 사용가능합니다.",
      },
    ],
  },
  {
    image: nextjs,
    alt: "nextjs",
    desc: [
      { text: "활용도 9/10" },
      { text: "SSR의 구동방식을 이해하고 작업했습니다." },
      { text: "SSG의 방식을 이해하고 작업할 수 있습니다." },
    ],
  },
  {
    image: redux,
    alt: "redux",
    desc: [
      { text: "활용도 8/10" },
      { text: "Slice 와 Action(Thunk) 사용해보았습니다" },
      { text: "TypeScript 와 함께 사용해 보았습니다" },
    ],
  },
];

// MainData - Cooperation
export const skillCooperation = [
  {
    image: git,
    alt: "git",
    desc: [
      { text: "활용도 6/10" },
      { text: "로컬 저장소의 역할로 브랜치를 나누고 커밋을 진행합니다" },
      { text: "커밋을 되돌리고 삭제할 수 있습니다." },
    ],
  },
  {
    image: github,
    alt: "github",
    desc: [
      { text: "활용도 8/10" },
      { text: "적절한 Commit Convention 을 사용하여 커밋을 진행합니다" },
      { text: "History 를 관리하는 방법을 익혔습니다" },
      {
        text: "pull 과 push, PR, Commit Message 를 사용하여 협업할 수 있습니다",
      },
    ],
  },
  {
    image: notion,
    alt: "notion",
    desc: [
      { text: "활용도 3/10" },
      {
        text: "팀원들과 함께 프로젝트 페이지를 만들고 메모 및 작업내용을 공유해보았습니다",
      },
    ],
  },
  {
    image: sass,
    alt: "sass",
    desc: [
      { text: "활용도 8/10" },
      { text: "SCSS 문법을 사용합니다." },
      { text: "@use, @include, 중첩과 @if, @for 등의 조건문을 사용합니다." },
      { text: "& 를 사용한 결합과 CSS 결합자를 적절히 활용합니다. " },
    ],
  },
  {
    image: bootstrap,
    alt: "bootstrap",
    desc: [
      { text: "활용도 4/10" },
      { text: "설치후, 필요한 모듈만 빼서 사용해보았습니다" },
    ],
  },
];

// MainData - Backend
export const skillBackend = [
  {
    image: mongodb,
    alt: "mongodb",
    desc: [
      { text: "활용도 9/10" },
      { text: "기본적인 CURD 의 사용이 가능합니다." },
      { text: "Mongodb Atlas 를 활용해 클라우드상의 DB 를 활용 합니다." },
      { text: " $regex , $or 등의 기타 조건문들을 사용합니다." },
      { text: "현재 가장 잘 사용하는 DB" },
    ],
  },
  {
    image: firebase,
    alt: "firebase",
    desc: [
      { text: "활용도 6/10" },
      { text: "기본적인 CURD 의 사용이 가능합니다" },
      { text: "FireBase-Auth 를 사용해보았습니다" },
    ],
  },
  {
    image: nodejs,
    alt: "nodejs",
    desc: [
      { text: "활용도 7/10" },
      { text: "REST API 를 위한 API 서버를 구축해보았습니다." },
      { text: "CORS 오류를 해결하고 라우터를 활용할 수 있습니다." },
    ],
  },
];
