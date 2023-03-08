import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// local imports
import RandomDiceFace from ".";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// Определяет, где кнопка будет отображаться в Storybook
export default {
  title: "Component/ExamplesWithoutAnimation", // Component в качестве простого названия, чтобы сгруппировать наши кастомные компоненты отдельно от примеров.
  component: RandomDiceFace,
} as ComponentMeta<typeof RandomDiceFace>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Определяет, какой компонент будет отображаться, и какие args/props по умолчанию следует применить к нему.
const Template: ComponentStory<typeof RandomDiceFace> = (args) => <RandomDiceFace {...args} />;

// Объекты Template.bind являются экземплярами или примерами состояния компонента.

export const DiceFaceFirst = Template.bind({});
export const DiceFaceSecond = Template.bind({});
export const DiceFaceThird = Template.bind({});
export const DiceFaceFourth = Template.bind({});
export const DiceFaceFifth = Template.bind({});
export const DiceFaceSixth = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
DiceFaceFirst.args = {
  randomNumber: 1,
};
DiceFaceSecond.args = {
  randomNumber: 2,
};
DiceFaceThird.args = {
  randomNumber: 3,
};
DiceFaceFourth.args = {
  randomNumber: 4,
};
DiceFaceFifth.args = {
  randomNumber: 5,
};
DiceFaceSixth.args = {
  randomNumber: 6,
};
