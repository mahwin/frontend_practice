export default function SearchInput({ $App, initialState, onChange }) {
  this.state = initialState;

  this.onChange = onChange;

  this.$form = document.createElement("form");
  this.$form.className = "SearchInput";

  this.render = () => {
    const input = document.createElement("input");
    input.className = "SearchInput__input";
    input.type = "text";
    input.placeholder = "프로그램 언어를 입력하세요.";
    input.style = "onfocus";

    this.$form.appendChild(input);

    $App.appendChild(this.$form);

    input.addEventListener("keyup", (e) => {
      onChange(e.target.value);
    });
  };

  this.render();
}
