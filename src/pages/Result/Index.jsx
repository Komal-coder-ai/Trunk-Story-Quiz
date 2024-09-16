// import React from "react";
// import { Box, Container, Grid, LinearProgress } from "@mui/material";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import QuizButton from "./../../components/quizButton/Index";

// const Result = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { score, total } = location.state || {};
//   const startQuiz = (category) => {
//     console.log(category, "category");
//     navigate(`/quiz/${category}`);
//   };
//   const progressPercentage = total > 0 ? (score / total) * 100 : 0;
//   const progressPercentage2 = 0;
//   return (
//     <div>
//       <Container>
//         <div
//           style={{ overflow: "scroll", height: "53vh", scrollbarWidth: "none" }}
//         >
//           <h1
//             style={{
//               width: "95%",
//               textAlign: "center",
//               fontSize: "26px",
//               fontWeight: "bolder",
//               justifyContent: "center",
//             }}
//           >
//             Well Played! You scored {score} out of {total}
//           </h1>
//           <Grid
//             container
//             justifyContent="center"
//             alignItems="center"
//             sx={{ my: 3 }}
//           >
//             <Box sx={{ width: "100%", marginTop: 2 }}>
//               <LinearProgress
//                 variant="determinate"
//                 value={progressPercentage}
//                 sx={{
//                   height: 5,
//                   // borderRadius: 5,
//                   backgroundColor: "var(--black-color)",
//                   "& .MuiLinearProgress-bar": {
//                     backgroundColor: "var(--footer-color)",
//                   },
//                 }}
//               />
//             </Box>
//           </Grid>

//           <p
//             style={{
//               textAlign: "center",
//               fontSize: "17px",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             Based on your performance, you get a 5% discount coupon to shop with
//             us.
//             <span>Coupon code: QUIZ766</span>
//             {/* <h2
//               style={{
//                 textAlign: "center",
//                 fontSize: "18px",
//                 color: "var(--black-color)",
//               }}
//             >
//               {" "}
//               SHOP NOW
//             </h2> */}
//             <a
//               href="https://trunkstory.com/"
//               style={{ textDecoration: "underline" }}
//             >
//               <h2
//                 // style={{
//                 //   // textAlign: "center",
//                 //   // fontSize: "19px",
//                 //   // color: "var(--black-color)",
//                 //   // cursor:'pointer',

//                 // }}
//                 style={{
//                   textAlign: "center",
//                   fontSize: "19px",
//                   color: "var(--black-color)",
//                   cursor: "pointer",
//                   textDecoration: "underline",
//                   textDecorationColor: "var(--black-color)",
//                   textDecorationThickness: "2px",
//                 }}
//               >
//                 SHOP NOW
//               </h2>
//             </a>
//           </p>

//           <Grid
//             container
//             justifyContent="center"
//             alignItems="center"
//             sx={{ my: 0 }}
//           >
//             <Box sx={{ width: "100%", marginTop: 2 }}>
//               <LinearProgress
//                 variant="determinate"
//                 value={progressPercentage2}
//                 sx={{
//                   height: 5,
//                   // borderRadius: 5,
//                   backgroundColor: "var(--black-color)",
//                   "& .MuiLinearProgress-bar": {
//                     backgroundColor: "var(--footer-color)",
//                   },
//                 }}
//               />
//             </Box>
//           </Grid>
//           <p
//             style={{
//               textAlign: "center",
//               fontSize: "17px",
//               fontWeight: "bolder",
//               margin: "30px 10px",
//             }}
//           >
//             or you can continue playing our quizzes, select a category from
//             below to start playing again:
//           </p>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignContent: "center",
//               marginTop: "20px",
//               marginLeft: "14px",
//             }}
//           >
//             <Grid container spacing={2}>
//               <Grid
//                 item
//                 xs={5.8}
//                 sm={5.8}
//                 md={5.8}
//                 onClick={() => startQuiz("indian-army")}
//               >
//                 {" "}
//                 <QuizButton name="Indian Army" />
//               </Grid>
//               <Grid
//                 item
//                 xs={5.8}
//                 sm={5.8}
//                 md={5.8}
//                 onClick={() => startQuiz("indian-navy")}
//               >
//                 {" "}
//                 <QuizButton name="Indian Navy" />
//               </Grid>
//               <Grid item xs={5.6} sm={5.6} md={5.6}>
//                 <QuizButton name="Indian Air Force" />
//               </Grid>
//               <Grid
//                 item
//                 xs={5.6}
//                 sm={5.6}
//                 md={5.6}
//                 onClick={() => startQuiz("indian-coast-guard")}
//               >
//                 <QuizButton name="Indian Coast Guard" />
//               </Grid>
//             </Grid>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Result;
import React from "react";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuizButton from "./../../components/quizButton/Index";
import Header from "../../components/header/Index";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || {};

  const startQuiz = (category) => {
    console.log(category, "category");
    navigate(`/quiz/${category}`);
  };

  const progressPercentage = total > 0 ? (score / total) * 100 : 0;

  // Determine the discount and coupon code based on the score
  const getDiscountInfo = (score) => {
    if (score === 5) return { discount: 10, code: "tenisyours" };
    if (score === 4) return { discount: 9, code: "finenine" };
    if (score === 3) return { discount: 8, code: "geteight" };
    if (score === 2) return { discount: 7, code: "thalaforareason" };
    if (score === 1) return { discount: 6, code: "itsasix" };
    return { discount: 5, code: "get5now" };
  };

  const { discount, code } = getDiscountInfo(score);

  return (
    <div style={{ overflow: "scroll", height: "85vh", scrollbarWidth: "none" }}>
      <Header />
      <Container>
        <div
        // style={{ overflow: "scroll", height: "53vh", scrollbarWidth: "none" }}
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
            Based on your performance, you get a {discount}% discount coupon to
            shop with us.
            <span>Coupon code: {code}</span>
            <a
              href="https://trunkstory.com/"
              style={{ textDecoration: "underline" }}
            >
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  color: "var(--black-color)",
                  cursor: "pointer",
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
                value={0}
                sx={{
                  height: 5,
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
            Or you can continue playing our quizzes. Select a category from
            below to start playing again:
          </p>

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
              <Grid
                item
                xs={5.8}
                sm={5.8}
                md={5.8}
                onClick={() => startQuiz("indian-air-force")}
              >
                <QuizButton name="Indian Air Force " />
              </Grid>
              <Grid
                item
                xs={5.8}
                sm={5.8}
                md={5.8}
                onClick={() => startQuiz("indian-coast-guard")}
              >
                <QuizButton name="Indian Coast Guard" />
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Result;
