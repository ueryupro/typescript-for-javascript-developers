export {};

//クラスは一つしか継承できない。単一継承
//インターフェイスなら複数個実装（継承）できる。多重継承

class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {}

interface Kenja {
  ionazun(): void; //インターフェイスの中で定義するメソッドはシグネチャと呼ぶ。
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
