export {};

class Person {
  // constructor()の中で引数にアクセス修飾子を付けることで初期化処理できる
  constructor(public name: string, protected age: number) {}
}

const me = new Person("りゅーじ", 25);
console.log(me);

