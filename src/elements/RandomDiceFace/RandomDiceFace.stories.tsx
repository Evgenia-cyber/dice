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

export const DiceFirstFace = Template.bind({});
export const DiceSecondFace = Template.bind({});
export const DiceThirdFace = Template.bind({});
export const DiceFourthFace = Template.bind({});
export const DiceFifthFace = Template.bind({});
export const DiceSixthFace = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
DiceFirstFace.args = {
  randomNumber: 1,
};
DiceSecondFace.args = {
  randomNumber: 2,
};
DiceThirdFace.args = {
  randomNumber: 3,
};
DiceFourthFace.args = {
  randomNumber: 4,
};
DiceFifthFace.args = {
  randomNumber: 5,
};
DiceSixthFace.args = {
  randomNumber: 6,
};
