import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <ul
           style={{width: '100%', display: 'flex', listStyle: 'none', textDecoration: 'none', color: 'white', fontSize: '15px', fontWeight: 'bolder' }}
           > <Link to="/" style={{ textDecoration: 'none' }}>
           
            <li style={{fontSize:"15px " ,color:"black" }}> Home | </li></Link>
            <li style={{fontSize:"15px " ,color:"black" }}> Privacy Policy | </li>
            <li style={{fontSize:"15px " ,color:"black" }}> Terms and conditions </li>
           </ul>
    </div>
  )
}

export default Navbar
