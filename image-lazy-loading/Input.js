export default function Input({ $App, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  this.$target = document.createElement("div");
  this.$target.className = "InputWrapper";
  this.$target.placeholder = "이미지 레이지 로딩에 대한 연습 입니다.";
  $App.appendChild(this.$target);

  this.setState = () => {};

  this.render = () => {
    this.$target.innerHTML = `<input class="Search"><button class="random">랜덤 이미지 생성</button>`;
  };

  this.$target.addEventListener("click", (e) => {
    if (e.target.className === "random") onClick();
  });

  this.render();
}
