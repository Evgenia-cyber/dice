import React, { FC } from "react";

// local imports
import Container from "../../components/Container";
import DiceFace from "../../components/DiceFace";

import { validateRandomNumber } from "../../utils";
import { ALL_DICE_POSITIONS, ALL_FACES } from "../../constants";

import { POSITIONS, CustomFace } from "../../types";

import "../style.scss";

export interface Props {
  randomNumber: number;
  isAnimation: boolean;
  animationEndHandler: () => void;
  size?: number;
  faces?: [
    CustomFace,
    CustomFace,
    CustomFace,
    CustomFace,
    CustomFace,
    CustomFace
  ];
}

const Dice: FC<Props> = ({
  randomNumber,
  isAnimation,
  animationEndHandler,
  size,
  faces = ALL_FACES,
}) => {
  const pointsCount = validateRandomNumber(randomNumber);
  const index = pointsCount - 1;
  const positions: POSITIONS[] = ALL_DICE_POSITIONS[index];

  return (
    <Container
      size={size}
      isAnimation={isAnimation}
      animationEndHandler={animationEndHandler}
    >
      {faces.map((face, ind) => (
        <DiceFace
          key={ind}
          pointsCount={ALL_FACES.findIndex((f) => f === face) + 1}
          face={face}
          position={positions[ind]}
        />
      ))}
    </Container>
  );
};

export default Dice;
