class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    //다크 모드
    const $themeInput = document.createElement("input");
    $themeInput.type = "checkbox";

    $themeInput.addEventListener("click", () => {
      alert("클릭");
    });

    $searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        onSearch(e.target.value);
      }
    });
    $target.appendChild($themeInput);
  }
  render() {}
}

export default SearchInput;
