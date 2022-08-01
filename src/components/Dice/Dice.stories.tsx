import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dice from ".";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// Определяет, где кнопка будет отображаться в Storybook
export default {
  title: "MyLibrary/Dice", // MyLibrary в качестве простого названия, чтобы сгруппировать наши кастомные компоненты отдельно от примеров.
  component: Dice,
} as ComponentMeta<typeof Dice>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Определяет, какой компонент будет отображаться, и какие args/props по умолчанию следует применить к нему.
const Template: ComponentStory<typeof Dice> = (args) => <Dice {...args} />;

// Объекты Template.bind являются экземплярами или примерами состояния компонента.

export const DiceFirstWithAnimation = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
DiceFirstWithAnimation.args = {
  randomNumber: 1,
  isAnimation: true,
  callback: () => {
    console.log("Animation 1 ended");
  },
};

export const DiceSecondWithAnimation = Template.bind({});
DiceSecondWithAnimation.args = {
  randomNumber: 6,
  isAnimation: true,
  callback: () => {
    console.log("Animation 2 ended");
  },
};

export const DiceLargeWithAnimation = Template.bind({});
DiceLargeWithAnimation.args = {
  randomNumber: 6,
  size: 200,
  isAnimation: true,
  callback: () => {
    console.log("Animation 3 ended");
  },
};

export const DiceSmallWithAnimation = Template.bind({});
DiceSmallWithAnimation.args = {
  randomNumber: 6,
  size: 20,
  isAnimation: true,
  callback: () => {
    console.log("Animation 4 ended");
  },
};
