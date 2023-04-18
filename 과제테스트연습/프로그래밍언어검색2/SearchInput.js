export default function SearchInput({ $App, initialState }) {
  this.state = initialState;

  this.$form = document.createElement("form");
  this.$form.className = "SearchInput";

  this.render = () => {
    const input = document.createElement("input");
    input.className = "SearchInput__input";
    input.type = "text";
    input.placeholder = "프로그램 언어를 입력하세요.";
    input.value = "Script";

    this.$form.appendChild(input);

    $App.appendChild(this.$form);
  };

  this.render();
}
