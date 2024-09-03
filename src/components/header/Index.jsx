import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import homeImage from '../../assets/homePage.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
       <Box
        component="img"
        src={homeImage}
        alt="Home"
        sx={{
          width: '100%',
          // height: '200px',
          display: 'block',
        }}
        />
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        className="BottomNavbar mobile-navbar"
        sx={{
          position: 'fixed',
          bottom: 0,
        }}
      >
        <Toolbar>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            sx={{ flexDirection: { xs: 'row', sm: 'row' } }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              component="a"
              href=""
              sx={{ color: 'black', textDecoration: 'none', margin: '0 5px'
                ,
                fontSize:'15px',fontWeight:"bold"
               }}
            >
              Home | 
            </Typography>
            </Link>
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{ color: 'black', textDecoration: 'none', margin: '0 5px'
                ,
                fontSize:'15px',fontWeight:"bold"
               }}
            >
              Privacy Policy |
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{ color: 'black', textDecoration: 'none', margin: '0 5px'
                ,
                fontSize:'15px',fontWeight:"bold"
               }}
            >
              Terms and Conditions 
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
   
    </div>
  )
}

{/* {/* 
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './index.css';
const MobileNavbar = () => {
  return (
   
  );
};

export default MobileNavbar;

    </div>
  )
} */}

export default Header 
