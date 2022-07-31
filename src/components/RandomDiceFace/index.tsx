import React, { FC } from "react";

// local imports
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

const Dice: FC<Props> = ({ randomNumber, size }) => {
  React.useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty("--size", `${size}px`);
    }
  }, []);

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

  return <>{getDiceSide()}</>;
};

export default Dice;
