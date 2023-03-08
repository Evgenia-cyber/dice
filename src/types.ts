export enum POSITIONS {
  FRONT = "front",
  BACK = "back",
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

export enum FACES {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export type CustomFace =
  | "first"
  | "second"
  | "third"
  | "fourth"
  | "fifth"
  | "sixth";

export interface ICubeCustomSide {
  text: string;
  textColor?: string;
  fontSize?: string;
}
