import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// local imports
import Cube from ".";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// Определяет, где кнопка будет отображаться в Storybook
export default {
  title: "Component/ExamplesCubeWithAnimation", // title: "MyLibrary/Dice" // MyLibrary в качестве простого названия, чтобы сгруппировать наши кастомные компоненты отдельно от примеров.
  component: Cube,
} as ComponentMeta<typeof Cube>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Определяет, какой компонент будет отображаться, и какие args/props по умолчанию следует применить к нему.
const Template: ComponentStory<typeof Cube> = (args) => <Cube {...args} />;

// Объекты Template.bind являются экземплярами или примерами состояния компонента.

export const CubeEmptySide = Template.bind({});
export const CubeNumbers = Template.bind({});
export const CubeLettersAndNumbers = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
CubeEmptySide.args = {
  randomNumber: 1,
  isAnimation: true,
  animationEndHandler: () => {
    alert("Animation ended");
  },
  sides: [
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
  ],
};
CubeNumbers.args = {
  randomNumber: 1,
  isAnimation: true,
  animationEndHandler: () => {
    alert("Animation ended");
  },
  sides: [
    { text: "7", textColor: "#008cff" },
    { text: "1", textColor: "red" },
    { text: "3", textColor: "green" },
    { text: "5", textColor: "blue" },
    { text: "9", textColor: "black" },
    { text: "11", textColor: "#d607ff" },
  ],
};
CubeLettersAndNumbers.args = {
  randomNumber: 1,
  isAnimation: true,
  animationEndHandler: () => {
    alert("Animation ended");
  },
  sides: [
    { text: "A", textColor: "red", bgColor: "black" },
    { text: "V", textColor: "green", bgColor: "red" },
    { text: "C", textColor: "blue", bgColor: "white" },
    { text: "7", textColor: "#7bff00", bgColor: "black" },
    { text: "9", textColor: "black", bgColor: "#d607ff" },
    { text: "11", textColor: "#d607ff", bgColor: "blue" },
  ],
};
