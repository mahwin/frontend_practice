import Input from "./input.js";
import Images from "./Images.js";

import { request } from "./api.js";

export default function App($App) {
  this.state = [];

  const input = new Input({
    $App,
    initialState: [],
    onClick: async () => {
      try {
        const res = await request();
        this.setState(res);
      } catch (e) {
        throw new Error(e);
      }
    },
  });

  const images = new Images({ $App, initialState: [] });

  this.setState = (newState) => {
    this.state = newState;
    images.setState(this.state);
  };
}
