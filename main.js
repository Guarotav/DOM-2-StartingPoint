const root = document.getElementById("root");
const addRow = document.getElementById("add-row");
const addColumn = document.getElementById("add-column");


root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

addRow.addEventListener("click", () => {
  addRowToGrid(columnCount);
});

const tbody = document.querySelector("tbody");
columnCount = tbody.rows[0].cells.length;


// Add rows to the grid
function addRowToGrid(columnCount) {
  const newRow = document.createElement("tr");

  for (let i = 0; i < columnCount; i++) {
    const cell = document.createElement("td");
    newRow.append(cell);
  }
  tbody.append(newRow);
}



//add columns to the grid
addColumn.addEventListener("click", () => {
  addColumnToGrid();
});

function addColumnToGrid() {
   const rows = document.querySelectorAll("tr");

   rows.forEach((row)=>{
    const newCol = document.createElement("td");
    row.append(newCol);
   })
   columnCount ++;

}



//remove rows from the grid







//remove columns from the grid







//select a color from a dropdown menu of colors
 
 
 
 
 
 

//click on a single cell, changing its color to the currently selected color
 
 
 
 
 
 
//fill all uncolored cells with the currently selected color







// fill all cells with the currently selected color
 






//clear all cells/restore all cells to their original/initial color
 






//click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
