import React from 'react'

interface Task {
  desc: string,
  complete?: boolean
}

const TestShit: React.FC<any> = (props) => {
  console.log(props);
  return(
    <div>
      {props.props.map((data: Task) => <p>{data.desc}</p>)}
    </div>
  )
}

export default TestShit;