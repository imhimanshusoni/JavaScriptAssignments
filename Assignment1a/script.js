let n = parseInt(window.prompt("Enter the number of users: "));
for (let i = 0; i < n; ++i) {
  let names = window.prompt("Enter the name " + Number(i + 1) + " : ");
  document.write(names);
  document.write("<br>");
}
