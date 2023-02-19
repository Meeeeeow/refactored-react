import React, { useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material';
import {SideBar, Videos} from './';
import { fetchFromAPI } from '../utils/APIworks';
import { videoInterface } from '../utils/videoInterface';
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('new');
  const [videos, setVideos] = useState <videoInterface[]>([]);

  console.log(selectedCategory);
  useEffect(()=>{
    const videoFetch = async() =>{
     const data = await fetchFromAPI(`search?q=${selectedCategory}&part=snippet&maxResults=50`);
     setVideos(data.items)
    }
    videoFetch();
  },[selectedCategory])
  return (
   <Stack
    sx={{
      flexDirection: { xs: 'column', md: 'row'}
    }}
   >
    <Box sx={{
      height:{ xs:'auto', md: '92vh'},
      borderRight: '1px solid #3d3d3d',
      px: {xs: 0, md: 2},
    }}>
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      <Typography 
       className='copyright'
       variant='body2'
       sx={{
        mt: 1.5,
        color:'#fff'
       }}  
       >
        Copyright 2023 YouClone
      </Typography>
    </Box>
    <Box
      p={2}
      sx={{
        overflowY:'auto',
        height: '90vh',
        flex: 2,
        marginLeft: '15px'
      }}
    >
      <Typography 
        variant='h4'
        fontWeight="bold"
        mb={2}
        sx={{
          color:'white'
        }}
      >
        {selectedCategory} <span style={{ color: '#FC1503'}}> Videos</span>
      </Typography>
      <Videos videos={videos}/>
    </Box>

   </Stack>
  )
}

export default Feed;