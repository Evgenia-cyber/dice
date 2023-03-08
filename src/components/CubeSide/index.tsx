import React, { FC } from "react";

// local imports
import { POSITIONS } from "../../types";

export interface Props {
  fontSize?: string;
  position?: POSITIONS;
  text?: string;
  textColor?: string;
}

const CubeSide: FC<Props> = ({
  fontSize = "50px",
  position = POSITIONS.FRONT,
  text = "",
  textColor = "#000",
}) => {
  const textStyles = {
    color: textColor,
    fontSize,
  };

  return (
    <div className={`side face__${position} side__${position}`}>
      <span style={textStyles} className={`side__text`}>
        {text}
      </span>
    </div>
  );
};

export default CubeSide;
