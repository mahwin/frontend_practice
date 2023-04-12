import LazyLoad from "../lib/LazyLoading";

export default function SearchResult({ $app, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "SearchResult";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    LazyLoad();
  };

  this.render = () => {
    if (this.state) {
      this.$target.innerHTML = this.state
        .map(
          (cat, index) =>
            `
      <div class='item' data-index=${index}>
        <img class="lazy" src=${cat.url} alt=${cat.name}/>
      </div>
      `
        )
        .join("");
    }
  };

  this.onClick = onClick;

  this.$target.addEventListener("click", (e) => {
    console.log(e.target);
    const $searchItem = e.target.closest(".item");
    const { index } = $searchItem.dataset;
    this.onClick(this.state[index]);
  });

  this.render();
  LazyLoad();
}
