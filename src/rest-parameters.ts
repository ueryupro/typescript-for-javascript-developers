export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {　
  //restparameter引数を何個でも受け取れる
  console.log(values);
  return 100;
};

sum(1, 2, 3, 4, 5);

[1, 2, 3, 4].reduce(reducer);
