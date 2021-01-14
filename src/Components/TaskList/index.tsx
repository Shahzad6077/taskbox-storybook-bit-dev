import React, { FC } from "react";

import styled, { AnyStyledComponent } from "styled-components";
import Taskbox, { StatusInterface, TaskboxProps } from "../Taskbox";

const ListWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > * + * {
    margin-bottom: 12px;
  }
  h5 {
    text-align: center;
  }
`;

export type TaskListProps = {
  title?: string;
  list: Array<Omit<TaskboxProps, "onStatusChange">>;
  onChangeTaskItem?: (id: string, status: StatusInterface) => void;
  style?: object | {};
};
const TaskList: FC<TaskListProps> = ({
  title,
  list,
  onChangeTaskItem,
  style,
}) => {
  return (
    <ListWrapper style={style}>
      <h5>{title}</h5>
      {/* {list.map((obj, i) => (
        <Taskbox
          key={i}
          id={obj.id}
          status={obj.status}
          label={obj.label}
          onStatusChange={onChangeTaskItem}
        />
      ))} */}
    </ListWrapper>
  );
};
TaskList.defaultProps = {
  title: "List Title",
};
export default TaskList;
