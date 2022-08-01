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
