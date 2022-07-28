import React, { FC } from "react";

// local imports
import DiceFifthFace from "../DiceFifthFace";
import DiceFirstFace from "../DiceFirstFace";
import DiceFourthFace from "../DiceFourthFace";
import DiceSecondFace from "../DiceSecondFace";
import DiceSixthFace from "../DiceSixthFace";
import DiceThirdFace from "../DiceThirdFace";

import "./style.scss";

export interface Props {
  number: number;
  size?: number;
}

const Dice: FC<Props> = ({ number, size }) => {
  React.useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty("--size", `${size}px`);
    }
  }, []);

  const getDiceSide = () => {
    switch (number) {
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
