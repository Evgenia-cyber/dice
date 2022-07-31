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
  randomNumber: number;
  size?: number;
}

const Dice: FC<Props> = ({ randomNumber, size }) => {
  React.useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty("--size", `${size}px`);
    }
  }, []);

  return (
    <div className="container">
      <div className="dice dice__color">
        <DiceFirstFace />
        <DiceSecondFace />
        <DiceThirdFace />
        <DiceFourthFace />
        <DiceFifthFace />
        <DiceSixthFace />
      </div>
    </div>
  );
};

export default Dice;
