export {};

class Me {
  // インスタンス作成時にいちいちnew を使わなくていい
  static isProgrammer: boolean = true;
  static firstName: string = "Ryuji";
  static lastName: string = "Ueda";

  static work() {
    return `${this.firstName}ちゃんとTS勉強してるか〜？？`;
  }
}

let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());