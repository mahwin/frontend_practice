export default function Slides({ $App }) {
  this.state = Array.from({ length: 30 }, (_, i) => i);
  this.$target = document.createElement("div");
  this.$target.classList = "Slides";
  this.$target.style.overflow = "hidden";
  this.$target.style.width = "300vw";
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = this.state
      .map((el) => `<div class="Slide">${el}</div>`)
      .join("");
  };

  this.render();

  $App.appendChild(this.$target);
}
