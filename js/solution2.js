// Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100

document.body
const elem = document.getElementById("tb");
function createTable(elem, cols, rows) {
  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = j + 1 + i * 10;
      tr.append(td);
    }
    table.append(tr);
  }
  elem.append(table);
}

createTable(elem, 10, 10);


