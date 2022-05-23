import React from 'react'
import { useContext } from 'react';
import { AppContext } from './context';
const Letter = ({ letterPos , attemptNum }) => {
  const {board} = useContext(AppContext);
  const letter = board[attemptNum][letterPos];
  return (
    <div className='border-2 flex justify-center items-center text-xl font-bold w-16 h-16'>{letter}</div>
  )
}

export default Letter