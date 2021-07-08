export {};

// type Exclude<T, U> = T extends U ? never : T
// ＊↑ extends左のTが右のUとが互換性があれば（真なら）never。互換性がなければ（偽なら）Tになる。
type MyExclude = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
