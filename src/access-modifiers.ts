export {};

class Person {
  public name: string; //publicはアクセス（呼び出し）可能、基本書かない
  // private age: number; //privateはアクセス（呼び出し）不可能
  protected age: number; //privateはアクセス（呼び出し）不可能
  protected nationality: string; //子classならアクセス（呼び出し）可能

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

let taro = new Person("Taro", 30, "Japan");　//インスタンス　
let ryuji = new Android("Taro", 30, "Japan");　//インスタンス　

console.log(taro.profile());
console.log(ryuji.profile());
console.log(taro.name);
// console.log(taro.age);
