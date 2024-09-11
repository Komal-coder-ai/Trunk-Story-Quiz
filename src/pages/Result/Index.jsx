import React from "react";
import { Box, Container, Grid } from "@mui/material";
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

  return (
    <div>
      <Container>
        <div style={{ overflow: "scroll", height: "38vh" }}>
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
            <Box className="outerdiv">
              <Box className="innerdiv"></Box>
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
            Based on Your performance , you get a 5 % discount coupon to shop
            with us.
            <span>Coupon code : QUIZ766</span>
            <h2
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "var(--black-color)",
              }}
            >
              {" "}
              SHOP NOW
            </h2>
          </p>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ my: 0 }}
          >
            <Box className="outerdiv">
              <Box className="innerdiv"></Box>
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
            or , you can continue playing our quizzes , select a category from
            below to start playing again:
          </p>
        </div>

        <div
        //  style={{position:'fixed',justifyContent:'center',alignContent:'center',maxWidth:"100%",marginTop:'20px'}}
        style={{marginTop:"30px"}}
         >
          <Grid container spacing={2} sx={{ mx: 0.1 }}>
            <Grid
              item
              xs={5.8}
              sm={5.8}
              md={5.8}
              onClick={() => startQuiz("indian-army")}
            >
              <QuizButton name="Indian Army" />
            </Grid>
            <Grid
              item
              xs={5.8}
              sm={5.8}
              md={5.8}
              onClick={() => startQuiz("indian-navy")}
            >
              <QuizButton name="Indian Navy" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Result;
