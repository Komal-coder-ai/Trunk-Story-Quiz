import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizButton from '../../components/quizButton/Index';
import { Box, Container, Grid } from '@mui/material';

const SelectQuiz = () => {
  const navigate = useNavigate();

  const startQuiz = (category) => {
    console.log(category,"category");
    navigate(`/quiz/${category}`);
  };

  return (
    <>
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
          <Grid item xs={12}>
            <h1>Select a category of your choice to begin the quiz</h1>
          </Grid>
        </Grid>
      </Container>

      <Grid container justifyContent="center" alignItems="center" sx={{ my: 3 }}>
        <Box className="outerdiv">
          <Box className="innerdiv"></Box>
        </Box>
      </Grid>

      <Grid container spacing={2} sx={{ mx: 0.1 }}>
        <Grid item xs={5.2} sm={5.2} md={5.2} onClick={() => startQuiz('indian-army')}>
          <QuizButton name="Indian Army"  />
        </Grid>
        <Grid item xs={5.2} sm={5.2} md={5.2}onClick={() => startQuiz('indian-navy')}>
          <QuizButton name="Indian Navy"  />
        </Grid>
        <Grid item xs={5.2} sm={5.2} md={5.2}onClick={() => startQuiz('indian-air-force')}>
          <QuizButton name="Indian Air Force"  />
        </Grid>
        <Grid item xs={5.2} sm={5.2} md={5.2}onClick={() => startQuiz('indian-coast-guard')}>
          <QuizButton name="Indian Coast Guard"  />
        </Grid>
      </Grid>
    </>
  );
};

export default SelectQuiz;
