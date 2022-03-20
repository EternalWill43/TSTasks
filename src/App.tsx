import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestShit from './components/TestShit';

function App() {

  interface Task {
    desc: string,
    complete?: boolean
  }

  let myObj: Task[] = [{desc: "KMDDSl", complete: true}, {desc: "TONIGHT"}];

  console.log(typeof(myObj));

  return (
    <div className="App">
      <TestShit name="Josh" age={10}/>
    </div>
  );
}

export default App;
