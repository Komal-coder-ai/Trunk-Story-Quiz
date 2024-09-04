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
          height: '230px',
          display: 'block',
        }}
        />
       
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
