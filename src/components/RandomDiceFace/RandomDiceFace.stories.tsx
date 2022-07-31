import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RandomDiceFace from ".";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// Определяет, где кнопка будет отображаться в Storybook
export default {
  title: "MyLibrary/RandomDiceFace", // MyLibrary в качестве простого названия, чтобы сгруппировать наши кастомные компоненты отдельно от примеров.
  component: RandomDiceFace,
} as ComponentMeta<typeof RandomDiceFace>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Определяет, какой компонент будет отображаться, и какие args/props по умолчанию следует применить к нему.
const Template: ComponentStory<typeof RandomDiceFace> = (args) => <RandomDiceFace {...args} />;

// Объекты Template.bind являются экземплярами или примерами состояния компонента.

export const DiceFaceFirst = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
DiceFaceFirst.args = {
  randomNumber: 1,
};

export const DiceFaceSecond = Template.bind({});
DiceFaceSecond.args = {
  randomNumber: 2,
};

export const DiceFaceThird = Template.bind({});
DiceFaceThird.args = {
  randomNumber: 3,
};

export const DiceFaceFourth = Template.bind({});
DiceFaceFourth.args = {
  randomNumber: 4,
};

export const DiceFaceFifth = Template.bind({});
DiceFaceFifth.args = {
  randomNumber: 5,
};

export const DiceFaceSixth = Template.bind({});
DiceFaceSixth.args = {
  randomNumber: 6,
};

export const DiceFaceLarge = Template.bind({});
DiceFaceLarge.args = {
  randomNumber: 6,
  size: 200,
};

export const DiceFaceSmall = Template.bind({});
DiceFaceSmall.args = {
  randomNumber: 3,
  size: 20,
};