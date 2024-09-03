import React, { useState } from 'react';
import { HiArrowDownLeft } from 'react-icons/hi2';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import './index.css'
const Quiz = () => {
  const question = "Based on whose life was the movie ‘Sam Bahadur’ directed?";
  const options = [
    { text: "Gen. Manekshaw", isCorrect: true },
    { text: "Capt. Vikram Batra", isCorrect: false },
    { text: "Maj. Saurabh Kalia", isCorrect: false }
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const { category } = useParams();

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsAnswered(true);
  };

  return (
    <>
      <div 
      style={{ padding: '20px', 
      fontFamily: 'Arial, sans-serif',
   
      }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} container justifyContent="flex-end" padding={0}
          >

            <HiArrowDownLeft className="arrow-btn" style={{ fontWeight: 'bold', fontSize: "24px" }} />

          </Grid>

          <Grid item xs={11}>
            <Typography
              variant="h4"
              component="h2"

              gutterBottom
              sx={{
                fontSize: '50px',
                textAlign: 'left',
                fontWeight: 'bold'
              }}
            >
              {category.replace('-', ' ').toUpperCase()} Quiz
              <spn
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "var(--footer-color)"
                }}
              >
                <CircleIcon />
              </spn>
            </Typography>
          </Grid>

        </Grid>

        <Grid container justifyContent="center" alignItems="center" sx={{ my: 3 }}>
          <Box className="outerdiv" >
            <Box className="innerdiv" ></Box>
          </Box>
        </Grid>

        <Typography variant="h6" component="p" gutterBottom>
          <strong>Q.1/5:</strong> {question}
        </Typography>
        <div>
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleOptionClick(index)}
              sx={{
                display: 'block',
                width: '100%',
                margin: '10px 0',
                padding: '10px',
                border: '2px solid',
                marginTop: '20px',
                borderRadius: '0px',
                borderColor: selectedOption === index
                  ? option.isCorrect
                    ? 'green'
                    : 'red'
                  : '#000',
                backgroundColor: selectedOption === index
                  ? option.isCorrect
                    ? 'lightgreen'
                    : 'lightcoral'
                  : '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: { xs: '14px', sm: '16px' }
              }}
              disabled={isAnswered}
            >
              <p style={{ color: "var(--black-color)" }}> {option.text}</p>
            </Button>
          ))}
        </div>

      </div>
      <div
  className="circle"
  style={{
    width: "40px",
    height: "40px", 
    borderRadius: "50%", 
    backgroundColor: "gray", 
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    position: "absolute",
    margin  : "auto",
  }}
>
  <p style={{ margin: 0 }}>10</p>
</div>

      <p

        style={{
          position: 'absolute',
          bottom: '20px',
          textAlign: 'center',
          marginTop: '20px',
          width: '400px',

        }}
      >
        Each quiz has 5 questions
      </p>
    </>
  );
};

export default Quiz;
