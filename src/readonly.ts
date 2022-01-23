export {};

class VisaCard {
  public readonly owner: string;  // 読み取り専用にする。読み取り

  constructor(owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard("りゅーじ");
console.log(myVisaCard.owner);
// myVisaCard.owner = "ハムハム";