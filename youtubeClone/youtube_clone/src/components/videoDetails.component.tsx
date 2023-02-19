import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import ReactPlayer from 'react-player';
import { fetchFromAPI } from '../utils/APIworks';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Videos } from './';
import { videoInterface } from '../utils/videoInterface';
const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState<videoInterface | any>(null);
  const [videos,setVideos] = useState<videoInterface[]>([]);

  const {videoId} = useParams();
  
  useEffect(()=>{
    const videoFetch = async ()=>{
      const data = await fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`);
      setVideoDetails(data.items[0]);
      
      const videoData = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`);
      setVideos(videoData.items);
    }
    videoFetch();
  },[videoId])

  return (
    <Box
      minHeight="95vh"
    >
      <Stack
        direction={{xs: 'column', md:'row'}}
      >
        <Box flex={1}>
          <Box
            sx={{
              width:'100%',
              position: 'sticky',
              top: '90px'
            }}
            
          >
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className='react-player'
              controls
            />
            <Typography variant="h5" fontWeight="bold" p={2} color="#fff">
              {videoDetails?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff"
              }}
              px={2}
              py={1}
            >
              <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Typography
                  variant='subtitle1'
                  color="#fff"
                >
                  {videoDetails?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                </Typography>
              </Link>
              <Stack direction="row" gap="25px">
                <Typography variant="body1" sx={{opacity: 0.75}}>
                    {videoDetails?.statistics?.viewCount} views
                </Typography>
                <Typography variant="body1" sx={{opacity: 0.75}}>
                    {videoDetails?.statistics?.likeCount} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1, xs: 5}} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column"/>     
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetails;