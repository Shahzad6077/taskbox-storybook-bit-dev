import { FC } from "react";

import { StatusInterface, TaskboxProps } from "../Taskbox";

export declare type TaskListProps = {

    title?: string;

    list: Array<Omit<TaskboxProps, "onStatusChange">>;

    onChangeTaskItem?: (id: string, status: StatusInterface) => void;

    style?: object | {};

};

declare const TaskList: FC<TaskListProps>;

export default TaskList;

