import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dice from ".";
import { ALL_FACES } from "../../constants";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// Определяет, где кнопка будет отображаться в Storybook
export default {
  title: "Component", // title: "MyLibrary/Dice" // MyLibrary в качестве простого названия, чтобы сгруппировать наши кастомные компоненты отдельно от примеров.
  component: Dice,
} as ComponentMeta<typeof Dice>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Определяет, какой компонент будет отображаться, и какие args/props по умолчанию следует применить к нему.
const Template: ComponentStory<typeof Dice> = (args) => <Dice {...args} />;

// Объекты Template.bind являются экземплярами или примерами состояния компонента.

export const DiceFirstWithAnimation = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
DiceFirstWithAnimation.args = {
  faces: [ALL_FACES[0], ALL_FACES[1], ALL_FACES[2], ALL_FACES[3], ALL_FACES[4], ALL_FACES[5]],
  randomNumber: 1,
  isAnimation: true,
  animationEndHandler: () => {
    alert("Animation ended");
  },
};
