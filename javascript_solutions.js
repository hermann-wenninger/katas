//chessboard
let size = 19;
let board = "";

for (let y = 1; y < size; y++) {
  for (let x = 1; x < size; x++) {
    if (y % 2 == 0) {
      board += " #";
    } else {
      board += "# ";
    }
  }
  board += "\n";
}
console.log(board);
