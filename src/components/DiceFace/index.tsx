import React, { FC } from "react";

// local imports
import { ALL_FACES } from "../../constants";
import { FACES, POSITIONS } from "../../types";

export interface Props {
  pointsCount: number;
  face: FACES;
  position?: POSITIONS;
}

const DiceFace: FC<Props> = ({
  pointsCount,
  face,
  position = POSITIONS.FRONT,
}) => (
  <ul className={`face face__${face} face__${position} dice__color`}>
    {ALL_FACES.map((face, ind) => {
      if (ind < pointsCount)
        return (
          <li
            key={face}
            className={`face__point point__${face} point__color`}
          ></li>
        );
    })}
  </ul>
);

export default DiceFace;
