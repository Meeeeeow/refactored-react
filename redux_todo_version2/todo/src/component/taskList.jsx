import React from 'react'
import SingleTask from './singleTask'
import {Droppable} from  'react-beautiful-dnd'

import '../styles/taskList.styles.scss';

const TaskList = ({column, tasks}) => {
  return (
    <div className='tasks'>
      <h1 className='title'>{column.title}</h1>
      <Droppable droppableId={column.id}>
        {(provided, snapshot)=>(
          <div style={{backgroundColor:`${snapshot.isDraggingOver ? 'skyblue' : 'white'}` ,minHeight:"400px" , transition:'backgroundColor 0.2s ease', padding:'10px 30px',margin:'0px'}}>
            <h4
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                tasks.map((task, index) => <SingleTask key={task.id} task={task} index={index}/>)
              }
              {provided.placeholder}
            </h4>
          </div>
        )}
      </Droppable>
        
    </div>
  )
}

export default TaskList