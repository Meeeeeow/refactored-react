import { Box, Typography } from '@mui/material'
import React from 'react'

const Discover = () => {
  return (
    <Box component='div' mt={12} sx={{ display: 'flex',backgroundColor:'rgba(217, 224, 236, 0.20)', 
    backdropFilter: 'blur(25px)', minHeight: '50.5vh',paddingLeft: '84px',}}>
        <Typography
            component='h2'
            mt={[`50px`]}
            sx={{
                color: '#000',
                fontSize: '33px',
                fontStyle:'normal',
                lineHeight: 'normal',
                fontWeight: '800',
            }}
        >
            Discover more NFTs
        </Typography>
    </Box>
  )
}

export default Discover;