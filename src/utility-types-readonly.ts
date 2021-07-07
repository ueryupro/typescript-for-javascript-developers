export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "ryuji",
  age: 25,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "shigeru",
  age: 30,
};

// friend.age++;

type YomitoriSenyou<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyouProfile = YomitoriSenyou<Profile>;
