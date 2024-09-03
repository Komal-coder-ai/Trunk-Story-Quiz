import React from 'react';
import { Box } from '@mui/material';
import './index.css';

const Footer = () => {
  return (
    <Box
      sx={{
        clipPath: 'polygon(0 83%, 100% 44%, 100% 100%, 0% 100%)',
        backgroundColor: 'var(--footer-color)',
        height:'200px',
        width: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '0',
        zIndex: '-1',
        padding: { xs: '10px', sm: '20px', md: '30px' }, 
      }}
      className="footer"
    >
      Footer Content
    </Box>
  );
};

export default Footer;
