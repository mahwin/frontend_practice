import Slides from "./Slides.js";

export default function App($App) {
  console.log($App);
  this.state = "";
  const slides = new Slides({ $App });
}
