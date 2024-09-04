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
    <>
      <div>
        <Box
          sx={{
            clipPath: "polygon(0 43%, 100% 0, 100% 100%, 0% 100%)",
            backgroundColor: "var(--footer-color)",
            // height: "100vh",
            // width: "426px",
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // position: 'relative',
            // bottom: '0',
            zIndex: "-1",
          }}
          className="footer"
        >
          {showNavLink && <Navbar></Navbar>}
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
      </div>
    </>
  );
};

export default Footer;
