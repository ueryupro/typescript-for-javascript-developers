export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) { // returnしない。なので型はいらない。
    this.name = name;
    this.age = age;
  }

  profile(): string { //インスタンスメソッドっていう。
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person("Taro", 30);
console.log(taro.profile());