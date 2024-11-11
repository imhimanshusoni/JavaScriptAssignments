function app() {
  const n = Number(prompt("Enter number of players: "));
  if (isNaN(n)) {
    alert("Not a valid number");
    return;
  }
  const players = [];

  for (let i = 0; i < n; ++i) {
    let name = prompt(`Enter name of player ${i + 1}: `);
    let score = Number(prompt(`Enter the score of player ${i + 1}: `));
    if (isNaN(score)) {
      alert("Not a valid number");
      return;
    }
    players.push({
      playerName: name,
      playerScore: score,
    });
  }

  players.sort((obj1, obj2) => {
    if (obj1.playerScore == obj2.playerScore) {
      if (obj1.playerName > obj2.playerName) {
        return 1;
      } else return -1;
    } else {
      if (obj1.playerScore < obj2.playerScore) {
        return 1;
      } else return -1;
    }
  });

  for (let i = 0; i < n; ++i) {
    let name = players[i].playerName;
    let score = players[i].playerScore;
    document.write(`<h2>${name}: ${score}</h2>`);
  }
}

app();
