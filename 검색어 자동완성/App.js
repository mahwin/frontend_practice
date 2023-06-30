import SearchInput from "./SearchInput.js";
import trie from "./util/makeTrie.js";

export default function App({ target }) {
  this.state = {
    keyword: "",
    searchResult: [],
  };

  this.setState = (newKeyword) => {
    this.state = {
      keyword: newKeyword,
      searchResult: trie.autoComplete(this.state.keyword, 10),
    };
  };

  const searchInput = new SearchInput({
    target: target,
    onChange: (newKeyword) => {
      this.setState(newKeyword);
    },
  });
}
