import React, { useState, useEffect} from 'react'
import { Box,  Typography } from '@mui/material';
import {Videos} from './';
import { fetchFromAPI } from '../utils/APIworks';
import { videoInterface } from '../utils/videoInterface';
import { useParams } from 'react-router-dom';
const Search = () => {
  const [videos, setVideos] = useState <videoInterface[]>([]);
  const { searchTerm } = useParams();
  console.log(searchTerm);
  useEffect(()=>{
    const searchData = async()=>{

      const data = await fetchFromAPI(`search?q=${searchTerm}&part=snippet`);
      setVideos(data.items)
    }
    searchData();
  },[searchTerm])
  return (
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
          Search results for <span style={{ color: '#FC1503'}}> {searchTerm} </span>Videos
        </Typography>
        <Videos videos={videos}/>
      </Box>

  )
}

export default Search;