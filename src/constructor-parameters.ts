export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let ryuji = new Person ("Ryuji", 25);
console.log(ryuji);

type PersonType = typeof Person

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["ryuryu", 60];
const ryuryu = new Person(...profile);
console.log(ryuryu);

type MyConstructorParameters<
    T extends abstract new (...args: any) => any
  > = T extends abstract new (...args: infer P) => any ? P : never;
