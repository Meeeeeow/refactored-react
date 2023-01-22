import React from 'react'
import '../styles/singleTask.styles.scss';

import { Draggable } from 'react-beautiful-dnd'

const SingleTask = ({task, index}) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot)=>(
          <div 
          className={`single-task ${snapshot.isDragging ? 'dragging' : ''}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref ={provided.innerRef}
          >
            {task.name}
          </div>
      )}
        
    </Draggable>
    
  )
}

export default SingleTask