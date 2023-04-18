import Throttle from "./Throttle.js";
import NotThrottle from "./NotThrottle.js";

export default function App($App) {
  new Throttle({ $App });
  new NotThrottle({ $App });
}
