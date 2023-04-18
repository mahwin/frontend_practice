export default function NotThrottle({ $App }) {
  this.state = 0;

  this.$Container = document.createElement("div");
  this.$Container.className = "Container";

  $App.appendChild(this.$Container);

  window.addEventListener("resize", (e) => {
    this.cntState();
    this.render();
  });

  this.cntState = () => {
    this.state += 1;
  };
  this.render = () => {
    this.$Container.innerHTML = `<span class="Cnt">${this.state}</span>`;
    this.$Container.innerHTML += `<h3>리사이즈 이벤트 발생</h3>`.repeat(
      this.state
    );
  };
  this.render();
}
