export default function Throttle({ $App }) {
  this.state = 0;
  this.timer;
  this.$Container = document.createElement("div");
  this.$Container.className = "Container";
  $App.appendChild(this.$Container);

  this.throttle = () => {
    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.timer = null;
        this.cntState();
      }, 1000);
    } else return;
  };

  window.addEventListener("resize", this.throttle);

  this.cntState = () => {
    this.state += 1;
    this.render();
  };

  this.render = () => {
    this.$Container.innerHTML = `<span class="Cnt">${this.state}</span>`;
    this.$Container.innerHTML += `<h3>리사이즈 이벤트 발생</h3>`.repeat(
      this.state
    );
  };
  this.render();
}
