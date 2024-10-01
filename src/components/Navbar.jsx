
import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css"

const Navbar = () => {
  return (
    
     <div className="navlink_click" style={{height:'40px'}}>
       
     <div style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              margin: 0,
              alignItems: "center",
            }}
          >
            <li style={{ margin: "0 15px" }}>
              <Link to="https://trunkstory.com" style={{ textDecoration: "none", color: "black" }}>
                <Typography variant="body1" style={{fontSize:"14px"}}>Home</Typography>
              </Link>
            </li>
            <li style={{ margin: "0 15px" }}>
              <Link to="https://trunkstory.com/pages/privacy-policy" style={{ textDecoration: "none", color: "black" }}>
                <Typography variant="body1" style={{fontSize:"14px"}}>Privacy Policy</Typography>
              </Link>
            </li>
            <li style={{ margin: "0 15px" }}>
              <Link to="https://trunkstory.com/pages/terms-and-conditions" style={{ textDecoration: "none", color: "black" }}>
                <Typography variant="body1" style={{fontSize:"14px"}}>Terms and Conditions</Typography>
              </Link>
            </li>
          </ul>
        </div>
     </div>
  );
};

export default Navbar;
