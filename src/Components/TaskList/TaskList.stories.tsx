import React, { FC, useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import TaskList, { TaskListProps } from "./index";
import { TaskboxProps } from "../Taskbox";
const LIST: TaskboxProps[] = [
  { id: "123", label: "Pushups game on 23Aug", status: "DEFAULT" },
  { id: "456", label: "Leg game on 24Aug", status: "PINNED" },
  { id: "578", label: "Biceps game on 25Aug", status: "DEFAULT" },
  { id: "235", label: "Chest game on 26Aug", status: "COMPLETED" },
];
export default {
  title: "Ui/TaskList",
  component: TaskList,
  args: {
    title: "Gym Taskbox",
  },
} as Meta;

const Template: Story<TaskListProps> = (args) => {
  const [list, setList] = useState<TaskboxProps[]>(LIST);
  const onChangeTaskItem = (id: string, status: any) => {
    const shallow = [...list];
    setList(
      shallow.map((obj) => {
        if (obj.id === id) {
          return { ...obj, status: status };
        } else {
          return obj;
        }
      })
    );
  };
  return <TaskList {...args} list={list} onChangeTaskItem={onChangeTaskItem} />;
};

export const Default = Template.bind({});
Default.args = {
  style: { width: "400px" },
};
