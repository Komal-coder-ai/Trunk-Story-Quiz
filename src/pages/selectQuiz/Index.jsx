import React from "react";
import { useNavigate } from "react-router-dom";
import QuizButton from "../../components/quizButton/Index";
import { Box, Container, Grid, Button, LinearProgress } from "@mui/material";

const SelectQuiz = () => {
  const navigate = useNavigate();

  const startQuiz = (category) => {
    navigate(`/quiz/${category}`);
  };

  // const handleroute = () => {
  //   navigate("/");
  // };
  const progressPercentage = 0;

  return (
    <>
      <Container spacing={3}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={"center"}
        >
          <Grid item xs={11} style={{ textAlign: "center" }}>
            <h2>Select a category of your choice to begin the quiz</h2>
          </Grid>
        </Grid>
      </Container>

      <Container
        justifyContent="center"
        alignItems="center"
        sx={{ my: 1 }}
        spacing={3}
      >
        {/* <Box className="outerdiv">
          <Box className="innerdiv"></Box>
        </Box> */}
        <Box sx={{ width: "100%", marginTop: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progressPercentage}
            sx={{
              height: 5,
              // borderRadius: 5,
              backgroundColor: "var(--black-color)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "var(--footer-color)",
              },
            }}
          />
        </Box>
      </Container>

      <Grid container spacing={1} sx={{ mx: 0.1, my: 3 }}>
        <Grid
          item
          xs={5.6}
          sm={5.6}
          md={5.6}
          onClick={() => startQuiz("indian-army")}
        >
          <QuizButton name="Indian Army" />
        </Grid>
        <Grid
          item
          xs={5.6}
          sm={5.6}
          md={5.6}
          onClick={() => startQuiz("indian-navy")}
        >
          <QuizButton name="Indian Navy" />
        </Grid>
        <Grid
          item
          xs={5.6}
          sm={5.6}
          md={5.6}
          onClick={() => startQuiz("indian-air-force")}
        >
          <QuizButton name="Indian Air Force" />
        </Grid>
        <Grid
          item
          xs={5.6}
          sm={5.6}
          md={5.6}
          onClick={() => startQuiz("indian-coast-guard")}
        >
          <QuizButton name="Indian Coast Guard" />
        </Grid>
      </Grid>

    </>
  );
};

export default SelectQuiz;
