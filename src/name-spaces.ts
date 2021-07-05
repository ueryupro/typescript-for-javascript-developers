export {};

//namespaceは名前空間。クラスが所属するフォルダ的な場所。複数の同名のクラスが競合するときに使う。


namespace Japanese {
  export namespace Tokyo {
    export class Person { // 外からもアクセスできるようにexportをつける
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person { // 外からもアクセスできるようにexportをつける
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("ハムさん");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("ハムやん");
console.log(meOsaka.name);

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);
