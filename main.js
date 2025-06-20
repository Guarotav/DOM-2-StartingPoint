/*
[✅] Add rows to the grid
[✅] Add columns to the grid
[✅] Remove rows from the grid
[✅] Remove columns from the grid
[✅] Select a color from a dropdown menu of colors
[✅] Click on a single cell, changing its color to the currently selected color
[✅] Fill all uncolored cells with the currently selected color
[✅] Fill all cells with the currently selected color
[✅] Clear all cells / restore all cells to their original/initial color
[✅] Click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
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


/////////////////////////////-------->// Remove rows from the grid <---- ////////////////////////////////////////////////
// Remove Button added to HTML under id "remove-row"


const removeRowBtn = document.getElementById("remove-row");
removeRowBtn.addEventListener("click", () => {
  if (tbody.rows.length > 0) {
    tbody.deleteRow(tbody.rows.length - 1);
  }
});


/////////////////////////////-------->// Remove columns from the grid <---- ////////////////////////////////////////////////
const removeColumnBtn = document.getElementById("remove-column");
removeColumnBtn.addEventListener("click", () => {
  if (tbody.rows.length > 0 && tbody.rows[0].cells.length > 0) {
    for (let row of tbody.rows) {
      row.deleteCell(row.cells.length - 1);
    }
  }
});


//////////////////////////////-------->// Select a color from a dropdown menu of colors <---- ////////////////////////////////////////////////
const colorSelect = document.getElementById("color-select");
colorSelect.addEventListener("change", (event) => {
  const selectedColor = event.target.value;
  document.documentElement.style.setProperty('--selected-color', selectedColor);
});


/////////////////////////////-------->// Click on a single cell, changing its color to the currently selected color <---- //////////////////////
tbody.addEventListener("click", (event) => {
  if (event.target.tagName === "TD") {
    const selectedColor = getComputedStyle(document.documentElement).getPropertyValue('--selected-color');
    event.target.style.backgroundColor = selectedColor;
  }
});

/////////////////////////////-------->// Fill all uncolored cells with the currently selected color <---- //////////////////////
const fillUncoloredBtn = document.getElementById("fill-grid");
fillUncoloredBtn.addEventListener("click", () => {
  const selectedColor = getComputedStyle(document.documentElement).getPropertyValue('--selected-color'.trim());
  for (let row of tbody.rows) {
    for (let cell of row.cells) {
      if (!cell.style.backgroundColor || cell.style.backgroundColor === "transparent") {
        cell.style.backgroundColor = selectedColor;
      }

    }
  }
});


/////////////////////////////////-------->// Clear all cells / restore all cells to their original/initial color <---- //////////////////////
let clearCellsBtn = document.getElementById("clear-grid");
clearCellsBtn.addEventListener("click", () => {
  for (let row of tbody.rows) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = ""; 
    }
  }
});

row.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

//////////-------->// Click and hold (mouseover) from a single cell (start) to a different cell (end) <---- //////

let isMouseDown = false;


tbody.addEventListener("mousedown", (event) => {
  if (event.target.tagName === "TD") {
    isMouseDown = true;
    const selectedColor = getComputedStyle(document.documentElement).getPropertyValue('--selected-color').trim();
    event.target.style.backgroundColor = selectedColor;
  }
});


document.addEventListener("mouseup", () => {
  isMouseDown = false;
});


tbody.addEventListener("mouseover", (event) => {
  if (isMouseDown && event.target.tagName === "TD") {
    const selectedColor = getComputedStyle(document.documentElement).getPropertyValue('--selected-color').trim();
    event.target.style.backgroundColor = selectedColor;
  }
});

