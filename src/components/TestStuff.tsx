import React from 'react';
import { Task } from '../App';

const TestStuff: React.FC<Task[]> = (arr) => {
  
  return(
    <div>
      {Object.keys(arr as React.PropsWithChildren<Task[]>).map(data => <p>{arr[data as keyof React.ReactNode].desc}</p>)}
    </div>
  )
}

export default TestStuff;