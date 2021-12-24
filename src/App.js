import { useState } from "react";
import InputBoard from "./Components/InputBox/InputBoard";
import TaskList from "./Components/TaskBoard/TaskList";

function App() {

  const [tasks,setTasks] = useState([])

  const goalHandler=(enteredValue)=>{
    setTasks(prev=>{
      const newTasks = [...prev];
      newTasks.unshift({task:enteredValue,id:Math.random().toString()})
      return newTasks;
    })
  }

  const deletionHandler=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }

  let content = <p style={{textAlign:'center', fontSize:'1.5rem' }}>No taks to do. May be add some?</p>
  if (tasks.length>0){
    content = <TaskList tasks={tasks} removeTask={deletionHandler}/>
  }

  return (
    <div>
      <div>
      <InputBoard onAddgoal={goalHandler}/>
      </div>
      <div style={{maxWidth:'90%', margin:'0px auto'}}>
        {content}
      </div>
    </div>
  );
}

export default App;
