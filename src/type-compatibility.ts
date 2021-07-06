export {};

let fooCompatible: any;
var barCompatible: string = "TypeScript";

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
var barIncompatible: number = 1;

// fooIncompatible = barIncompatible; //型も互換性がない

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, "ryuji"); //オブジェクトの型は気にしないがオブジェクトの持つメンバの型を見ている
console.log({ me });
