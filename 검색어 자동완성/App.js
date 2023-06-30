import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";
import trie from "./util/makeTrie.js";

export default function App({ target }) {
  this.state = {
    keyword: "",
    searchResult: [],
  };

  this.setState = (newKeyword) => {
    console.log(newKeyword);
    this.state = {
      keyword: newKeyword,
      searchResult: trie.autoComplete(newKeyword, 10),
    };

    suggestion.setState({
      searchResult: this.state.searchResult,
    });
  };

  const searchInput = new SearchInput({
    target: target,
    onChange: (newKeyword) => {
      this.setState(newKeyword);
    },
  });

  const suggestion = new Suggestion({
    target: target,
  });
}
