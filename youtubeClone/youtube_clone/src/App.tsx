import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetails, ChannelDetails, Search } from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Feed/> }/>
          <Route path='/videos/:videoId' element={ <VideoDetails/> }/>
          <Route path='/channels/:channelId' element={ <ChannelDetails/> }/>
          <Route path='/search/:searchTerm' element={ <Search/> }/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
