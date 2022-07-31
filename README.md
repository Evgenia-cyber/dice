# @evgenia-cyber/dice

React dice animation library with Typescript

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Evgenia-cyber/dice?filename=package.json&style=plastic)


## Installation

**npm:**

```sh
npm install @evgenia-cyber/dice
```

**yarn:**

```sh
yarn add @evgenia-cyber/dice
```

### < Dice /> props

Name | Type | Prop type | Default | Description 
---  |  :-:  |  :-:  |  :-:  | ---  
randomNumber | required | number | - | The number rolled on the diсe
size | optional | number | 80 | Dice size in px


### < DiceWithAnimation /> props

Name | Type | Prop type | Default | Description 
---  |  :-:  |  :-:  |  :-:  | ---  
randomNumber | required | number | - | The number rolled on the diсe
size | optional | number | 80 | Dice size in px
animationEndHandler | optional | function | - | Сallback that will be executed when the animation ends.

## Examples

### Common usage

```js
import React from 'react';
import { Dice } from '@evgenia-cyber/dice';

const Component = () => (
      <Dice randomNumber={5} />
  );

export default Component;
```
or

```js
import React from 'react';
import { DiceWithAnimation } from '@evgenia-cyber/dice';

const Component = () => (
      <DiceWithAnimation randomNumber={5} />
  );

export default Component;
```

### Common usage with Typescript

```js
import React, { FC } from 'react';
import { Dice } from '@evgenia-cyber/dice';

const Component: FC = () => (
      <Dice randomNumber={5} />
  );

export default Component;
```

### Custom size and callback

```js
import React from 'react';
import { DiceWithAnimation } from '@evgenia-cyber/dice';

const Component = () => (
      <DiceWithAnimation randomNumber={5} size={100} animationEndHandler={() => console.log("Animation ended")}/>
  );

export default Component;
```

### Custom colors for dice and dice points

Use css classes `.dice__color` and `.point__color`
