import React from 'react'
import { videoInterface } from '../utils/videoInterface';
import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { demoChannelUrl, demoProfilePicture } from '../utils/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type channelCardProps ={
    channelSingle: videoInterface
}
const ChannelCard = ({channelSingle: {id, snippet}}: channelCardProps) => {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        boxShadow: 'none'
      }}
    >
      <Link to={`/channel/${id?.channelId}` || demoChannelUrl}>
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
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={snippet?.channelTitle}
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
            {snippet?.channelTitle}
            <CheckCircleIcon
                 
                sx={{
                  fontSize: 14,
                  color: 'gray',
                  ml: '5px'
                }}
              />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard