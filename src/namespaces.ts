export {};
// 同じ名前のclassが競合したときに保存する場所を変えて競合をなくす。
// namespaceでclassを書いていく!!!

namespace Japanese {
  export namespace Osaka { // nestしてる
    export class Person { // export を付けることにより外の空間からもアクセスできるようになる
      constructor(public name: string) {}
    }
  }

}


namespace English {
  export class Person {
    constructor(public firstName: string, public lastName: string) {}
  }
}




const me = new Japanese.Osaka.Person("りゅーじ");
console.log(me.name);
const michael = new English.Person("Michael", "Jackson");
console.log(michael);