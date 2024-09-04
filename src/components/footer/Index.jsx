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
        zIndex: 1000, 
      }}
      className="footer"
    >
      {showNavLink && <Navbar />}
      {!showNavLink && (
        <p
          style={{
            marginTop: "auto",
            textAlign: "center",
            width: "400px",
          }}
        >
          Each quiz has 5 questions
        </p>
      )}
    </Box>
  );
};

export default Footer;
