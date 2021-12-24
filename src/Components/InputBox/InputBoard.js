import React, { useState } from "react";
import styled from "styled-components";
import "./InputBoard.css";
import { FaExclamationCircle } from "react-icons/fa";

const FormControl = styled.div`
  margin: 8px 0;

  div{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .alert{
    display:${props=>props.valid?'none':'inline-block'};
    margin:0 1px;
  }

  label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
    color: ${(props) => (props.valid ? "black" : "red")};
  }

  input {
    display: inline-block;
    margin-right:${props=>props.valid?'0px':'1px'};
    flex:1;
    width: 70%;
    line-height: 1.5rem;
    border: 1px solid ${(props) => (props.valid ? "#ccc" : "red")};
    background: ${(props) => (props.valid ? "transparent" : "salmon")};
  }

  input:focus {
    outline: none;
    border: 1px solid ${(props) => (props.valid ? "#00fd4c" : "red")};
    box-shadow: 0 0 4px rgba(4, 253, 16, 0.26);
  }
`;
const InputBoard = (props) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInput(event.target.value);
  };
  const addGoalHandler = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      setIsValid(false);
      return;
    }
    props.onAddgoal(input);
    setInput("");
  };
  return (
    <section className="goal-form">
      <form onSubmit={addGoalHandler}>
        <FormControl valid={isValid}>
          <label>Course Goal</label>
          <div className='input-box'>
            <input type="text" value={input} onChange={inputHandler} />
            <FaExclamationCircle style={{color:'red'}} className="alert" />
          </div>
        </FormControl>
        <button type="submit" className="button">
          Add Goal
        </button>
      </form>
    </section>
  );
};

export default InputBoard;
