import React from 'react'
import { videoInterface } from '../utils/videoInterface'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

type videoCardProps = {
    videoSingle : videoInterface
}
const VideoCard = ({videoSingle: {id, snippet}}: videoCardProps) => {
  console.log(id?.videoId, snippet);
  return (
    <Card
      sx={{
        width:{ md: '310px', xs: '100%'},
        boxShadow: 'none',
        borderRadius: 0
      }}
    >
      <Link to={ id?.videoId ? `/video/${id?.videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: 360,
            height: 180,
        
          }}
        />
        <CardContent
          sx={{
            backgroundColor:'#1e1e1e',
            height: 110
          }}
        >
          <Link to={ id?.videoId ? `/video/${id?.videoId}` : demoVideoUrl}>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold"
              sx={{
                color: "#fff"
              }}
            >
              {snippet?.title ? snippet?.title.slice(0,60) : demoVideoTitle}
            </Typography>
          </Link>
          <Link to={ id?.channelId ? `/channel/${id?.channelId}` : demoChannelUrl}>
            <Typography 
              variant="subtitle2" 
              fontWeight="bold"
              sx={{
                color: "gray"
              }}
            >
              {snippet?.channelTitle ? snippet?.channelTitle : demoChannelTitle}
              <CheckCircleIcon
                 
                sx={{
                  fontSize: 12,
                  color: 'gray',
                  ml: '5px'
                }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard