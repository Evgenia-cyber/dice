import React, { FC } from "react";

export interface Props {
  size?: number;
  isAnimation?: boolean;
  children: React.ReactNode;
}

const Container: FC<Props> = ({ size = 80, isAnimation = false, children }) => {
  React.useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty("--size", `${size}px`);
    }
  }, []);

  return (
    <div className="container">
      <div className={isAnimation ? "dice dice__color dice__anim" : "dice dice__color"}>
        {children}
      </div>
    </div>
  );
};

export default Container;
