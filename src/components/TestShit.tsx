import React from 'react'

interface Task {
  desc: string,
  complete: boolean
}

const TestShit: React.FC<Task[]> = (props) => {
  console.log(props);
  return(
    <div>
      {props.map((data) => <p>{data.desc}</p>)}
    </div>
  )
}

export default TestShit;