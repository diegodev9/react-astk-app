import {useContext} from "react";
import {TaskContext} from "../context/TaskContext.jsx";

// eslint-disable-next-line react/prop-types
function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext)

  return (
    // eslint-disable-next-line react/prop-types
    <div id={task.id} className={'bg-gray-800 text-white p-4 rounded-md mt-4'}>
      {/* eslint-disable-next-line react/prop-types */}
      <h1 className={'text-xl font-bold capitalize'}>{task.title}</h1>
      {/* eslint-disable-next-line react/prop-types */}
      <p className={'text-gray-500 text-sm'}>{task.description}</p>

      {/* eslint-disable-next-line react/prop-types */}
      <button className={'bg-red-500 px-2 py-1 rounded-md hover:bg-red-400'}
              onClick={() => deleteTask(task.id)}>
        Eliminar tarea
      </button>
    </div>
  )
}

export default TaskCard
