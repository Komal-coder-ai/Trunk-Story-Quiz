import { Button } from "@mui/material";
import React from "react";
import bgImage from "../../assets/bgimg2.jpg";
const QuizButton = ({ name, bgimage }) => {
  return (
    <div>
      {/* <button
        style={{
          // width: '100%',
          // height: '100px',
          // color: "var(--footer-color)",
          // // backgroundImage: `url(${bgImage})`,
          // backgroundColor: 'var(--black-color)',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // display: 'flex',
          // alignItems: 'center',
          // fontWeight:'900',
          // justifyContent: 'center',
          // fontSize: '18px',
          // zIndex: '1',
          // borderRadius: '10px'
          
        }}
      >
        {name}
      </button> */}
      <Button
        // onClick={onClick}
        sx={{
          // width: "100%",
          // height: "50px",
          // backgroundColor: "black",
          // color: "white",
          // textAlign: "center",
          // borderRadius: "4px",
          // fontSize: "16px",
          // fontWeight: "bold",
          width: '100%',
          height: '100px',
          color: "var(--footer-color)",
          // backgroundImage: `url(${bgImage})`,
          backgroundColor: 'var(--black-color)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          fontWeight:'900',
          justifyContent: 'center',
          fontSize: '18px',
          zIndex: '1',
          borderRadius: '10px',
          transition: "transform 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#333", // Darker background on hover
            transform: "translateY(-5px)", // Move the button up slightly
          },
          "&:active": {
            backgroundColor: "#000", // Original background on click
            transform: "translateY(0)", // Move the button back to the original position
          },
        }}
      >
        {name}
      </Button>
    </div>
  );
};

export default QuizButton;
