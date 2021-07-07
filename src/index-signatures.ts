export {};

interface Profile {
  name: string;
  undertwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile= { name: "ueda", undertwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = "ryuji";
profile.age = 25;
profile.nationality = "Japan";
