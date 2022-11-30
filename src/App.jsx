import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Test data
import data from './data.json'

// Components
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import ToDo from './components/ToDo'

export default function App() {
  const [count, setCount] = useState(0)
  const [toDoList, setToDoList] = useState(data)

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  )
}

const handleToggle = (id) => {
  let mapped = toDoList.map(task => {
    return task.id == id ? { ...task, complete: !task.complete } : { ...task};
  });
  setToDoList(mapped);
}







function OgTodoList() {
  return (
    <div>
      <Heading />
      <TaskForm />
      <TaskList />
    </div>
  )
}

function Heading() {
  return (
    <div>
      <MainHeading />
      <NumberOfTasks />
    </div>
  )
}

function MainHeading() {
  return (
    <h1>John's Todo List</h1>
  )
}

function NumberOfTasks() {
  return (
    <div id="numberOfTasks">
      <h3>Number Of Tasks:&nbsp</h3>
      <h3 id="taskNumber"></h3>
    </div>
  )
}

function TaskForm() {
  return (
    <div>
      <form>
        <input id="newTask" type="text" placeholder="Add task"></input>
        <button id="submit">Submit</button>
        <button id="tellJoke" onClick={joke}>Wanna hear a joke?</button>
      </form>
    </div>
  )
}

function TaskList() {
  return (
    <div>
      <ul id="taskList">

      </ul>
    </div>
  )
}



// Functions



function joke(e) {
  fetch('https://v2.jokeapi.dev/joke/Misc,Programming?format=json&safe-mode&type=single')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      const theJoke = data.joke;
      alert(theJoke);
  });
  
  e.preventDefault();
}

 //App

      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */



/* Component hierarchy
  - TodoList
    - Heading
      - MainHeading
      - NumberOfTasks
    - TaskForm
    - TaskList
 */
