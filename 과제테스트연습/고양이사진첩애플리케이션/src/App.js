import Nav from "./Nav.js";

export default function App($App) {
  const nav = new Nav({ $App, initialState: ["root", "노란 고양이"] });
}
