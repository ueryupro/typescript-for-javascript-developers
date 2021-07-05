export {};

abstract class Animal {
  abstract cry(): string; //abstractで抽象化しておくことでメンバの継承先での実装もれを防ぐ。
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}
