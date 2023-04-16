import LazyLoad from "./LazyLoading.js";

export default function Images({ $App, initialState }) {
  this.state = initialState;

  this.$target = document.createElement("div");
  this.$target.className = "ImageWrapper";

  this.setState = (newState) => {
    this.state = newState;

    this.render();
  };

  this.render = () => {
    if (this.state.data) {
      this.$target.innerHTML = this.state.data
        .map(
          (el) =>
            `<div class="Image"><img class="lazy" data-src=${el.url}></div>`
        )
        .join("");
    }
    LazyLoad();
  };

  this.render();
  // LazyLoad();

  $App.appendChild(this.$target);
}
