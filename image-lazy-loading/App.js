import Input from "./input.js";

export default function App($App) {
  this.state = "";

  const input = new Input({ $App, initialState: "" });
}
