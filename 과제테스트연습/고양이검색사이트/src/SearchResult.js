class SearchResult {
  $searchResult = null;
  data = null;
  lazyloadImages = null;
  onClick = null;
  loading = false;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);
    console.log("initialData", initialData);
    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  lazyLoad(e) {
    const images = document.querySelectorAll("img.lazy");
    images.forEach((img) => {
      // 각 이미지마다

      const rect = img.getBoundingClientRect().top;

      if (rect <= window.innerHeight) {
        // 이미지가 보일 타이밍을 계산
        const src = img.getAttribute("data-lazy"); // img 태그의 data-lazy에 저장해둔 이미지 경로를 붙여준다.
        img.setAttribute("src", src);
        img.classList.add("fade"); // 트랜지션 추가
      }
    });
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData.data;
    this.loading = nextData.loading;
    this.render();
  }

  render() {
    if (this.loading && this.data === null) {
      this.$searchResult.innerHTML = `<h3>Loading...</h3>`;
    } else if (this.data) {
      this.$searchResult.innerHTML = this.data
        .map(
          (cat, i) => `
          <div class="item">
          ${
            i < 8
              ? `<img class='fade' src=${cat.url} alt=${cat.name} />`
              : `<img class="lazy" data-lazy=${cat.url} alt=${cat.name} />`
          }            
          </div>
        `
        )
        .join("");
      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data[index]);
        });
      });

      window.addEventListener("scroll", this.lazyLoad);
      window.addEventListener("resize", this.lazyLoad);
      window.addEventListener("orientationChange", this.lazyLoad);
    }
  }
}
