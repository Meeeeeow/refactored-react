import React from 'react'
import SingleTask from './singleTask'

const TaskList = ({tasks}) => {
  return (
    <div className='tasks'>
        {
            tasks.map(task => <SingleTask key={task.id} task={task}/>)
        }
    </div>
  )
}

export default TaskList