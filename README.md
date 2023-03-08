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

## **Demo with examples**

https://evgenia-cyber.github.io/dice/

## < Dice /> props

| Name         |   Type   | Prop type | Default | Description                                        |
| ------------ | :------: | :-------: | :-----: | -------------------------------------------------- |
| randomNumber | required |  number   |    -    | The number rolled on the dice - number from 1 to 6 |
| size         | optional |  number   |   80    | Dice size in px                                    |

## < DiceWithAnimation /> props

| Name                |   Type   |    Prop type     | Default | Description                                                                                                                              |
| ------------------- | :------: | :--------------: | :-----: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| randomNumber        | required |      number      |    -    | The side rolled on the dice - number from 1 to 6                                                                                         |
| isAnimation         | required |     boolean      |    -    | Animation control flag                                                                                                                   |
| animationEndHandler | required |     function     |    -    | Callback that will be executed when the animation ends.                                                                                  |
| size                | optional |      number      |   80    | Dice size in px                                                                                                                          |
| faces               | optional | array of strings |    -    | Custom faces for the dice. Strings can only have the following values: "first" or "second" or "third" or "fourth" or "fifth" or "sixth"; |

## < CubeWithAnimation /> props

| Name                |   Type   |    Prop type     | Default | Description                                             |
| ------------------- | :------: | :--------------: | :-----: | ------------------------------------------------------- |
| randomNumber        | required |      number      |    -    | The side rolled on the cube - number from 1 to 6        |
| isAnimation         | required |     boolean      |    -    | Animation control flag                                  |
| animationEndHandler | required |     function     |    -    | Callback that will be executed when the animation ends. |
| size                | optional |      number      |   80    | Dice size in px                                         |
| sides               | required | array of objects |    -    | Custom sides for the cube.                              |

Object has type:

```js
{
  text: string;
  textColor?: string;
  fontSize?: string;
}
```

## Examples

### **1. Dice without animation**

```js
import React from "react";
import { Dice } from "cyber-dice";

const Component = () => <Dice randomNumber={5} />;

export default Component;
```

### **2. Dice without animation with Typescript**

```js
import React, { FC } from "react";
import { Dice } from "cyber-dice";

const Component: FC = () => <Dice randomNumber={5} />;

export default Component;
```

### **3. Custom size dice**

```js
import React from "react";
import { Dice } from "cyber-dice";

const Component = () => <Dice randomNumber={5} size={100} />;

export default Component;
```

### **4. Dice with animation**

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

### **5. Custom dice with animation**

To do this, you need to pass optional props **`faces`** - array of six strings. Strings can only have the following values: "first" or "second" or "third" or "fourth" or "fifth" or "sixth". This example uses custom dice with only one or two points.

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

### **6. Custom colors for dice and dice points**

Change `background-color` in css classes `.dice__color` and `.point__color`

### **7. Custom cube with animation**

To do this, you need to pass optional props **`sides`** - array of six objects.

Object has type:

```js
{
  text: string;
  textColor?: string;
  fontSize?: string;
}
```

This example uses custom cube with letters and numbers in different colors.

```js
import React from "react";
import { CubeWithAnimation } from "cyber-dice";

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
      <CubeWithAnimation
        sides={[
          { text: "A", textColor: "red" },
          { text: "V", textColor: "green" },
          { text: "C", textColor: "blue" },
          { text: "7", textColor: "#7bff00" },
          { text: "9", textColor: "black" },
          { text: "11", textColor: "#d607ff" },
        ]}
        randomNumber={randomNumber}
        isAnimation={isAnim}
        animationEndHandler={animationEndHandler}
      />
    </div>
  );
};

export default Component;
```

### **8. Custom styles for cube**

Add custom styles for the every side of the cube - use css classes: `.side__front`, `.side__back`, `.side__left`, `.side__right`, `.side__top`, `.side__bottom`.

Add custom styles for the text of the cube - use css class `.side__text`.
