import { FC } from "react";



import styled from "styled-components";

import Taskbox, { StatusInterface, TaskboxProps } from "../Taskbox";



const ListWrapper = styled.div`

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

  list: Array<TaskboxProps>;

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

      {list.map((obj, i) => (

        <Taskbox key={i} {...obj} onStatusChange={onChangeTaskItem} />

      ))}

    </ListWrapper>

  );

};

TaskList.defaultProps = {

  title: "List Title",

};

export default TaskList;

