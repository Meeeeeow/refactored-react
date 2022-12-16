import './App.css';
import { useState,useEffect ,useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Column from './column';
import {DragDropContext} from 'react-beautiful-dnd';
function App() {

  const [task,setTask] = useState('');
  
  const dispatch = useDispatch();
  const task_state = useSelector(state => state);   //get redux state
  //console.log(task_state.tasks.map(task => !task.isDone  && !task.isProgressed  ? task.id : ''));
  // console.log(task_state.tasks);
 let initialData = useMemo(()=>{
  return {
    tasks: task_state.tasks,
    columns:{
      'column-1':{
        id:'column-1',
        title: 'To Do',
        taskIds: Object.keys(task_state.tasks),
        isDone:false,
        isProgressed:false
      },
      'column-2':{
        id:'column-2',
        title: 'In Progress',
        taskIds: [],
        isDone:false,
        isProgressed:true
      },
      'column-3':{
        id:'column-3',
        title: 'Done',
        taskIds: [],
        isDone:true,
        isProgressed:false
      },
    },
    columnOrder: ['column-1','column-2','column-3'],
  }
},[task_state.tasks])   //initial task state gets updated after a task is added
  
  // console.log(initialData.tasks);
  let taskStorage = localStorage.getItem("taskList");
  const [initialState,setInitialState] = useState(initialData); //local state 
  useEffect(()=>{
    setInitialState(initialData);
  },[initialData])   //after every inital task update state gets updated
  
  useEffect(()=>{
    localStorage.setItem('taskList', JSON.stringify(initialState))
  },[initialState]) //after local state gets updated svae them in storage
  // console.log(initialState.tasks);
  // console.log(initialState.columns['column-1'].taskIds);
  const handleAddTask =(e) =>{   //add task
    if(task !== '')
    {
      dispatch({type:'ADD_TASK' , payload: {
        item: task,
        id: Date.now(),
      }});
    }else{
      alert('Enter a valid task');
    }
    setTask('');
  }

  const onDragEnd = result =>{
      const {destination, source, draggableId} = result;

      if(!destination){  
        return;
      }
      if(destination.droppableId === source.droppableId && destination.index === source.index){
        return;
      }

      const start = initialState.columns[source.droppableId];
      const end = initialState.columns[destination.droppableId];
      if(start === end){   // if  the destination and the source is same column
          const newTaskIds = Array.from(start.taskIds);
          
          newTaskIds.splice(source.index, 1);
          newTaskIds.splice(destination.index, 0, draggableId);
    
          const newColumn = {
            ...start,
            taskIds: newTaskIds,
          };
    
          const newState ={
            ...initialState,
            columns:{
            ...initialState.columns,
              [newColumn.id]: newColumn,
            },
          };
          setInitialState(newState);
          return;
      }
      // if the destination and source columns are different
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index,1);
      const newStart ={
        ...start,
        taskIds: startTaskIds,
      }

      const endTaskIds = Array.from(end.taskIds);
      console.log(endTaskIds);
      endTaskIds.splice(destination.index, 0, draggableId);
      console.log(endTaskIds);
      const newEnd ={
       ...end, 
       taskIds: endTaskIds,
      };
      console.log(newEnd);
      const newState ={
             ...initialState,
              columns:{
                ...initialState.columns,
                [newStart.id]: newStart,
                [newEnd.id]: newEnd,
              },
      };
      console.log(newState);
      setInitialState(newState); //state changed
      
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className='flex justify-center items-center mt-9 text-black'>
          {/* input  value */}
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
          {
            initialState.columnOrder.map((columnId)=>{
                const column = initialState.columns[columnId];
                const tasks = column.taskIds.map((taskId)=>
                    !initialState.tasks[taskId].isDone && !initialState.tasks[taskId].isProgressed ? initialState.tasks[taskId] : ''
                )
                return <Column 
                          key={column.id} 
                          column={column} 
                          tasks={tasks}
                        />
            })
          }
        </div> 
      </div>
      <h2 className='text-3xl font-bold flex justify-center'>Implementation missing of localStorage.Tried but not successful</h2>
    </DragDropContext>
  );
}

export default App;
