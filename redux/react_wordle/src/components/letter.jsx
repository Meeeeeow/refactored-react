import React from 'react'
import './letter.css';
import { useContext } from 'react';
import { AppContext } from './context';
const Letter = ({ letterPos , attemptNum }) => {

  const {board , correctWord , currentAttempt} = useContext(AppContext);
  console.log(currentAttempt);
  const letter = board[attemptNum][letterPos];
  const correct = correctWord[letterPos] === letter;
  const almost = correctWord[letterPos] !== letter && correctWord.includes(letter);
  const letterState = currentAttempt.attempt > attemptNum && (correct ? "correct" : almost ? "almost" : "error");
  console.log(letterState);
  return (
    <div className={letterState === "correct" ? 'border-2 flex justify-center items-center text-xl font-bold w-16 h-16 bg-green-500 text-white' :  letterState === "almost" ? 'border-2 flex justify-center items-center text-xl font-bold w-16 h-16 bg-yellow-300 text-white' : 'border-2 flex justify-center items-center text-xl font-bold w-16 h-16 bg-gray-400 text-white'  }>{letter}</div>
  )
}

export default Letter