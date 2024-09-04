import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          width: '100%',
          display: 'flex',
          listStyle: 'none',
          height: '100%',
          alignItems: 'center',
           textDecoration: 'none', 
           color: 'white',
            fontSize: '15px', 
            fontWeight: 'bolder',
            
        }}
      > <Link to="/" style={{ textDecoration: 'none' }}>

          <li style={{ fontSize: "15px ", color: "black" , letterSpacing:"0.1px"}}> Home | </li></Link>
        <li style={{ fontSize: "15px ", color: "black" , letterSpacing:"0.1px"}}> Privacy Policy | </li>
        <li style={{ fontSize: "15px ", color: "black", letterSpacing:"0.1px" }}> Terms and conditions </li>
      </ul>
    </div>
  )
}

export default Navbar
