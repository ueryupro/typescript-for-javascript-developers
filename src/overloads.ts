export {};

function double(value: number): number;
function double(value: string): string;
//↑シグネチャー（関数の概要を示したもの。関数の実態の前に書く）

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === "number"){
    return value * 2;
  } else {
    return value + value;
  }
}
//↑関数の実態は1つしか書けない。全ての型を受け取れるようにany型で書く。


console.log(double(100));
console.log(double("Go "));
// console.log(double(true )); シグネチャーで定義した型以外がきたらそもそも実行されない
