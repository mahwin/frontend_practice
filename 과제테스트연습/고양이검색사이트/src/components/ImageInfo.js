export default function ImageInfo({ $app, initialState, onBackClick }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "ImageInfo";
  $app.appendChild(this.$target);

  this.onBackClick = onBackClick;

  //esc
  this.$target.addEventListener("click", (e) => {
    if (e.key === "Escape") this.onBackClick();
  });

  //모달 영역 밖이나, 우측 상단의 닫기를 누를 때
  this.$target.addEventListener("click", (e) => {
    const $className = e.target.classList;
    if ($className.contains("ImageInfo") || $className.contains("close")) {
      this.onBackClick();
    }
  });

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (this.state.image) {
      const { name, url, temperament, origin } = this.state.image;
      this.$target.innerHTML = `
      <div class="content-wrapper">
        <div class="title">
          <span>${name}</span>
          <div class="close"</div>
        </div>
        <img src=${url} alt=${name}/>
        <div class="description">
          <div>성격 : ${temperament}</div>
          <div>태생 : ${origin}</div>
        </div>
      </div>`;
    }
    this.$target.style.display = this.state.visible ? "block" : "none";
  };

  this.render();
}
