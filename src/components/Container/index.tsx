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

  const animationEndHandler = () => {
    if (callback && setIsAnim) {
      callback();
      setIsAnim(false);
    }
  };

  return (
    <div className="container" onAnimationEnd={animationEndHandler}>
      <div
        className={
          isAnimation ? "dice dice__color dice__anim" : "dice dice__color"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
