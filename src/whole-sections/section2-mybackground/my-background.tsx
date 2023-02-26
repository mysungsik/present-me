import styles from "./my-background.module.css";

const MyBackgorund = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.part_one}>
        <h1>저는 이렇게 성장했습니다.</h1>
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
        <h2>저는 이렇게 공부해왔습니다.</h2>
        <p>
          Udemy의 강의와, YouTube, 책과, Official DOCS 를 보고 스스로
          공부했습니다.
        </p>
        <p>
          남들보다 조금 느릴지라도, 결국 스스로 해내는 개발자. 제가 나아고자
          하는 방향입니다.
        </p>
        <p>
          흥미로 시작한 개발자가 되기 위한 열정이, 하나하나의 웹사이트를
          만들때마다, 더욱 커졌습니다.
        </p>
        <p>
          멋진 디자인과 빠른 UX, 유저들에게 필요한 기능을 생각한 대로 펼쳐보고
          싶습니다.
        </p>
      </div>
    </div>
  );
};
export default MyBackgorund;
