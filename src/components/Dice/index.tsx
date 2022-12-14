import React, { FC } from "react";

// local imports
import Container from "../Container";
import DiceFace from "../DiceFace";

import { validateRandomNumber } from "../../utils";
import { ALL_DICE_POSITIONS, ALL_FACES } from "../../constants";

import { POSITIONS } from "../../types";

import "./style.scss";

export interface Props {
  randomNumber: number;
  isAnimation: boolean;
  animationEndHandler: () => void;
  size?: number;
}

const Dice: FC<Props> = ({
  randomNumber,
  isAnimation,
  animationEndHandler,
  size,
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
      {ALL_FACES.map((face, ind) => (
        <DiceFace
          key={face}
          pointsCount={ind + 1}
          face={face}
          position={positions[ind]}
        />
      ))}
    </Container>
  );
};

export default Dice;
