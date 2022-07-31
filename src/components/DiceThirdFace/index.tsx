import React, { FC } from "react";

const DiceThirdFace: FC = () => (
  <ul className="face face__third face__left dice__color">
    <li className="face__point point__first point__color"></li>
    <li className="face__point point__second point__color"></li>
    <li className="face__point point__third point__color"></li>
  </ul>
);

export default DiceThirdFace;
