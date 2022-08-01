import React, { FC } from "react";

export interface Props {
  size?: number;
  isAnimation?: boolean;
  callback?: () => void;
  children: React.ReactNode;
}

const Container: FC<Props> = ({
  size,
  isAnimation = false,
  callback,
  children,
}) => {
  React.useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty("--size", `${size}px`);
    }
  }, []);

  const classNames = isAnimation
    ? "dice dice__color dice__anim"
    : "dice dice__color";

  return (
    <div className="container" onAnimationEnd={callback}>
      <div className={classNames}>{children}</div>
    </div>
  );
};

export default Container;
