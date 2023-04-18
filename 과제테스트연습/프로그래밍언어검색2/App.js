import SearchInput from "./SearchInput.js";

export default function App($App) {
  this.state = {};

  const searchInput = new SearchInput({ $App, initialState: "" });
}
