import Pagination from "./Pagination.js";
import Table from "./Table.js";
class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }
  async render() {
    try {
      const res = await fetch("./src/data.json");
      if (res.ok) {
        const data = await res.json();
        new Table(data);
        new Pagination(data);
      } else {
        console.log(`${res.status}의 에러가 발생 했습니다.`);
      }
    } catch (error) {
      console.log(`${error} 에러가 발생 했습니다.`);
    }
  }
}

export default App;
