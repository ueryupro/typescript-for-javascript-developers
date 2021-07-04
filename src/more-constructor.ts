export {};

class Person {

  constructor(public name: string, protected age: number) {}
  //　↑引数にアクセス修飾詞をつけることで自動で初期化してくれる。TS独特の機能
}

const me = new Person("ハムさん", 43);
console.log(me);
