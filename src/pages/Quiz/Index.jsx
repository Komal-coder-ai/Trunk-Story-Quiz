
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import CircleIcon from "@mui/icons-material/Circle";
import "./index.css";
import arrowimg from "../../assets/arrow.png";
import { db } from "../../firebase";

const Quiz = ({isSelected}) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [hasSelectedOption, setHasSelectedOption] = useState(false);
  const { category } = useParams();
  const navigate = useNavigate();

 const handleroute=()=>{
  navigate('/')
  
 }

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
     
        const collectionName =
          category === "indian-navy" ? "Question_Indian_Navy" : "Question";
        console.log(`Fetching from collection: ${collectionName}`);

        const querySnapshot = await getDocs(collection(db, collectionName));
        if (querySnapshot.empty) {
          console.warn(`No documents found in collection: ${collectionName}`);
        }

        const allQuestions = querySnapshot.docs.map((doc) => doc.data());
        console.log("All Questions:", allQuestions);

      
        const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, 5);

        console.log("Selected Questions:", selectedQuestions);

        setQuestions(selectedQuestions);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };

    fetchQuestions();
  }, [category]);

  useEffect(() => {
    if (isAnswered) {
      const timer = setTimeout(() => {
        if (selectedOption !== null) {
          const correctOption =
            questions[currentQuestionIndex]?.["Right Answer"]?.toUpperCase();
          const selectedOptionLetter = String.fromCharCode(65 + selectedOption);

          console.log("Selected Option:", selectedOptionLetter);
          console.log("Correct Option:", correctOption);

          if (correctOption === selectedOptionLetter) {
            setScore(score + 1);
          
          } else {
          
          }
        }

        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          navigate("/results", {
            state: {
              score:
                score +
                (questions[currentQuestionIndex]?.["Right Answer"] ===
                String.fromCharCode(65 + selectedOption)
                  ? 1
                  : 0),
              total: questions.length,
            },
          });
        }

        setSelectedOption(null);
        setIsAnswered(false);
        setHasSelectedOption(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [
    isAnswered,
    questions,
    currentQuestionIndex,
    selectedOption,
    score,
    navigate,
  ]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsAnswered(true);
    setHasSelectedOption(true);
  };


  if (questions.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          // backgroundColor: "rgb(13, 13, 13)", 
        }}
      >
        <CircularProgress size={60}   sx={{
          color: "rgb(13, 13, 13)", // Custom color using a CSS variable
        }}/>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;


  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif"  }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} container justifyContent="flex-end" padding={0}>
            <img src={arrowimg} alt=""   onClick={handleroute}/>
          </Grid>

          <Grid item xs={11}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontSize: "35px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              {category.replace("-", " ").toUpperCase()} Quiz
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "var(--footer-color)",
                }}
              >
                <CircleIcon />
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ my: 1 }}
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
        {currentQuestion && (
          <div style={{overflow:"scroll",maxHeight:'55vh',scrollbarWidth:"none"}}>
            <Typography
              variant="h6"
              component="p"
              gutterBottom
              style={{ margin: "25px 5px" }}
            >
              
              <strong>
                Q.{currentQuestionIndex + 1}/{questions.length}:
              </strong>
           
              {currentQuestion.Question}
            </Typography>
       
            <div>
              {["Option A", "Option B", "Option C"].map(
                (optionLabel, index) => {
                  const optionKey = optionLabel;
                  const isSelected = selectedOption === index;
                  const isCorrect =
                    currentQuestion["Right Answer"] ===
                    String.fromCharCode(65 + index);

              
                  const textColor = isSelected
                    ? isCorrect
                      ? "#fff"
                      : "#fff" 
                    : "#000";

                  return (
                    <Button
                    
                      key={index}
                      onClick={() => handleOptionClick(index)}
                      sx={{
                        display: "block",
                        width: "100%",
                        margin: "10px 0",
                        border: "2px solid",
                        marginTop: "10px",
                        borderRadius: "0px",
                        borderColor: isSelected
                          ? isCorrect
                            ? "var(--green-color)"
                            : "var(--gray-color)"
                          : "#000",
                        backgroundColor: isSelected
                          ? isCorrect
                            ? "var(--green-color)"
                            : "var(--red-color)"
                          : "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                        fontSize: { xs: "14px", sm: "16px" },
                      }}
                      disabled={isAnswered}
                    >
                      <p style={{ color: textColor }}>
                        {currentQuestion[optionKey]}
                      </p>
                    </Button>
                   
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          height: "63px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
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
              marginTop: "auto",
              textAlign: "center",
              width: "400px",
              position: "fixed",
              bottom: "0",
            }}
          >
            Each Quiz has 5 Questions
          </p>
     
      </div>
    </>
  );
};

export default Quiz;

