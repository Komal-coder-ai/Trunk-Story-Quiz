import React, { useState, useEffect } from 'react';
import { HiArrowDownLeft } from 'react-icons/hi2';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import CircleIcon from '@mui/icons-material/Circle';
import './index.css';

const Quiz = () => {
  const questions = [
    {
      text: "Based on whose life was the movie ‘Sam Bahadur’ directed?",
      options: [
        { text: "Gen. Manekshaw", isCorrect: true },
        { text: "Capt. Vikram Batra", isCorrect: false },
        { text: "Maj. Saurabh Kalia", isCorrect: false }
      ]
    },
    {
      text: "Which planet is known as the Red Planet?",
      options: [
        { text: "Mars", isCorrect: true },
        { text: "Venus", isCorrect: false },
        { text: "Jupiter", isCorrect: false }
      ]
    },
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const { category } = useParams();
  const navigate = useNavigate(); 
  useEffect(() => {
    if (isAnswered) {
      const timer = setTimeout(() => {
        if (selectedOption !== null) {
          if (questions[currentQuestionIndex].options[selectedOption].isCorrect) {
            setScore(score + 1);
          }
        }

        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          
          navigate('/results', { state: { score: score + (questions[currentQuestionIndex].options[selectedOption].isCorrect ? 1 : 0), total: questions.length } });
        }

        setSelectedOption(null);
        setIsAnswered(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnswered]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsAnswered(true);
  };

  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} container justifyContent="flex-end" padding={0}>
            <HiArrowDownLeft className="arrow-btn" style={{ fontWeight: 'bold', fontSize: "24px" }} />
          </Grid>

          <Grid item xs={11}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontSize: '40px',
                textAlign: 'left',
                fontWeight: 'bold'
              }}
            >
              {category.replace('-', ' ').toUpperCase()} Quiz
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "var(--footer-color)"
                }}
              >
                <CircleIcon />
              </span>
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" sx={{ my: 1 }}>
          <Box className="outerdiv">
            <Box className="innerdiv"></Box>
          </Box>
        </Grid>

        <Typography variant="h6" component="p" gutterBottom>
          <strong>Q.{currentQuestionIndex + 1}/5:</strong> {questions[currentQuestionIndex].text}
        </Typography>
        <div>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleOptionClick(index)}
              sx={{
                display: 'block',
                width: '100%',
                margin: '10px 0',
                // padding: '10px',
                border: '2px solid',
                marginTop: '10px',
                borderRadius: '0px',
                borderColor: selectedOption === index
                  ? option.isCorrect
                    ? 'var(--green-color)'
                    : 'var(--gray-color)'
                  : '#000',
                backgroundColor: selectedOption === index
                  ? option.isCorrect
                    ? 'var(--green-color)'
                    : 'var(--red-color)'
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
          margin: "auto",
        }}
      >
        <p style={{ margin: 0 }}>{currentQuestionIndex + 1}</p>
      </div>

      <p
        style={{
          position: 'fixed',
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
