const TEMPLATE = '<input type="text">';

class SearchInput {
  lastKeywords = [];
  constructor({ $target, onClick, onSearch }) {
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
    $searchInput.autofocus = "true";

    $searchInput.addEventListener("keyup", (e) => {
      if (e.code === "Enter") {
        onSearch(e.target.value);
      }
    });

    $searchInput.addEventListener("click", (e) => {
      if (e.target.value.length > 0) e.target.value = "";
    });

    this.$header.appendChild(this.$themeInput);
    this.$header.appendChild(this.$searchInput);

    const $lastKeywords = document.createElement("div");
    $lastKeywords.className = "LastKeywords";

    $searchInput.addEventListener("keyup", (e) => {
      if (e.key === 13) {
        const keyword = e.target.value;
        onSearch(keyword);

        this.$searchInput.value = "";
        this.set_lastKeywords(keyword, 1);
        this.get_lastKeywords($lastKeywords);
      }
    });

    $lastKeywords.addEventListener("click", (e) => {});

    $target.appendChild(this.$header);
  }
  render() {}
}
