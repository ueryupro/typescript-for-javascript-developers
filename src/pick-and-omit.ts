export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type ShimpleProfile = Pick<DetailedProfile, "name" | "weight">;
type SmallProfile = Omit<DetailedProfile, "height">;
