import React from "react";
import "./Task.css";
import { FaTrash } from "react-icons/fa";

const Task = (props) => {
  const deleteHandler = () => {
    props.delHandler(props.id);
  };
  return (
    <li className="task-item">
      {props.content}
      <div className="delete">
        <FaTrash className="delete-button" onClick={deleteHandler} />
      </div>
    </li>
  );
};

export default Task;
