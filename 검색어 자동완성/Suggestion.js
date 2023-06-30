export default function Suggestion({ target, searchResult }) {
  this.element = document.createElement("ul");
  this.element.className = "Suggestion";
  this.element.style.display = "none";
  target.appendChild(this.element);

  this.state = {
    searchResult: searchResult,
  };

  this.setState = (newState) => {
    this.state = {
      ...newState,
    };
    console.log(newState);
    this.render();
  };

  this.render = () => {
    const infos = this.state.searchResult;
    if (infos.length) {
      this.element.innerHTML = `${infos
        .map((info) => `<li>${info.word}</li>`)
        .join("")}`;
      this.element.style.display = "block";
    } else {
      this.element.style.display = "none";
    }
  };
}
