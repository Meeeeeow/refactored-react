import './App.css';
import React,{useState} from 'react';
import Board from './components/board';
import Keyboard from './components/keyboard';
import { AppContext } from './components/context';
import { boardDefault } from './components/words';
function App() {
  const [board,setBoard] =  useState(boardDefault);
  const [currentAttempt , setCurrentAttempt] = useState({attempt:0 , letterPos : 0});

  const onSelect = (keyVal) =>{
    console.log(typeof(keyVal));
    console.log(currentAttempt);
    if(currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPos : currentAttempt.letterPos + 1})
  }

  const onEnter = () =>{
     console.log(currentAttempt);
      if(currentAttempt.letterPos !== 5)
      {
        alert('Not enough letters');
      }else{
        setCurrentAttempt({...currentAttempt , attempt : currentAttempt.attempt + 1 , letterPos : 0});
      }
  }

  const onDelete = () =>{
    if(currentAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt , letterPos : currentAttempt.letterPos - 1});
  }
  return (
    <div className="App">
      <nav>
        <h1 className='text-3xl font-sans font-bold text-center mb-2 border-y border-b-stone-800 pb-3'>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board,setBoard , currentAttempt , setCurrentAttempt , onSelect , onDelete , onEnter}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
