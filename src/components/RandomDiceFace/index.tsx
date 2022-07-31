import React, { FC } from "react";

// local imports
import Container from "../Container";
import DiceFifthFace from "../DiceFifthFace";
import DiceFirstFace from "../DiceFirstFace";
import DiceFourthFace from "../DiceFourthFace";
import DiceSecondFace from "../DiceSecondFace";
import DiceSixthFace from "../DiceSixthFace";
import DiceThirdFace from "../DiceThirdFace";

export interface Props {
  randomNumber: number;
  size?: number;
}

const RandomDiceFace: FC<Props> = ({ randomNumber, size }) => {

  const getDiceSide = () => {
    switch (randomNumber) {
      case 1:
        return <DiceFirstFace />;
      case 2:
        return <DiceSecondFace />;
      case 3:
        return <DiceThirdFace />;
      case 4:
        return <DiceFourthFace />;
      case 5:
        return <DiceFifthFace />;
      default:
        return <DiceSixthFace />;
    }
  };

  return <Container size={size}>{getDiceSide()}</Container>;
};

export default RandomDiceFace;
