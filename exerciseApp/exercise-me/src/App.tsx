import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.components';
import Footer from './components/Footer.components';
import ExerciseDetail from './pages/exerciseDetail.component';
import Home from './pages/home.components';
function App() {
  return (
    <Box width="400px" sx={{width:{xl : "1488px"}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="exerciseDetails/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
