import React from 'react'
import { videoInterface } from '../utils/videoInterface'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard} from './';

type videosProps ={
  videos: videoInterface[]
}

const Videos = ({videos}: videosProps) => {
  // console.log(videos)
  const videosWithoutPlayList = videos.filter((video)=> !video.id.playlistId);
  console.log(videosWithoutPlayList);

  return (
    <Stack 
      direction='row' 
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {
        videosWithoutPlayList.map((item,index)=>(
          <Box key={index}>
            {
              item.id.videoId && <VideoCard videoSingle={item}/>
            }
            {
              item.id.channelId && <ChannelCard channelSingle={item}/>
            }
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos;