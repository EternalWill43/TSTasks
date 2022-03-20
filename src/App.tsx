import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestStuff from './components/TestStuff';
import {useState} from 'react';

function App() {

  interface Task {
    desc: string,
    complete?: boolean
  }

  interface props {
    props: Task[]
  }


  let myObj: Task[] = [{desc: "LEARN", complete: true}, {desc: "TONIGHT"}];

  const [tasks, setTasks] = useState<Task[]>(myObj);


  return (
    <div className="App">
      <TestStuff {...tasks}/>
    </div>
  );
}

export default App;
