export {};
 // * nullable　まだ何も値が決まってないときに設定する。ユニオン型で局所的に決める
let profile: { name: string; age: number | null } = {
  name: "ryuji",
  age: null
};
