export {};

let name = "Ryuji";

name = "Ueda";

let NickName = "Ryuji" as const;
NickName = "Ryuji";

let profile = {
  name: "ryuji", //readonlyが勝手につく
  height: 170,
} as const;


// profile.name = "ueda";
// profile.height = 180;
