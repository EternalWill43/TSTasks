import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestStuff from './components/TestStuff';

function App() {

  interface Task {
    desc: string,
    complete?: boolean
  }

  interface props {
    props: Task[]
  }


  let myObj: Task[] = [{desc: "STDY", complete: true}, {desc: "TONIGHT"}];


  return (
    <div className="App">
      <TestStuff {...myObj}/>
    </div>
  );
}

export default App;
