export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {  // 呼び出しできるようにするメソッド
    return this._owner;
  }

  set secretNumber(secretNumber: number) { // 変更できるようにするメソッド
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

let card = new MyNumberCard("りゅーじ", 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
// card._secretNumber;