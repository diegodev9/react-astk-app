import TaskCard from "./TaskCard.jsx";
import {useContext} from "react";
import {TaskContext} from "../context/TaskContext.jsx";

// eslint-disable-next-line react/prop-types
function TaskList() {

  const {tasks} = useContext(TaskContext)

  // eslint-disable-next-line react/prop-types
  if (tasks.length === 0) {
    return <h1 className={'text-white text-4xl font-bold'}>No hay tareas aun</h1>
  }

  return (
    <div className={'grid grid-cols-4 gap-2'}>
      {/* eslint-disable-next-line react/prop-types */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;