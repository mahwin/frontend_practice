import SearchInput from "./SearchInput.js";
export default function App({ target }) {
  this.state = {
    keyword: "",
  };

  this.setState = (newKeyword) => {
    this.state = {
      keyword: newKeyword,
    };
    console.log(this.state);
  };

  const searchInput = new SearchInput({
    target: target,
    onChange: (newKeyword) => {
      this.setState(newKeyword);
    },
  });
}
