import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputField } from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {},
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Default = Template.bind({});
Default.args = {};
