import LazyLoad from "../lib/LazyLoading.js";

export default function SearchResult({ $app, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "SearchResult";
  $app.appendChild(this.$target);

  this.onClick = onClick;

  this.$target.addEventListener("click", (e) => {
    const $item = e.target.closest(".item");

    if ($item) {
      const { index } = $item.dataset;
      const itemId = this.state.data[index].id;
      this.onClick(index ? itemId : null);
    }
  });

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    LazyLoad();
  };

  this.render = () => {
    console.log(this.state);
    if (this.state.data) {
      this.$target.innerHTML = this.state.data
        .map(
          (cat, index) =>
            `<div class="item" data-index=${index}>
              <img class="lazy" src=${cat.url} alt=${cat.name}/>
              <div>${cat.name}</div>
            </div>`
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
