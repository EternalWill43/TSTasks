import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestStuff from './components/TestStuff';
import {useState} from 'react';

export interface Task {
  desc: string,
  complete?: boolean
}

export interface iTasks {
  taskList: Task[],
  taskSetter: React.Dispatch<React.SetStateAction<Task[]>>
}

function App() {

  let myObj: Task[] = [{desc: "LEARN", complete: true}, {desc: "TONIGHT"}];

  const [tasks, setTasks] = useState<Task[]>(myObj);

  let wrapper: iTasks = {taskList: tasks, taskSetter: setTasks}

  return (
    <div className="App">
      <TestStuff {...wrapper}/>
    </div>
  );
}

export default App;
