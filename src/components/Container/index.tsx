import React, { FC } from "react";

export interface Props {
  size?: number;
  isAnimation?: boolean;
  setIsAnim?: (isAnim: boolean) => void;
  callback?: () => void;
  children: React.ReactNode;
}

const Container: FC<Props> = ({
  size,
  isAnimation = false,
  setIsAnim,
  callback,
  children,
}) => {
  React.useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty("--size", `${size}px`);
    }
  }, []);


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

  console.log("isAnimation", isAnimation);

  return (
    <div className="container" onAnimationEnd={animationEndHandler}>
      <div className={classNames}>{children}</div>
    </div>
  );
};

export default Container;
