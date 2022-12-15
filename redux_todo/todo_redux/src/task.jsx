import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
const Task = ({task,index}) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
        {(provided,snapshot)=>(
            <div>
                <div 
                className={`border p-3 mb-3 border-red-400 rounded ${snapshot.isDragging ? 'bg-green-300' :'bg-white'}`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {task.item}
            </div>
            </div>
        )}
        
    </Draggable>
  )
}

export default Task