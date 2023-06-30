export default function Suggestion({ target, searchResult }) {
  this.element = document.createElement("ul");
  this.element.className = "Suggestion";
  this.element.style.display = "none";
  target.appendChild(this.element);

  this.state = {
    searchResult: searchResult,
    selectedIndex: 0,
  };

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };
    console.log(this.state);
    this.render();
  };

  this.render = () => {
    const infos = this.state.searchResult;
    const selectedIndex = this.state.selectedIndex;
    console.log(selectedIndex);
    if (infos.length) {
      this.element.innerHTML = `${infos
        .map(
          (info, i) =>
            `${
              i === selectedIndex
                ? `<li class="selected">${info.word}</li>`
                : `<li>${info.word}</li>`
            }`
        )
        .join("")}`;
      this.element.style.display = "block";
    } else {
      this.element.style.display = "none";
    }
  };

  window.addEventListener("keyup", (e) => {
    const activateKey = ["ArrowUp", "ArrowDown", "Enter"];
    const lastIndex = this.state.searchResult.length - 1;
    console.log(lastIndex);
    if (activateKey.includes(e.key)) {
      switch (e.key) {
        case "ArrowUp":
          this.setState({
            selectedIndex:
              this.state.selectedIndex === 0
                ? lastIndex
                : this.state.selectedIndex - 1,
          });
          break;
        case "ArrowDown":
          this.setState({
            selectedIndex:
              this.state.selectedIndex === lastIndex
                ? 0
                : this.state.selectedIndex + 1,
          });
          break;
        case "Enter":
          selectLanguage(this.state.searchResult[this.state.selectedIndex]);
          break;
      }
    }
  });
}
