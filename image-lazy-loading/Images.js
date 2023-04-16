export default function Images({ $App, initialState }) {
  this.state = initialState;

  this.$target = document.createElement("div");
  this.$target.className = "ImageWrapper";

  this.setState = (newState) => {
    this.state = newState;
    console.log(this.state);
    this.render();
  };

  this.render = () => {
    if (this.state.data) {
      this.$target.innerHTML = this.state.data
        .map((el) => `<div class="Image"><img src=${el.url}></div>`)
        .join("");
    }
  };

  this.render();

  $App.appendChild(this.$target);
}
