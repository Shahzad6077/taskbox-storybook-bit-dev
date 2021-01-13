import React, { FC } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Taskbox, { TaskboxProps } from "./index";

export default {
  title: "Ui/Taskbox",
  component: Taskbox,
  args: {
    label: "Go to Gym at 8pm",
    id: "123sdf",
  },
} as Meta;

const Template: Story<TaskboxProps> = (args) => <Taskbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: "DEFAULT",
};
export const Pinned = Template.bind({});
Pinned.args = {
  status: "PINNED",
};
export const Completed = Template.bind({});
Completed.args = {
  status: "COMPLETED",
};
