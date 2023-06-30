import React from 'react';
import { Box, Typography, Link,  Button, InputBase } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
    mt={12}
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '20px',
        padding: '0px 40px 40px 84px',
        backgroundColor: '#FFF',

        // Responsive styles
        '@media (max-width: 960px)': {
          gridTemplateColumns: '1fr 1fr',
        },
        '@media (max-width: 600px)': {
          gridTemplateColumns: '1fr',
        },
      }}
    >
      {/* Column 1 */}
      <div >
        <Typography variant="h6" sx={{color:'#000', fontStyle:'normal', lineHeight: 'normal', fontWeight: '800',fontSize:'24px', marginBottom: '20px'}}>NFters </Typography>
        <Typography variant="body1"  sx={{color:'#565656', fontStyle:'normal', lineHeight: '160%', fontWeight: '400',fontSize:'14px', maxWidth:'333px', marginBottom: '30px'}}>
        The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            marginTop: '10px',
          }}
        >
          <Link href="#" color="inherit">
            <Facebook sx={{ fontSize: '40px' }} />
          </Link>
          <Link href="#" color="inherit">
            <Twitter sx={{ fontSize: '40px' }} />
          </Link>
          <Link href="#" color="inherit">
            <Instagram sx={{ fontSize: '40px' }} />
          </Link>
        </Box>
      </div>

      {/* Column 2 */}
      <div>
        <Typography variant="h6" sx={{color:'#000', fontStyle:'normal', lineHeight: 'normal', fontWeight: '800',fontSize:'18px', marginBottom: '30px', textTransform: 'capitalize'}}>Market place</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', color:'#3D3D3D', fontSize:'14px', }}>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            All NFTs
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            New
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            Art
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            Sports
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            Utility
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            Music
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            Domain Name
          </Link>
        </Box>
      </div>

      {/* Column 3 */}
      <div>
        <Typography variant="h6" sx={{color:'#000', fontStyle:'normal', lineHeight: 'normal', fontWeight: '800',fontSize:'18px', marginBottom: '30px', textTransform: 'capitalize'}}>My account</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', color:'#3D3D3D', fontSize:'14px', }}>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            Profile
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            Favorite
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            My Collections
          </Link>
          <Link href="#" color="inherit" sx={{textDecoration: 'none'}}>
            Settings
          </Link>
        </Box>
      </div>

      {/* Column 4 */}
      <div>
        <Typography variant="h6" sx={{color:'#000', fontStyle:'normal', lineHeight: 'normal', fontWeight: '800',fontSize:'18px', marginBottom: '30px', textTransform: 'capitalize'}}>Stay in the loop</Typography>
        <Typography variant="body1" sx={{color:'#565656', fontStyle:'normal', lineHeight: '160%', fontWeight: '400',fontSize:'14px', maxWidth:'362px', marginBottom: '30px'}}>
        Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
        </Typography>
        <Box sx={{ display: 'flex',
            alignItems: 'center',
            border: '2px solid #F1F1F1',
            borderRadius: '45.595px',
            padding: '8px', 
        }}>
          <InputBase
            placeholder="Enter your email address"
            sx={{
            flex: 1,
            marginRight: '8px',
            border: 'none',
            outline: 'none',
            padding: '10px 12px',
            fontSize:'12px',
            }}
          />
          <Button
            variant="contained" 
            sx={{
              display: 'inline-flex', 
              padding: '15.198px 30.397px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '7.599px', 
              borderRadius: '45.595px', 
              color: '#F4F4F4',
              backgroundColor: '#3D00B7', 
               
              '&:hover': {
                border: '1px solid #3D00B7',
                backgroundColor:'#F4F4F4',
                color:'#3D00B7',
            }}}>
                        Subscribe Now
            </Button>
        </Box>
      </div>
    </Box>
  );
};

export default Footer;
