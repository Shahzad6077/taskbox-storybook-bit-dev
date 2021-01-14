import React, { useState } from "react";
import TaskList, { TaskListProps } from "@bit/shahzad6077.taskbox.task-list";
import { TaskboxProps } from "@bit/shahzad6077.taskbox.task-list/dist/Taskbox";

const LIST: TaskboxProps[] = [
  { id: "123", label: "Pushups game on 23Aug", status: "DEFAULT" },
  { id: "456", label: "Leg game on 24Aug", status: "PINNED" },
  { id: "578", label: "Biceps game on 25Aug", status: "DEFAULT" },
  { id: "235", label: "Chest game on 26Aug", status: "COMPLETED" },
];
function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        <h2>Taskbox app</h2>
      </header>
      <TaskList
        title="GYM TASKS"
        style={{ width: "420px" }}
        list={list}
        onChangeTaskItem={onChangeTaskItem}
      />
    </div>
  );
}

export default App;
