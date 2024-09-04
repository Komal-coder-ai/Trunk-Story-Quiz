import React from "react";
import { Box } from "@mui/material";
import "./index.css";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const showNavLink =
    location.pathname === "/" ||
    location.pathname === "/startquiz" ||
    location.pathname === "/results";

  return (
    <Box
      sx={{
        clipPath: "polygon(0 43%, 100% 0, 100% 100%, 0% 100%)",
        backgroundColor: "var(--footer-color)",
        width: "100%",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: -1, 
      }}
      className="footer"
    >
      {showNavLink &&
     <div className="" style={  
      {
        marginTop: "auto",
      }
      }>
        <Navbar />
     </div>
       
       }
      {/* {!showNavLink && (
       
      )} */}
    </Box>
  );
};

export default Footer;
