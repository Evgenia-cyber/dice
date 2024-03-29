import React, { FC } from "react";

// local imports
import Container from "../../components/Container";
import DiceFace from "../../components/DiceFace";

import { validateRandomNumber } from "../../utils";
import { ALL_FACES } from "../../constants";

import "../style.scss";

export interface Props {
  randomNumber: number;
  size?: number;
}

const RandomDiceFace: FC<Props> = ({ randomNumber, size }) => {
  const pointsCount = validateRandomNumber(randomNumber);
  const index = pointsCount - 1;

  return (
    <Container size={size}>
      <DiceFace pointsCount={pointsCount} face={ALL_FACES[index]} />
    </Container>
  );
};

export default RandomDiceFace;
