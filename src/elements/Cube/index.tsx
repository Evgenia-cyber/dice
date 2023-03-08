import React, { FC } from "react";

// local imports
import Container from "../../components/Container";
import CubeSide from "../../components/CubeSide";

import { validateRandomNumber } from "../../utils";
import { ALL_DICE_POSITIONS, ALL_FACES } from "../../constants";

import { POSITIONS, CustomFace, ICubeCustomSide } from "../../types";

import "../style.scss";

export interface Props {
  randomNumber: number;
  isAnimation: boolean;
  animationEndHandler: () => void;
  size?: number;
  sides: Array<ICubeCustomSide>
}

const Cube: FC<Props> = ({
  randomNumber,
  isAnimation,
  animationEndHandler,
  size,
  sides
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
      {sides.map((side, ind) => (
        <CubeSide
          key={ind}
          position={positions[ind]}
          text={side.text}
          fontSize={side.fontSize}
          textColor={side.textColor}
        />
      ))}
    </Container>
  );
};

export default Cube;
