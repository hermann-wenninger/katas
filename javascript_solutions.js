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

// recursion
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    console.log(power(base, exponent - 1) / 2);
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 4));
