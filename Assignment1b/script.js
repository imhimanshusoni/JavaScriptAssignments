let n = parseInt(window.prompt("Enter the number of fields: "));
let objects = {};

for (let x = 0; x < n; ++x) {
  let keys = window.prompt("Enter key: ");
  let values = window.prompt("Enter value: ");
  objects[keys] = values;
}

for (let i in objects) {
  document.write(i + " : " + objects[i]);
  document.write("<br>");
}
