# cyber-dice

React dice animation library with Typescript

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Evgenia-cyber/dice?filename=package.json&style=plastic)

## Installation

**npm:**

```sh
npm install cyber-dice
```

**yarn:**

```sh
yarn add cyber-dice
```

### < Dice /> props

| Name         |   Type   | Prop type | Default | Description                   |
| ------------ | :------: | :-------: | :-----: | ----------------------------- |
| randomNumber | required |  number   |    -    | The number rolled on the dice |
| size         | optional |  number   |   80    | Dice size in px               |

### < DiceWithAnimation /> props

| Name                |   Type   |    Prop type     | Default | Description                                                                                                                              |
| ------------------- | :------: | :--------------: | :-----: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| randomNumber        | required |      number      |    -    | The number rolled on the dice                                                                                                            |
| isAnimation         | required |     boolean      |    -    | Animation control flag                                                                                                                   |
| animationEndHandler | required |     function     |    -    | Callback that will be executed when the animation ends.                                                                                  |
| size                | optional |      number      |   80    | Dice size in px                                                                                                                          |
| faces               | optional | array of strings |    -    | Custom faces for the dice. Strings can only have the following values: "first" or "second" or "third" or "fourth" or "fifth" or "sixth"; |

## Demo with examples

https://evgenia-cyber.github.io/dice/

## Examples

### Dice without animation

```js
import React from "react";
import { Dice } from "cyber-dice";

const Component = () => <Dice randomNumber={5} />;

export default Component;
```

### Dice without animation with Typescript

```js
import React, { FC } from "react";
import { Dice } from "cyber-dice";

const Component: FC = () => <Dice randomNumber={5} />;

export default Component;
```

### Custom size

```js
import React from "react";
import { Dice } from "cyber-dice";

const Component = () => <Dice randomNumber={5} size={100} />;

export default Component;
```

### Dice with animation

```js
import React from "react";
import { DiceWithAnimation } from "cyber-dice";

const Component = () => {
  const [randomNumber, setRandomNumber] = React.useState(1);
  const [isAnim, setIsAnim] = React.useState(true);

  const clickHandler = () => {
    setIsAnim(true);
    const newRandomNumber = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(newRandomNumber);
  };

  const animationEndHandler = () => {
    setIsAnim(false);
    console.log("Animation end");
  };

  return (
    <div>
      {randomNumber}
      <button type="button" onClick={clickHandler}>
        Click
      </button>
      <DiceWithAnimation
        randomNumber={randomNumber}
        isAnimation={isAnim}
        animationEndHandler={animationEndHandler}
      />
    </div>
  );
};

export default Component;
```

### Custom dice with animation

To do this, you need to pass optional props **` faces `** - array of six strings. Strings can only have the following values: "first" or "second" or "third" or "fourth" or "fifth" or "sixth". This example uses custom dice with only one or two points.

```js
import React from "react";
import { DiceWithAnimation } from "cyber-dice";

const Component = () => {
  const [randomNumber, setRandomNumber] = React.useState(1);
  const [isAnim, setIsAnim] = React.useState(true);

  const clickHandler = () => {
    setIsAnim(true);
    const newRandomNumber = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(newRandomNumber);
  };

  const animationEndHandler = () => {
    setIsAnim(false);
    console.log("Animation end");
  };

  return (
    <div>
      {randomNumber}
      <button type="button" onClick={clickHandler}>
        Click
      </button>
      <DiceWithAnimation
        faces={["first", "second", "first", "second", "first", "second"]}
        randomNumber={randomNumber}
        isAnimation={isAnim}
        animationEndHandler={animationEndHandler}
      />
    </div>
  );
};

export default Component;
```

### Custom colors for dice and dice points

Change `background-color` in css classes `.dice__color` and `.point__color`
