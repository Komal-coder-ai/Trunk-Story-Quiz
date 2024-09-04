import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import homeImage from '../../assets/homePage.png';
import { Link } from 'react-router-dom';
import './index.css';
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
          position: 'absolute',
          bottom: 0,
          zIndex: 100,
        }}
      >
        <Toolbar className='headerContainer'>
          <Box
            display="flex" 
            width="100%"
                >
           
           <ul
           style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', textDecoration: 'none', color: 'white', fontSize: '12px', fontWeight: 'bolder' }}
           > <Link to="/" style={{ textDecoration: 'none' }}>
           
            <li style={{fontSize:"12px " ,color:"black" }}> Home | </li></Link>
            <li style={{fontSize:"12px " ,color:"black" }}> Privacy Policy | </li>
            <li style={{fontSize:"12px " ,color:"black" }}> Terms and conditions </li>
           </ul>

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
