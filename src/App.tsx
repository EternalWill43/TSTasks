import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestStuff from './components/TestStuff';
import {useState} from 'react';

export interface Task {
  desc: string,
  complete?: boolean
}

function App() {

  let myObj: Task[] = [{desc: "LEARN", complete: true}, {desc: "TONIGHT"}];

  const [tasks, setTasks] = useState<Task[]>(myObj);


  return (
    <div className="App">
      <TestStuff {...tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
