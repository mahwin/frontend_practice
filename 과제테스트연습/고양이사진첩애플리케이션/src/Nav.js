export default function Nav({ $App, initialState }) {
  this.state = initialState;
  console.log(this.state);
  this.$nav = document.createElement("nav");
  this.$nav.className = "Breadcrumb";

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    this.$nav.innerHTML = this.state
      .map((item) => `<div>${item}</div>`)
      .join("");
  };

  $App.appendChild(this.$nav);

  this.render();
}
