import React from 'react'
import { videoInterface } from '../utils/videoInterface';
import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { demoChannelUrl, demoProfilePicture } from '../utils/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type channelCardProps ={
    channelSingle: videoInterface,
    marginTop?: string
}
const ChannelCard = ({channelSingle,marginTop}: channelCardProps) => {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        boxShadow: 'none',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:{xs: '356px', md: '310px'},
        height:'326px',
        margin:'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channelSingle?.id?.channelId}`}>
        <CardContent
          sx={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <CardMedia
            component="img"
            image={channelSingle?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelSingle?.snippet?.channelTitle}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3'
            }}
          />
          <Typography
            variant='h6'
          >
            {channelSingle?.snippet?.title}
            <CheckCircleIcon
                 
                sx={{
                  fontSize: '14px',
                  color: 'gray',
                  ml: '5px'
                }}
              />
          </Typography>
          {
            channelSingle?.statistics?.subscriberCount &&(
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'gray'
                }}
              >
                {parseInt(channelSingle?.statistics.subscriberCount).toLocaleString('en-US')} Subscribers
                
              </Typography>
            )
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard