import React, { FC } from "react";

const DiceThirdFace: FC = () => (
  <ul className="face face__third face__left dice__color">
    <li className="face__point point__first"></li>
    <li className="face__point point__second"></li>
    <li className="face__point point__third"></li>
  </ul>
);

export default DiceThirdFace;
