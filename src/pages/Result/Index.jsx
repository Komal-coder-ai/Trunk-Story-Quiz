import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import QuizButton from './../../components/quizButton/Index';

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || {};
  const startQuiz = (category) => {
    console.log(category, "category");
    navigate(`/quiz/${category}`);
  };

  return (
    <div>
      <Container>
        <h1
          style={{
            width: '95%', textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', justifyContent: "center"
          }}
        >Well Played! You scored {score} out of {total}</h1>
        <Grid container justifyContent="center" alignItems="center" sx={{ my: 3 }}>
          <Box className="outerdiv">
            <Box className="innerdiv"></Box>
          </Box>
        </Grid>

        <p style={{
          textAlign: 'center',
          fontSize: '20px',
        }}>Based on Your performance , yoyu get a 5 % difcount coupon to shopwith us.
          <span> <h4>Coupon code : QUIZ766</h4>
          </span>
        </p>

        <Link >
         <span style={{
          textAlign: 'center',
          fontSize: '20px',
          color:"var(--black-color)",
        }} > SHOP NOW</span>
        </Link>
        <Grid container justifyContent="center" alignItems="center" sx={{ my: 3 }}>
          <Box className="outerdiv">
            <Box className="innerdiv"></Box>
          </Box>
        </Grid>
        <h3>or , you can countinuw playing our quizzes , select a category from below to start playing again:</h3>
        <Grid container spacing={2} sx={{ mx: 0.1 }}>
          <Grid item xs={5.2} sm={5.2} md={5.2} onClick={() => startQuiz('indian-army')}>
            <QuizButton name="Indian Army" />
          </Grid>
          <Grid item xs={5.2} sm={5.2} md={5.2} onClick={() => startQuiz('indian-navy')}>
            <QuizButton name="Indian Navy" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Result;
