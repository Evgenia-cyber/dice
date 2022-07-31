import React, { FC } from "react";

export interface Props {
  size?: number;
  isAnimation?: boolean;
  callback?: () => void;
  setIsAnim?: (isAnim: boolean) => void;
  children: React.ReactNode;
}

const Container: FC<Props> = ({
  size,
  isAnimation = false,
  callback,
  setIsAnim,
  children,
}) => {
  React.useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty("--size", `${size}px`);
    }
  }, []);

  console.log("isAnimation2", isAnimation);

  const animationEndHandler = () => {
    if (setIsAnim) {
      setIsAnim(false);
    }
    if (callback) {
      callback();
    }
  };

  const classNames = isAnimation
    ? "dice dice__color dice__anim"
    : "dice dice__color";

  console.log(classNames);
  return (
    <div className="container" onAnimationEnd={animationEndHandler}>
      <div className={classNames}>{children}</div>
    </div>
  );
};

export default Container;
