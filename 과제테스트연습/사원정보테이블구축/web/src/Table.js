class Table {
  constructor(data) {
    this.data = data;
    this.titles = Object.keys(this.data[0]);
    console.log(this.data);
    this.render();
  }

  displayTableHead = () => {
    const thead = document.createElement("thead");
    const theadTr = document.createElement("tr");

    // state와 연결해야 함.
    for (let i = 0; i < this.titles.length; i++) {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(this.titles[i]));
      theadTr.appendChild(th);
    }
    thead.appendChild(theadTr);
    return thead;
  };

  displayTableData = (data) => {
    const tr = document.createElement("tr");
    for (let i = 0; i < this.titles.length; i++) {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(data[this.titles[i]]));
      tr.appendChild(td);
    }
    return tr;
  };

  render() {
    const table = document.createElement("table");

    //Table header
    const thead = this.displayTableHead();
    table.appendChild(thead);

    //데이터 붙이기
    const tbody = document.createElement("tbody");
    for (let i = 0; i < this.data.length; i++) {
      const tbodyTr = this.displayTableData(this.data[i]);
      tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);

    document.getElementById("table").appendChild(table);
  }
}

export default Table;
