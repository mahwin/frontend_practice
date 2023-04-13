import SearchInput from "./SearchInput.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    //TODO
  };

  const searchInput = new SearchInput({ $target, initialState: "" });
}
