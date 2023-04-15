export default function Nodes({ $App, initialState }) {
  const $target = document.createElement("section");
  this.state = initialState;
  $target.className = "Nodes";

  console.log(this.state);

  this.setState = (newState) => {
    this.state = newState;

    this.render();
  };

  this.render = () => {
    $target.innerHTML = this.state
      .map(
        (el) =>
          `<div class="Node">
            <img src=${
              el.type === "DIRECTORY"
                ? "./assets/directory.png"
                : "./assets/prev.png"
            }>        
            <div>${el.name}</div>
            </div>`
      )
      .join("");
  };
  $App.appendChild($target);
}
