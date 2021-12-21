import React from "react";
import Task from "./Task";
import './TaskList.css'

const TaskList = (props) => {

    const updateList=(id)=>{
        props.removeTask(id)
    }
  return (
    <ul>
      {props.tasks.map((task) => (
        <Task content={task.task} id={task.id} key={task.id} delHandler={updateList} />
      ))}
    </ul>
  );
};

export default TaskList;
