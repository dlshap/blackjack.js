document.addEventListener("DOMContentLoaded", function(event) {
  colorTable();
});

function colorTable() {
  var pairTable = document.getElementById("pair-table");
  var tableRows = pairTable.rows;

for (var i = 0; i < tableRows.length; i++) {
  var pairCells = tableRows[i].cells;
  var cell0 = pairCells[0];
  pairCells[0].style.backgroundColor = "Gray";
    for (var j = 1; j < pairCells.length; j++) {
      var c = pairCells[j];
      var v = c.innerHTML;
      switch (v) {
        case "P":
          c.style.backgroundColor = "Blue";
        break;
        case "S":
          c.style.backgroundColor = "Red";
        break;
        case "H":
          c.style.backgroundColor = "Green";
        break;
        case "D":
          c.style.backgroundColor = "Orange";
        break;
      }
    }
  }
}
