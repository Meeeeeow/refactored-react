import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/APIworks';
import { Box } from "@mui/material";
import { videoInterface } from '../utils/videoInterface';
const ChannelDetails = () => {
 const [channelDetail, setChannelDetail] = useState<videoInterface| any>()
 const [videos,setVideos] = useState([]);
  const { channelId} = useParams();
  console.log(channelDetail);
  useEffect(()=>{
    const channelFetch = async()=>{

      const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
      setChannelDetail(data?.items[0])
  
      const channelVideos = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
      setVideos(channelVideos?.items);
    }
    channelFetch();
  },[channelId])

  
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height:'300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)'
          }}
        />
        <ChannelCard channelSingle={channelDetail} marginTop="-110px"/>
      </Box>

      <Box display="flex" p="2" sx={{ml: {sm: '100px', xs:'15px'}, mr:{xs : '15px'}}}>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails;