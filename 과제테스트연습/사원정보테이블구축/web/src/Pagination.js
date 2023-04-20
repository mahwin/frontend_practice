class Pagination {
  constructor(data) {
    this.data = data;
    this.render();
  }

  setPagenationBtns = (maxPageCnt, pagePerCnt, currentPage) => {
    for (let i = 0; i < maxPageCnt; i++) {
      const button = document.createElement("button");
      if (i === 0) {
        button.setAttribute("class", "arrow");
        button.appendChild(document.createTextNode("<<"));
      } else if (i === maxPageCnt - 1) {
        button.setAttribute("class", "arrow");
        button.appendChild(document.createTextNode(">>"));
      } else {
        button.appendChild(document.createTextNode(i));
      }

      if (i === currentPage) {
        console.log("만족");
        button.style.color = "red";
      }
      console.log(document.querySelector("#pagination"));
      document.querySelector("#pagination").appendChild(button);
    }
  };

  render() {
    let maxPageCnt = 7;
    let pagePerCnt = 5;
    let currentPage = 1;

    this.setPagenationBtns(maxPageCnt, pagePerCnt, currentPage);
  }
}

export default Pagination;
