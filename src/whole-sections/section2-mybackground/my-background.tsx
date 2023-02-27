import styles from "./my-background.module.css";

const MyBackgorund = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.part_one}>
        <h1>&#128587; 저는 이렇게 성장했습니다.</h1>
        <p>
          화학공학과를 졸업하고, 5년간의 개발자와는 전혀 상관 없는 회사생활을
          경험했습니다.
        </p>
        <p>
          평소 취미로 Java, Kotlin, Python 경험해보고, 결국 Javascript 로 프론트
          엔드에 입문했습니다.
        </p>
        <p> 무한한 가능성을 가진 웹 개발에 제대로 뛰어들고자</p>
        <p>2022년 제대로된 프론트 엔드 공부를 시작했습니다.</p>
        <p>
          어릴때부터 너무나도 해오고 싶었던, 개발자의 꿈을 이루어 내기 위해,
          달려왔습니다.
        </p>

        <p>
          하루에 두시간, 일년동안 그저 취미생활로 즐기던 프로그래밍을, 2022년
          퇴사 후 본격적으로 시작하였습니다.
        </p>
      </div>
      <div className={styles.part_two}>
        <h2>&#128221;저는 이렇게 공부해왔습니다.</h2>
        <p>초기에 가장 큰 비중을 차지하는 것은 UDEMY 강의였습니다.</p>
        <p>
          현재는 개발에 대한 기본 지식을 어느 정도 익히고 나니, 가장 든든한
          선생님은 구글과 DOC가 되었습니다.
        </p>
        <br />
        <p>전공 지식을 쌓기 위해 서적을 주로 참고하여 전반적인 지식을 쌓고,</p>
        <p>
          유튜브, Stack Overflow 의 질문과 답변을 보며 더 깊은 지식을 쌓는데
          도움을 받았습니다.
        </p>
        <p>
          평소에 제가 만들어보고자 하는 것들을 토이 프로젝트를 통해 만들어보는
          것으로 익히고
        </p>
        <p>오류를 처리해가며 코드 사용에 익숙해 질 수 있었습니다.</p>
        <br />
        <p>
          하드스킬로는 React 와 Next.js, TypeScript 를 어느 정도 자신 있게
          사용할 수 있으며
        </p>
        <p>
          현재는 Node.js 를 활용해 완벽히 분리되어있는 REST API 를 구현하는 토이
          프로젝트를 진행하고 있습니다.
        </p>
        <br />
        <p>
          독학으로 하기 힘든 팀 프로젝트의 경험이나 실무의 과제를 경험하고
          발전시키기 위해
        </p>
        <p>Wanted PreOnborading Frontend 인턴십 - 9차의 테스트를 통과하여</p>
        <p>
          현재 팀원들과 함께 Git Organization 과 Notion 을 활용하여 기업 과제를
          수행하며 강의도 함께 듣고 있습니다.
        </p>
      </div>
    </div>
  );
};
export default MyBackgorund;
