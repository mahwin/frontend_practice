export default function Input({ $App, initialState }) {
  this.$target = document.createElement("div");
  this.$target.className = "InputWrapper";
  this.$target.placeholder = "이미지 레이지 로딩에 대한 연습 입니다.";
  $App.appendChild(this.$target);

  this.setState = () => {};

  this.render = () => {
    this.$target.innerHTML = `<input class="Search"><button>랜덤 이미지 생성</button>`;
  };

  this.render();
}
