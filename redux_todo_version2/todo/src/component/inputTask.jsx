import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_task } from '../store/actions/actions';
import TaskList from './taskList';

const InputTask = () => {
  const [task,setTask]  = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector( ({tasks: {allTasks}})=> allTasks);
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
  return (
    <div>
        <form className='inputTask'>
            <input 
                type='text'
                name='inputTaskName'
                placeholder='Enter a task'
                value={task}
                onChange={(e)=> setTask(e.target.value)}
            />
            <button onClick={handleSubmit}>Add new task</button>
        </form>
        {
            <TaskList tasks={tasks}/>
        }
    </div>
  )
}

export default InputTask