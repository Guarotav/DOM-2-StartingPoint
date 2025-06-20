/*
[✅] Add rows to the grid
[✅] Add columns to the grid
[ ] Remove rows from the grid
[ ] Remove columns from the grid
[ ] Select a color from a dropdown menu of colors
[ ] Click on a single cell, changing its color to the currently selected color
[ ] Fill all uncolored cells with the currently selected color
[ ] Fill all cells with the currently selected color
[ ] Clear all cells / restore all cells to their original/initial color
[ ] Click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
*/



const tbody = document.querySelector("tbody");
const addRowBtn = document.getElementById("add-row");
const addColumnBtn = document.getElementById("add-column");


/////////////////////////////-------->// Adds a row to the grid when the "Add Row" button is clicked <---- //////////////////////

addRowBtn.addEventListener("click", () => {
  const columnCount = tbody.rows[0] ? tbody.rows[0].cells.length : 0;
  addRowToGrid(columnCount);
});

function addRowToGrid(columnCount) {
  const newRow = document.createElement("tr");
  for (let i = 0; i < columnCount; i++) {
    const cell = document.createElement("td");
    newRow.appendChild(cell);
}
  tbody.appendChild(newRow);
}

////////////////////////////////--------> Adds a column to the grid when the "Add Column" button is clicked <---- //////////////////////
addColumnBtn.addEventListener("click", () => {
  addColumnToGrid();
});

function addColumnToGrid() {
  // Add one cell to each existing row
  for (let row of tbody.rows) {
    const newCell = document.createElement("td");
    row.appendChild(newCell);
  }
}


/////////////////////////////-------->// Remove rows from the grid <---- //////////////////////

