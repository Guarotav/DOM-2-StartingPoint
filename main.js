// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");

root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);

  if (event.target.tagName === "click") {
    addRow();
  }
});


 const row = document.createElement("row");
// row.classList.add("TR");
// root.appendChild(TR);



const addRow = () => {
  //const tbody = document.querySelector("tbody");
//for(let i = 0; i < 10; i++) {
  const row = document.createElement("TD");
  row.classList.add("row");
  root.appendChild(row);
}
 







//   const table = document.getElementById("table");

  

//    const newRow = document.createElement("tr");
//      table.appendChild(newRow);
// };
