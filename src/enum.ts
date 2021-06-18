export {};

enum Months { // オブジェクトの中に要素を書いて番号が自動的に振られる
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum Colors {
  red = "#FF0000",
  white = "FFFFFF",
  green = "008000",
  bkue = "#0000FF",
  black = "000000"
}

let green = Colors.green;
console.log({green});
