function createTable() {
    resetTable();
  const inputs = document.getElementById("multiply").elements;
  const row = inputs[0].value;
  const column = inputs[1].value;

  if (row > 12 || column > 12) {
    alert("This computer does not compute above 12 ):");
  }

  for (let r = 0; r < parseInt(row) && parseInt(row) <= 12; r++) {
    if (parseInt(column) > 12) {
      break;
    }
    const x = document.getElementById("multiplicationTable").insertRow(r);
    for (let c = 0; c < parseInt(column) && parseInt(row) <= 12; c++) {
      const y = x.insertCell(c);
      y.innerHTML = (r + 1) * (c + 1);
    }
  }
}

function resetTable() {
  document.querySelector("#multiplicationTable").innerHTML = ""
}