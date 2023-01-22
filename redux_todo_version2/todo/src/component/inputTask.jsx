import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_task, order_same_col, order_another_col } from '../store/actions/actions';
import TaskList from './taskList';
import {DragDropContext} from 'react-beautiful-dnd';

import '../styles/inputTask.styles.scss';

const InputTask = () => {
  const [task,setTask]  = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector( ({tasks: {allTasks}})=> allTasks);
  // console.log(tasks);
  const allState = useSelector((state) => state.tasks);
  const handleSubmit = e =>{
    e.preventDefault();
    if(task === '')
    {
        alert('Enter a valid task');
        return;
    }
    dispatch(add_task({
        id: Date.now(),
        name: task,
        isCompleted: false,
        isProgress: false
    }))
    setTask('');
  }

  const onDragEnd = (result) =>{
    console.log(result);
    const {destination, source, draggableId} = result;
    if(!destination) return;
    
    if(source.index === destination.index && source.droppableId === destination.droppableId) return;

    
    
    const start = allState.columns[source.droppableId];
    const end = allState.columns[destination.droppableId];

    //dropping inside same column
    if(start === end){
      const column = allState.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index,1);
      newTaskIds.splice(destination.index,0,Number(draggableId));
      const newColumn ={
        ...column,
        taskIds: newTaskIds
      }
      dispatch(order_same_col(newColumn));
    }

    //dropping on another column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index,1);

    const newStartColumn = {
      ...start,
      taskIds: startTaskIds
    }

    const endTaskIds = Array.from(end.taskIds);
    endTaskIds.splice(destination.index,0,draggableId);
    const newEndColumn = {
      ...end,
      taskIds: endTaskIds
    }
    dispatch(order_another_col({
      startCol: newStartColumn,
      endCol: newEndColumn
    }))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='add-task'>
          <form className='input-task'>
              <input 
                  type='text'
                  name='inputTaskName'
                  placeholder='Enter a task'
                  value={task}
                  onChange={(e)=> setTask(e.target.value)}
              />
              <button onClick={handleSubmit}>Add new task</button>
          </form>
        </div>
        <div className='columns'>
              {
                  allState.columnOrder.map((columnId)=>{
                    const column = allState.columns[columnId];
                    const task_column = column.taskIds.map(taskId => tasks[taskId]) 
                    // console.log(task_column); 
                    return(
                      <TaskList
                        key={column.id}
                        column = {column}
                        tasks={task_column}
                      />
                    )
                  })
              }
        </div>
      
    </DragDropContext>
  )
}

export default InputTask