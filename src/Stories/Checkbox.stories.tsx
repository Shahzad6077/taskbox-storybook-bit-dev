import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Checkbox, { CheckboxProps } from "../Components/Checkbox/index";

export default {
  title: "Ui/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <Checkbox {...args}>
    <span>checkbox</span>
  </Checkbox>
);

export const Default = Template.bind({});
Default.args = {
  checked: true,
};
export const WithChildren = Template.bind({});
WithChildren.args = {
  checked: true,
  varient: "CHILDREN",
};
