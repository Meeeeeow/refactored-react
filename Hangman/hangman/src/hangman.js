import React,{ useState  } from 'react'
import RandomWord from './randomWord';
import image0 from "./images/0.jpg"
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import image4 from "./images/4.jpg"
import image5 from "./images/5.jpg"
import image6 from "./images/6.jpg"

//static variables
const maxWrongs = 6;
const images = [image0,image1,image2,image3,image4,image5,image6];
let answer = RandomWord();
console.log(answer);
const Hangman = () => {
  //states
  const [numWrongs,setNumWrongs] = useState(0);
  const [guessedWord,setGuessedWord] = useState([]);

 
  // reset after winning or losing
  const reset = () =>{
      setNumWrongs(0);
      answer = RandomWord();
      setGuessedWord([]);
  }
  // all pressed letters are stored here in guessedWord 
  const guessedWords = () =>{
     return answer.split("").map(letter => guessedWord.includes(letter) ? letter : letter  === ' ' ? ' '  : " _ "); 
  }
  
  // action after clicking a button
  const handleGuess = (e) =>{
    let letter = e.target.value; 
    setGuessedWord(oldState=> [...oldState,letter]);
    if(!answer.split('').includes(letter))
    {
        setNumWrongs(numWrongs + 1);
    }
          
  }
  console.log(guessedWord);

  //inital state
  const generateKeyPad = () =>{
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter=>(
        <button
            type="button"
            key={letter}
            value={letter}
            onClick={handleGuess}
            disabled={guessedWord.includes(letter)}
            className="btn w-6 px-5 py-2 m-auto flex justify-center items-center border-2 border-stone-100 rounded-lg text-xl shadow-lg"
        >
            {letter}
        </button>
    ))
  }
  
   //dynamic variables
   const gameOver = numWrongs >= maxWrongs;
   console.log(guessedWords().join(''));
   console.log(typeof(answer));
   const isWinner = guessedWords().join('') === answer;
   console.log(isWinner);
   let gameState = generateKeyPad();
   let restart = gameOver || isWinner;
   if(isWinner){
       gameState = "You have survived!"
   }
   if(gameOver)
   {
        gameState = "Better luck next time!"
   }
   
  return (
     
    <div>
        <h1 className='text-center text-5xl font-semibold p-4 font-mono tracking-[21px] mb-8 mt-4'>Hangman</h1>
        <img src={images[numWrongs]} alt="hangman images" className='m-auto  mb-8 shadow-xl shadow-gray-600'/>
        <p className='text-xl'>
            Guessed Left: {`${maxWrongs - numWrongs} / ${maxWrongs}`}
        </p>

        <p className='font-medium'>Guess the programming language</p>
        <p className='flex justify-center items-center tracking-[15px] text-3xl font-bold mb-8'>{!gameOver ? guessedWords() : answer}</p>

        {typeof(gameState) === 'string' ? <p className='text-center mb-6 font-mono tracking-wider font-semibold text-2xl'>{gameState}</p> : <p className='grid grid-cols-5 gap-3 justify-center items-center m-auto w-3/6'>{gameState}</p>}
        {
            restart && (
                <button
                    type="button"
                    onClick={reset}
                    className="border-2 border-stone-100 rounded-md px-5 py-2 text-xl shadow-lg bg-sky-600 hover:scale-125"
                >
                    Restart?
                </button>
            )
        }
    </div>
  )
}

export default Hangman;