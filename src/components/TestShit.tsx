import React from 'react'

interface Task {
  desc: string,
  complete?: boolean
}

const TestShit: React.FC<Task[]> = ({...arr}) => {
  
  return(
    <div>
      {Object.keys(arr).map(data => <p>{arr[data].desc}</p>)}
    </div>
  )
}

export default TestShit;