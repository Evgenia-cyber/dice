import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// local imports
import Dice from ".";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// Определяет, где кнопка будет отображаться в Storybook
export default {
  title: "Component/ExamplesDiceWithAnimation", // title: "MyLibrary/Dice" // MyLibrary в качестве простого названия, чтобы сгруппировать наши кастомные компоненты отдельно от примеров.
  component: Dice,
} as ComponentMeta<typeof Dice>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Определяет, какой компонент будет отображаться, и какие args/props по умолчанию следует применить к нему.
const Template: ComponentStory<typeof Dice> = (args) => <Dice {...args} />;

// Объекты Template.bind являются экземплярами или примерами состояния компонента.

export const DiceFirstFace = Template.bind({});
export const DiceOnlyOneOrTwoPointsFirstFace = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
DiceFirstFace.args = {
  randomNumber: 1,
  isAnimation: true,
  animationEndHandler: () => {
    alert("Animation ended");
  },
};
DiceOnlyOneOrTwoPointsFirstFace.args = {
  faces: ["first", "second", "first", "second", "first", "second"],
  randomNumber: 1,
  isAnimation: true,
  animationEndHandler: () => {
    alert("Animation ended");
  },
};
