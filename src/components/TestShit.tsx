import React from 'react'

interface Task {
  desc: string,
  complete?: boolean
}

const TestShit: React.FC<any> = (props) => {
  console.log(props);
  return(
    <div>
      {props.name} is {props.age}
    </div>
  )
}

export default TestShit;