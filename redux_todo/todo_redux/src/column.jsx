import React from 'react'
import Task from './task';
import {Droppable} from  'react-beautiful-dnd'

const Column = ({column,tasks}) => {
  console.log(column.id);  
  
  return (
    
        <div className='m-8 border border-solid border-gray-500 w-64 h-full flex flex-col'>
            <h1 className='p-8 font-bold text-2xl'>{column.title}</h1>
            <Droppable droppableId={column.id}>
                {(provided,snapshot)=>(
                   <div>
                        <h3 
                            ref={provided.innerRef}
                            {...provided.droppableProps}  
                            className={`transition p-2 font-semibold text-lg ${snapshot.isDraggingOver ? 'bg-cyan-400' : 'bg-white'} grow min-h-[100px]`} 
                            
                        >
                            {
                                tasks.map((task,index) => <Task key={task.id} task={task} index={index}/>)
                            }
                            {provided.placeholder}
                        </h3>
                   </div>
                )}
                
            </Droppable>
        </div>

  )
}

export default Column;