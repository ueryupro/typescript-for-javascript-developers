export {};

class Person {
  public name: string; //どこからでも呼び出し可能
  protected age: number; //クラス内でしか呼出できない。インスタンスメソッドで使うとか
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) { // returnしない。なので型はいらない。
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string { //インスタンスメソッドっていう。
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Andoroid extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality)
  }

  profile(): string {
      return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

let taro = new Person("Taro", 30, "Japan");
console.log(taro.profile()); //インスタンスメソッド内ではprivateでも参照可能。thisというオブジェクトを介して参照しているため
console.log(taro.name);
let ryuji = new Andoroid("Ryuji", 25, "新宿");
console.log(ryuji.profile());
// console.log(taro.age); //クラスないでしか使われへんからeroorになる。