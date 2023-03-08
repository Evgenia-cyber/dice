import React, { FC } from "react";

export interface Props {
  size?: number;
  isAnimation?: boolean;
  animationEndHandler?: () => void;
  children: React.ReactNode;
}

const Container: FC<Props> = ({
  size,
  isAnimation = false,
  animationEndHandler,
  children,
}) => {
  React.useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty("--dice-size", `${size}px`);
    }
  }, []);

  const classNames = isAnimation
    ? "dice dice__anim"
    : "dice";

  return (
    <div className="container" onAnimationEnd={animationEndHandler}>
      <div className={classNames}>{children}</div>
    </div>
  );
};

export default Container;
