const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $header = document.createElement("header");
    this.$header = $header;

    const $themeInput = document.createElement("input");
    this.$themeInput = $themeInput;
    $themeInput.type = "checkbox";

    $themeInput.addEventListener("click", () => {
      const theme = window.matchMedia("(prefers-color-scheme:dark)").matches;
      if (theme && !$themeInput.checked) {
        //다크
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else if (theme && $themeInput.checked) {
        //라이트
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    });

    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.!";

    $searchInput.className = "SearchInput";

    $searchInput.addEventListener("keyup", (e) => {
      if (e.code === "Enter") {
        onSearch(e.target.value);
      }
    });

    this.$header.appendChild(this.$themeInput);
    this.$header.appendChild(this.$searchInput);

    $target.appendChild(this.$header);
  }
  render() {}
}
