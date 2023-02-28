import React from 'react'
import {Box, Typography, Button} from '@mui/material';
import HeroBannerImg from '../assets/images/banner.png'; 
const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{lg: '212px', xs:'70px'},
      ml:{sm:'50px'}
    }}
      position="relative"
      padding="20px"
    >
      <Typography
        color="#FF2625"
        fontSize="26px"
        fontWeight="600"
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: {lg:'44px', xs:'40px'}
        }}
        marginTop="23px"
        marginBottom="20px"
      >
        Sweat, Smile<br/> and Repeat
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        color="error"
        sx={{
          backgroundColor:"#FF2625",
          padding:"14px",
          marginTop:"45px",
          borderRadius: "4px",
          textAlign: "center"
        }}
      >
        Explere Exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#FF2625"
        sx={{
          opacity: '0.1',
          display:{lg:'block', xs:'none'},
          fontSize:'200px'
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="hero-banner" className="hero-banner-img" />

    </Box>
  )
}

export default HeroBanner;