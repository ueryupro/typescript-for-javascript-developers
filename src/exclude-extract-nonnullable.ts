export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // 具体的な型で除外するのではなく抽象的な関数で除外する。既存の型を再利用

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | undefined | null;
type NonNullableTypes = NonNullable<NullableTypes>;
