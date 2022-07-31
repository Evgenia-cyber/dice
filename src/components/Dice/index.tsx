import React, { FC } from "react";

// local imports
import Container from "../Container";
import DiceFifthFace from "../DiceFifthFace";
import DiceFirstFace from "../DiceFirstFace";
import DiceFourthFace from "../DiceFourthFace";
import DiceSecondFace from "../DiceSecondFace";
import DiceSixthFace from "../DiceSixthFace";
import DiceThirdFace from "../DiceThirdFace";

import "./style.scss";

export interface Props {
  randomNumber: number;
  size?: number;
}

const Dice: FC<Props> = ({ randomNumber, size }) => {
  return (
    <Container size={size} isAnimation={true}>
      <DiceFirstFace />
      <DiceSecondFace />
      <DiceThirdFace />
      <DiceFourthFace />
      <DiceFifthFace />
      <DiceSixthFace />
    </Container>
  );
};

export default Dice;
