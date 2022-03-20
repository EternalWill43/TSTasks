import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestShit from './components/TestShit';

function App() {

  interface Task {
    desc: string,
    complete?: boolean
  }

  let myObj: Task[] = [{desc: "KMS", complete: true}, {desc: "TONIGHT"}];

  return (
    <div className="App">
      <TestShit/>
    </div>
  );
}

export default App;
