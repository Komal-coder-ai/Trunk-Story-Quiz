import React from "react";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuizButton from "./../../components/quizButton/Index";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || {};
  const startQuiz = (category) => {
    console.log(category, "category");
    navigate(`/quiz/${category}`);
  };
  const progressPercentage = total > 0 ? (score / total) * 100 : 0;
  const progressPercentage2 = 0;
  return (
    <div>
      <Container>
        <div
          style={{ overflow: "scroll", height: "38vh", scrollbarWidth: "none" }}
        >
          <h1
            style={{
              width: "95%",
              textAlign: "center",
              fontSize: "26px",
              fontWeight: "bolder",
              justifyContent: "center",
            }}
          >
            Well Played! You scored {score} out of {total}
          </h1>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ my: 3 }}
          >
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
          </Grid>

          <p
            style={{
              textAlign: "center",
              fontSize: "17px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Based on your performance, you get a 5 % discount coupon to shop
            with us.
            <span>Coupon code: QUIZ766</span>
            {/* <h2
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "var(--black-color)",
              }}
            >
              {" "}
              SHOP NOW
            </h2> */}
            <a href="https://trunkstory.com/" style={{ textDecoration: "underline" }}>
              <h2
                // style={{
                //   // textAlign: "center",
                //   // fontSize: "19px",
                //   // color: "var(--black-color)",
                //   // cursor:'pointer',

                // }}
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  color: "var(--black-color)",
                  cursor: 'pointer',
                  textDecoration: "underline", 
                  textDecorationColor: "var(--black-color)", 
                  textDecorationThickness: "2px", 
                }}
              >
                SHOP NOW
              </h2>
            </a>
          </p>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ my: 0 }}
          >
            <Box sx={{ width: "100%", marginTop: 2 }}>
              <LinearProgress
                variant="determinate"
                value={progressPercentage2}
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
          </Grid>
          <p
            style={{
              textAlign: "center",
              fontSize: "17px",
              fontWeight: "bolder",
              margin: "30px 10px",
            }}
          >
            or you can continue playing our quizzes, select a category from
            below to start playing again:
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "20px",
            marginLeft: "14px",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={5.8}
              sm={5.8}
              md={5.8}
              onClick={() => startQuiz("indian-army")}
            >
              {" "}
              <QuizButton name="Indian Army" />
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={5.8}
              md={5.8}
              onClick={() => startQuiz("indian-navy")}
            >
              {" "}
              <QuizButton name="Indian Navy" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Result;
