const digitForm = document.querySelector("form.digit");
const digitInput = document.querySelector("input.digit");
const digitBtn = document.querySelector("button.digit");
const numberBtns = document.querySelectorAll(".btn");

let correct; // 정답 숫자
let userSelectedDisit = 3; //초기 자릿수 값
let testNums = [];

// 자릿수 선택 완료시 === 게임 시작 버튼 클릭시
digitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  correct = randomPick(userSelectedDisit);

  //개발용
  document.querySelector("div.dev").innerHTML = `${correct}`;

  //전에 했던 게임이 있으면 삭제
  if (document.querySelector("div.trial")) {
    document.querySelector("div.trial").remove();
  }

  const trial = document.createElement("div");
  trial.className = "trial";

  const inputContainer = document.createElement("div");
  inputContainer.className = "inputContainer";

  for (let i = 0; i < userSelectedDisit; i++) {
    const input = document.createElement("input");
    input.className = "number";
    input.name = i;
    input.addEventListener("change", validatorMinMax);
    inputContainer.appendChild(input);
  }
  trial.appendChild(inputContainer);

  const getScoreBtn = document.createElement("button");
  getScoreBtn.className = "score";
  getScoreBtn.innerText = "결과 보기";
  getScoreBtn.addEventListener("click", (event) => {
    if (testNums.join("").length != userSelectedDisit) {
      alert(`${userSelectedDisit} 자리의 숫자가 필요합니다.`);
    } else {
      calScore(testNums);
    }
  });
  trial.appendChild(getScoreBtn);
  document.querySelector("body").appendChild(trial);
});

//select 이벤트 추적
const digitSelect = () => {
  const select = document.querySelector("select.digit");
  userSelectedDisit = select.options[select.selectedIndex].value;
};

// 0~9로 숫자 강제
const validatorMinMax = (el) => {
  let value = Number(el.target.value);
  const isNumber = Number.isInteger(value);
  //숫자가 아니면 0으로 채움.
  if (!isNumber) {
    el.target.value = 0;
    value = 0;
  } else if (value > 9) {
    el.target.value = 9;
    value = 9;
  } else if (value < 0) {
    el.target.value = 0;
    value = 0;
  }

  testNums[el.target.name] = value;
  console.log(testNums);
};

// 입력받은 자릿수의 랜덤숫자 생성 함수
function randomPick(num) {
  //유저가 선택할 숫자 배열 크기 설정 및 null로 채움
  testNums = Array.from({ length: num }, () => null);
  let randomSet = new Set();
  while (randomSet.size < num) {
    randomSet.add(Math.floor(Math.random() * 10));
  }
  return [...randomSet];
}

function calScore(userNum) {
  const scores = { strike: 0, ball: 0 }; //스트라이크 점수, 볼 점수
  for (let i = 0; i < userNum.length; i++) {
    const num = userNum[i];
    if (num === correct[i]) {
      scores.strike++;
      continue;
    } else if (correct.includes(num)) scores.ball++;
  }
  console.log(scores);
  return scores;
}
