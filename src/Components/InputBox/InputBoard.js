import React, { useState } from "react";
import "./InputBoard.css";

const InputBoard = (props) => {

  const [input, setInput] = useState("")

  const inputHandler = (event) =>{
    setInput(event.target.value)
  }
  const addGoalHandler = (event) =>{
    event.preventDefault();
    props.onAddgoal(input);
    setInput('')
  }
  return (
    <section className="goal-form">
      <form onSubmit={addGoalHandler}>
        <div className="form-control">
          <label>Course Goal</label>
          <input type="text" required={true} value={input} onChange={inputHandler}/>
        </div>
        <button type="submit" className="button">
          Add Goal
        </button>
      </form>
    </section>
  );
};

export default InputBoard;
