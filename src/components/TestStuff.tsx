import React from 'react';
import { Task } from '../App';
import { iTasks } from '../App';

const TestStuff: React.FC<iTasks> = (arr) => {
  console.log(arr.taskList);
  return(
    <div>
      {Object.keys(arr.taskList as React.PropsWithChildren<Task[]>).map(data => <p>{arr[data as keyof React.ReactNode]}</p>)}
    </div>
  )
}

export default TestStuff;