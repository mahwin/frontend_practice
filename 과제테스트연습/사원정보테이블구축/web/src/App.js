class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }
  async render() {
    try {
      const res = await fetch("./data.json");
      if (res.ok) {
      } else {
        console.log(`${res.status}의 에러가 발생 했습니다.`);
      }
    } catch (error) {
      console.log(`${error} 에러가 발생 했습니다.`);
    }
  }
}

export default App;
