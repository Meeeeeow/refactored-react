import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const [task,setTask] = useState('');
  const dispatch = useDispatch();
  const task_state = useSelector(state => state);
  console.log(task_state.tasks);
  const handleAddTask =(e) =>{
    dispatch({type:'ADD_TASK' , payload: {
      item: task,
      id: Date.now(),
      isDone: false,
      isProgressed: false
    }});
    setTask('');
  }
  return (
    <div className="App">
      <div className='flex justify-center items-center mt-9 text-black'>
        <input
          className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-md font-bold focus:outline-none' 
          type='text' 
          placeholder='Write task...' 
          value={task}
          onChange={(e) => setTask(e.target.value)}  
          />
        <button 
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-8 rounded focus:outline-none focus:shadow-outline'
          onClick={handleAddTask}
        >Add</button>
      </div>

      <div className='flex justify-center '>
        {}
      </div> 
    </div>
  );
}

export default App;
