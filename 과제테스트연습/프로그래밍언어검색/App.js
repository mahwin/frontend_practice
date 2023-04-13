import SelectedLanguages from "./SelectedLanguages.js";
import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

import { fetchLanguages } from "./api.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguges: [],
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
    });
    selectedLanguages.setState(this.state.selectedLanguges);
  };

  const selectedLanguages = new SelectedLanguages({
    $target,
    initialState: [],
  });

  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({
          fetchedLanguages: languages,
        });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      cursor: 0,
      items: [],
    },
    onSelect: (language) => {
      alert(language);
      const nextSelectedLanguages = [...this.state.selectedLanguges];

      const index = nextSelectedLanguages.findIndex(
        (selectedLanguges) => selectedLanguges === language
      );

      if (index > -1) {
        nextSelectedLanguages.splice(index, 1);
      }
      nextSelectedLanguages.push(language);

      this.setState({
        ...this.state,
        selectedLanguges: nextSelectedLanguages,
      });
    },
  });
}
