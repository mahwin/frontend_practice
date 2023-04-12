export default function SearchInput({ $app, onSearch }) {
  this.$target = document.createElement("input");
  this.$target.className = "SearchInput";
  this.$target.placeholder = "고양이를 검색해보세요.|";
  $app.appendChild(this.$target);
  this.$target.focus();

  this.onSearch = onSearch;

  this.$target.addEventListener("click", (e) => {
    e.target.value = "";
  });

  this.$target.addEventListener("keyup", (e) => {
    if (e.key === 13) {
      this.onSearch(e.target.value);
    }
  });
}
