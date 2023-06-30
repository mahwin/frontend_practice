export default function SearchInput({ target, onChange }) {
  this.element = document.createElement("input");
  this.element.className = "SearchInput";
  this.element.placeholder = `단어를 검색해 보세요!`;

  this.element.addEventListener("keyup", (e) => {
    onChange(e.target.value);
  });
  target.appendChild(this.element);
}
