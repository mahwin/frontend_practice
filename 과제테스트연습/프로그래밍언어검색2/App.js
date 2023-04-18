import SearchInput from "./SearchInput.js";
import { request } from "./api.js";

export default function App($App) {
  this.state = { keyword: "", languages: [] };

  const searchInput = new SearchInput({
    $App,
    initialState: "",
    onChange: async (keyword) => {
      this.setState({ keyword });
      try {
        const res = await request(this.state.keyword);
        this.setState({ languages: res });
      } catch (e) {
        console.warn(e);
      }
    },
  });

  this.setState = (newState) => {
    this.state = { ...this.state, ...newState };
  };
}
