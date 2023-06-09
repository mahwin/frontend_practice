class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        onSearch(e.target.value);
      }
    });
  }
  render() {}
}

export default SearchInput;
