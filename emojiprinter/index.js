let emojis = [
  0x1f600, 0x1f604, 0x1f34a, 0x1f344, 0x1f37f, 0x1f363, 0x1f370, 0x1f355,
  0x1f354, 0x1f35f, 0x1f6c0, 0x1f48e, 0x1f5fa, 0x23f0, 0x1f579, 0x1f4da,
  0x1f431, 0x1f42a, 0x1f439, 0x1f424,
];

function rangenum(a, b) {
  let numlist = [];
  for (let i = a; i < b; i++) {
    numlist.push(i);
  }
  return numlist;
}
function decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding =
    typeof padding === "undefined" || padding === null
      ? (padding = 2)
      : padding;

  while (hex.length < padding) {
    hex = "0" + hex;
  }
  return hex;
}

let forstuff = rangenum(128000, 129000);

let b = forstuff.map((s) => decimalToHex(s));

let o = b.map((s) => "0x" + s);

console.log(o.map((s) => String.fromCodePoint(s)));
console.log(emojis.map((s) => String.fromCodePoint(s)));
