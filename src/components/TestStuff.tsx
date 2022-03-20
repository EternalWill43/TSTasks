import React from 'react';
import { Task } from '../App';
import { iTasks } from '../App';
import uniqid from 'uniqid';

const TestStuff: React.FC<iTasks> = (props) => {
  
  //props.taskSetter([...props.taskList, {desc: "whattata"}])

  return(
    <div>
      {Object.keys(props['taskList'] as Task[]).map(data => <p key={uniqid()}>{props['taskList'][data as keyof React.ReactNode].desc}</p>)}
    </div>
  )
}

export default TestStuff;