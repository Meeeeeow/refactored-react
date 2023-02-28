import React from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/herobanner.components';
import SearchExercises from '../components/searchExercises.component';
import Exercises from '../components/exercises.component';
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home;