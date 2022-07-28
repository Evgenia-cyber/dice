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

export const DiceFirst = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
DiceFirst.args = {
  number: 1,
};

export const DiceSecond = Template.bind({});
DiceSecond.args = {
  number: 2,
};

export const DiceThird = Template.bind({});
DiceThird.args = {
  number: 3,
};

export const DiceFourth = Template.bind({});
DiceFourth.args = {
  number: 4,
};

export const DiceFifth = Template.bind({});
DiceFifth.args = {
  number: 5,
};

export const DiceSixth = Template.bind({});
DiceSixth.args = {
  number: 6,
};

export const DiceLarge = Template.bind({});
DiceLarge.args = {
  number: 6,
  size: 200,
};

export const DiceSmall = Template.bind({});
DiceSmall.args = {
  number: 6,
  size: 20,
};
