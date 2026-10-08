import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

//main parent component for everything
function App(){

  const [currentTask, setTask] = useState(""); //state setter for updating a single task when typed
  const [allTasks, setAllTasks] = useState([]);  //state setter for updating array of tasks when typed

  return(
    <div>
      <MainHeading />
      <div className='taskBox'>
        <TaskBox currentTask = {currentTask} setTask = {setTask}/> 
        <AddTask currentTask = {currentTask} allTasks = {allTasks} setAllTasks = {setAllTasks} setTask = {setTask}/>
      </div>

      {//iterates over the list and displays it
      }
      <ul className='list'>{allTasks.map((temp, i) => 
        (<li key = {i}>
          <div className='taskList'>
            <Checkmark/>
            <Tasks currentTask={temp}/>
            <DeleteTask currentTask={temp} allTasks={allTasks} setAllTasks = {setAllTasks}/>
          </div>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

//component to display the main heading
function MainHeading() {
  return (
    <div className='headingContainer'>
      <h1 className='mainHeading'> My To-Do List</h1>
    </div>
  )
}


//component to display box to enter task
function TaskBox(props){ 

  //adding task when it is typed in the box
  //const [currentTask, setTask] = useState(""); //state setter for updating a single task when typed
  //const [allTasks, setAllTasks] = useState([]);  //state setter for updating array of tasks when typed

  //handler that updates a task when there is change
  const newTask = (e) => {
    props.setTask(e.target.value);
  }
  return(
      <input type = "text" className='textEntry' placeholder= 'Whats on the mind?' value = {props.currentTask} onChange={newTask}/>
  )
}

//component to add button
function AddTask(props){
  const Add = () => {
    if(props.currentTask !=""){   //checking if the input is empty or not
      props.setAllTasks([...props.allTasks, props.currentTask]); 
    }
    props.setTask(""); 
  };
  return(
    <input type= "button" className = 'addTask' value='Add' onClick={Add}/>
  )
}

//component to show checkmark when the task is complete
function Checkmark(){
  return(
    <input type='checkBox' className='checkMark'/>
  )
}

//component to display the task
function Tasks(props){
  return(
    <p className='tasks'> {props.currentTask}</p>
  )
}

//component to delete a task
function DeleteTask(props){
  //deletes the task
  const Delete = () =>{
    const temp = props.allTasks.filter((temp) => temp!= props.currentTask); 
    props.setAllTasks(temp); 

  }
  return(
    <input type = 'button' className = 'deleteTask' value = 'Delete' onClick = {Delete}/>
  )
}


export {App}
