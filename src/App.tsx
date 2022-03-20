import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestShit from './components/TestShit';

function App() {

  interface Task {
    desc: string,
    complete?: boolean
  }

  interface props {
    props: Task[]
  }


  let myObj: Task[] = [{desc: "KMDDSl", complete: true}, {desc: "TONIGHT"}];


  return (
    <div className="App">
      <TestShit {...myObj}/>
    </div>
  );
}

export default App;
