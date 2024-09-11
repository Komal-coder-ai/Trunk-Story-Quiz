// import React, { useState, useEffect } from "react";
// import { HiArrowDownLeft } from "react-icons/hi2";
// import { Box, Grid, Typography, Button } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import CircleIcon from "@mui/icons-material/Circle";
// import "./index.css";
// import arrowimg from '../../assets/arrow.png';

// const Quiz = () => {
//   // const questions = [
//   //   {
//   //     text: "Based on whose life was the movie ‘Sam Bahadur’ directed?",
//   //     options: [
//   //       { text: "Gen. Manekshaw", isCorrect: true },
//   //       { text: "Capt. Vikram Batra", isCorrect: false },
//   //       { text: "Maj. Saurabh Kalia", isCorrect: false },
//   //     ],
//   //   },
//   //   {
//   //     text: "Based on whose life was the movie ‘Sam Bahadur’ directed?",
//   //     options: [
//   //       { text: "Gen. Manekshaw", isCorrect: true },
//   //       { text: "Capt. Vikram Batra", isCorrect: false },
//   //       { text: "Maj. Saurabh Kalia", isCorrect: false },
//   //     ],
//   //   },
//   //   {
//   //     text: "Based on whose life was the movie ‘Sam Bahadur’ directed?",
//   //     options: [
//   //       { text: "Gen. Manekshaw", isCorrect: true },
//   //       { text: "Capt. Vikram Batra", isCorrect: false },
//   //       { text: "Maj. Saurabh Kalia", isCorrect: false },
//   //     ],
//   //   },
//   //   {
//   //     text: "Which planet is known as the Red Planet?",
//   //     options: [
//   //       { text: "Mars", isCorrect: true },
//   //       { text: "Venus", isCorrect: false },
//   //       { text: "Jupiter", isCorrect: false },
//   //     ],
//   //   },
//   //   // Add more questions here
//   // ];
//   const questions = [
//     {
//       text: "Based on whose life was the movie ‘Sam Bahadur’ directed?",
//       options: [
//         { text: "Gen. Manekshaw", isCorrect: true },
//         { text: "Capt. Vikram Batra", isCorrect: false },
//         { text: "Maj. Saurabh Kalia", isCorrect: false },
//       ],
//     },
//     {
//       text: "Which planet is known as the Red Planet?",
//       options: [
//         { text: "Mars", isCorrect: true },
//         { text: "Venus", isCorrect: false },
//         { text: "Jupiter", isCorrect: false },
//       ],
//     },
//     {
//       text: "What is the capital city of France?",
//       options: [
//         { text: "Paris", isCorrect: true },
//         { text: "London", isCorrect: false },
//         { text: "Berlin", isCorrect: false },
//       ],
//     },
//     {
//       text: "What is the chemical symbol for gold?",
//       options: [
//         { text: "Au", isCorrect: true },
//         { text: "Ag", isCorrect: false },
//         { text: "Pb", isCorrect: false },
//       ],
//     },
//     {
//       text: "Which element is denoted by the symbol 'O' in the periodic table?",
//       options: [
//         { text: "Oxygen", isCorrect: true },
//         { text: "Osmium", isCorrect: false },
//         { text: "Oganesson", isCorrect: false },
//       ],
//     },]
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [score, setScore] = useState(0);
//   const [hasSelectedOption, setHasSelectedOption] = useState(false); // New state
//   const { category } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAnswered) {
//       const timer = setTimeout(() => {
//         if (selectedOption !== null) {
//           if (
//             questions[currentQuestionIndex].options[selectedOption].isCorrect
//           ) {
//             setScore(score + 1);
//           }
//         }

//         if (currentQuestionIndex < questions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//           navigate("/results", {
//             state: {
//               score:
//                 score +
//                 (questions[currentQuestionIndex].options[selectedOption]
//                   .isCorrect
//                   ? 1
//                   : 0),
//               total: questions.length,
//             },
//           });
//         }

//         setSelectedOption(null);
//         setIsAnswered(false);
//         setHasSelectedOption(false); // Reset after answer
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isAnswered]);

//   const handleOptionClick = (index) => {
//     setSelectedOption(index);
//     setIsAnswered(true);
//     setHasSelectedOption(true); // Mark that an option has been selected
//   };

//   return (
//     <>
//       <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} container justifyContent="flex-end" padding={0}>
//             <img src={arrowimg} alt="" />
//           </Grid>

//           <Grid item xs={11}>
//             <Typography
//               variant="h4"
//               component="h2"
//               gutterBottom
//               sx={{
//                 fontSize: "40px",
//                 textAlign: "left",
//                 fontWeight: "bold",
//               }}
//             >
//               {category.replace("-", " ").toUpperCase()} Quiz
//               <span
//                 style={{
//                   fontSize: "30px",
//                   fontWeight: "bold",
//                   color: "var(--footer-color)",
//                 }}
//               >
//                 <CircleIcon />
//               </span>
//             </Typography>
//           </Grid>
//         </Grid>

//         <Grid
//           container
//           justifyContent="center"
//           alignItems="center"
//           sx={{ my: 1 }}
//         >
//           <Box className="outerdiv">
//             <Box className="innerdiv"></Box>
//           </Box>
//         </Grid>

//         <Typography variant="h6" component="p" gutterBottom>
//           {!hasSelectedOption &&
//             <strong>Q.{currentQuestionIndex + 1}/5:</strong>
//           }{" "}
//           {questions[currentQuestionIndex].text}
//         </Typography>
//         <div>
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <Button
//               key={index}
//               onClick={() => handleOptionClick(index)}
//               sx={{
//                 display: "block",
//                 width: "100%",
//                 margin: "10px 0",
//                 border: "2px solid",
//                 marginTop: "10px",
//                 borderRadius: "0px",
//                 borderColor:
//                   selectedOption === index
//                     ? option.isCorrect
//                       ? "var(--green-color)"
//                       : "var(--gray-color)"
//                     : "#000",
//                 backgroundColor:
//                   selectedOption === index
//                     ? option.isCorrect
//                       ? "var(--green-color)"
//                       : "var(--red-color)"
//                     : "#fff",
//                 cursor: "pointer",
//                 textAlign: "left",
//                 fontSize: { xs: "14px", sm: "16px" },
//               }}
//               disabled={isAnswered}
//             >
//               <p style={{ color: "var(--black-color)" }}> {option.text}</p>
//             </Button>
//           ))}
//         </div>
//       </div>

//       <div
//         style={{
//           height: "63px",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignContent: "center",
//         }}
//       >

//         {!hasSelectedOption &&
//           <div
//             className="circle"
//             style={{
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               backgroundColor: "gray",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute",
//               margin: "auto",
//             }}
//           >

//             <p style={{ margin: 0 }}>{currentQuestionIndex + 1}</p>
//           </div>
//         }{" "}

//         {!hasSelectedOption &&
//           <p
//             style={{
//               marginTop: "auto",
//               textAlign: "center",
//               width: "400px",
//               position: "fixed",
//               bottom: "0",
//               // left: "0",
//             }}
//           >
//             Each quiz has 5 questions
//           </p>
//         }{" "}

//       </div>
//     </>
//   );
// };

// export default Quiz;

// import React, { useState, useEffect } from "react";
// import { Box, Grid, Typography, Button } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { collection, getDocs } from 'firebase/firestore';
// import CircleIcon from "@mui/icons-material/Circle";
// import "./index.css";
// import arrowimg from '../../assets/arrow.png';
// import { db } from "../../firebase";

// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [score, setScore] = useState(0);
//   const [hasSelectedOption, setHasSelectedOption] = useState(false);
//   const { category } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'Question'));
//         const allQuestions = querySnapshot.docs.map(doc => doc.data());

//         console.log("All Questions:", allQuestions);

//         // Shuffle and select 5 random questions
//         const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
//         const selectedQuestions = shuffledQuestions.slice(0, 5);

//         console.log("Selected Questions:", selectedQuestions);

//         setQuestions(selectedQuestions);
//       } catch (error) {
//         console.error("Error fetching questions: ", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     if (isAnswered) {
//       const timer = setTimeout(() => {
//         if (selectedOption !== null) {
//           const correctOption = questions[currentQuestionIndex]?.['Right Answer']?.toUpperCase();
//           const selectedOptionLetter = String.fromCharCode(65 + selectedOption);

//           console.log("Selected Option:", selectedOptionLetter);
//           console.log("Correct Option:", correctOption);

//           if (correctOption === selectedOptionLetter) {
//             setScore(score + 1);
//             alert("Correct Answer!");
//           } else {
//             alert("Incorrect Answer!");
//             navigate("/startquiz");
//             return;
//           }
//         }

//         if (currentQuestionIndex < questions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//           navigate("/results", {
//             state: {
//               score: score + (questions[currentQuestionIndex]?.['Right Answer'] === String.fromCharCode(65 + selectedOption) ? 1 : 0),
//               total: questions.length,
//             },
//           });
//         }

//         setSelectedOption(null);
//         setIsAnswered(false);
//         setHasSelectedOption(false);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isAnswered, questions, currentQuestionIndex, selectedOption, score, navigate]);

//   const handleOptionClick = (index) => {
//     setSelectedOption(index);
//     setIsAnswered(true);
//     setHasSelectedOption(true);
//   };

//   if (questions.length === 0) {
//     return <Typography>Loading questions...</Typography>;
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <>
//       <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} container justifyContent="flex-end" padding={0}>
//             <img src={arrowimg} alt="" />
//           </Grid>

//           <Grid item xs={11}>
//             <Typography
//               variant="h4"
//               component="h2"
//               gutterBottom
//               sx={{
//                 fontSize: "40px",
//                 textAlign: "left",
//                 fontWeight: "bold",
//               }}
//             >
//               {category.replace("-", " ").toUpperCase()} Quiz
//               <span
//                 style={{
//                   fontSize: "30px",
//                   fontWeight: "bold",
//                   color: "var(--footer-color)",
//                 }}
//               >
//                 <CircleIcon />
//               </span>
//             </Typography>
//           </Grid>
//         </Grid>

//         <Grid
//           container
//           justifyContent="center"
//           alignItems="center"
//           sx={{ my: 1 }}
//         >
//           <Box className="outerdiv">
//             <Box className="innerdiv"></Box>
//           </Box>
//         </Grid>

//         {currentQuestion && (
//           <>
//             <Typography variant="h6" component="p" gutterBottom>
//               {!hasSelectedOption &&
//                 <strong>Q.{currentQuestionIndex + 1}/{questions.length}:</strong>
//               }{" "}
//               {currentQuestion.Question}
//             </Typography>
//             <div>
//               {['Option A', 'Option B', 'Option C'].map((optionLabel, index) => {
//                 const optionKey = optionLabel;
//                 return (
//                   <Button
//                     key={index}
//                     onClick={() => handleOptionClick(index)}
//                     sx={{
//                       display: "block",
//                       width: "100%",
//                       margin: "10px 0",
//                       border: "2px solid",
//                       marginTop: "10px",
//                       borderRadius: "0px",
//                       borderColor:
//                         selectedOption === index
//                           ? currentQuestion['Right Answer'] === String.fromCharCode(65 + index)
//                             ? "var(--green-color)"
//                             : "var(--gray-color)"
//                           : "#000",
//                       backgroundColor:
//                         selectedOption === index
//                           ? currentQuestion['Right Answer'] === String.fromCharCode(65 + index)
//                             ? "var(--green-color)"
//                             : "var(--red-color)"
//                           : "#fff",
//                       cursor: "pointer",
//                       textAlign: "left",
//                       fontSize: { xs: "14px", sm: "16px" },
//                     }}
//                     disabled={isAnswered}
//                   >
//                     <p style={{ color: "var(--black-color)" }}>
//                       {currentQuestion[optionKey]}
//                     </p>
//                   </Button>
//                 );
//               })}
//             </div>
//           </>
//         )}
//       </div>

//       <div
//         style={{
//           height: "63px",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignContent: "center",
//         }}
//       >

//         {!hasSelectedOption &&
//           <div
//             className="circle"
//             style={{
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               backgroundColor: "gray",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute",
//               margin: "auto",
//             }}
//           >

//             <p style={{ margin: 0 }}>{currentQuestionIndex + 1}</p>
//           </div>
//         }{" "}

//         {!hasSelectedOption &&
//           <p
//             style={{
//               marginTop: "auto",
//               textAlign: "center",
//               width: "400px",
//               position: "fixed",
//               bottom: "0",
//             }}
//           >
//             Each quiz has 5 questions
//           </p>
//         }{" "}
//       </div>
//     </>
//   );
// };

// export default Quiz;

// import React, { useState, useEffect } from "react";
// import { Box, Grid, Typography, Button } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { collection, getDocs } from 'firebase/firestore';
// import CircleIcon from "@mui/icons-material/Circle";
// import "./index.css";
// import arrowimg from '../../assets/arrow.png';
// import { db } from "../../firebase";

// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [score, setScore] = useState(0);
//   const [hasSelectedOption, setHasSelectedOption] = useState(false);
//   const { category } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'Question'));
//         const allQuestions = querySnapshot.docs.map(doc => doc.data());

//         console.log("All Questions:", allQuestions);

//         // Shuffle and select 5 random questions
//         const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
//         const selectedQuestions = shuffledQuestions.slice(0, 5);

//         console.log("Selected Questions:", selectedQuestions);

//         setQuestions(selectedQuestions);
//       } catch (error) {
//         console.error("Error fetching questions: ", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     if (isAnswered) {
//       const timer = setTimeout(() => {
//         if (selectedOption !== null) {
//           const correctOption = questions[currentQuestionIndex]?.['Right Answer']?.toUpperCase();
//           const selectedOptionLetter = String.fromCharCode(65 + selectedOption);

//           console.log("Selected Option:", selectedOptionLetter);
//           console.log("Correct Option:", correctOption);

//           if (correctOption === selectedOptionLetter) {
//             setScore(score + 1);
//             // alert("Correct Answer!");
//           } else {
//             // alert("Incorrect Answer!");
//           }
//         }

//         if (currentQuestionIndex < questions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//           navigate("/results", {
//             state: {
//               score: score + (questions[currentQuestionIndex]?.['Right Answer'] === String.fromCharCode(65 + selectedOption) ? 1 : 0),
//               total: questions.length,
//             },
//           });
//         }

//         setSelectedOption(null);
//         setIsAnswered(false);
//         setHasSelectedOption(false);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isAnswered, questions, currentQuestionIndex, selectedOption, score, navigate]);

//   const handleOptionClick = (index) => {
//     setSelectedOption(index);
//     setIsAnswered(true);
//     setHasSelectedOption(true);
//   };

//   if (questions.length === 0) {
//     return <Typography>Loading questions...</Typography>;
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <>
//       <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} container justifyContent="flex-end" padding={0}>
//             <img src={arrowimg} alt="" />
//           </Grid>

//           <Grid item xs={11}>
//             <Typography
//               variant="h4"
//               component="h2"
//               gutterBottom
//               sx={{
//                 fontSize: "40px",
//                 textAlign: "left",
//                 fontWeight: "bold",
//               }}
//             >
//               {category.replace("-", " ").toUpperCase()} Quiz
//               <span
//                 style={{
//                   fontSize: "30px",
//                   fontWeight: "bold",
//                   color: "var(--footer-color)",
//                 }}
//               >
//                 <CircleIcon />
//               </span>
//             </Typography>
//           </Grid>
//         </Grid>

//         <Grid
//           container
//           justifyContent="center"
//           alignItems="center"
//           sx={{ my: 1 }}
//         >
//           <Box className="outerdiv">
//             <Box className="innerdiv"></Box>
//           </Box>
//         </Grid>

//         {currentQuestion && (
//           <>
//             <Typography variant="h6" component="p" gutterBottom>
//               {!hasSelectedOption &&
//                 <strong>Q.{currentQuestionIndex + 1}/{questions.length}:</strong>
//               }{" "}
//               {currentQuestion.Question}
//             </Typography>
//             <div>
//               {['Option A', 'Option B', 'Option C'].map((optionLabel, index) => {
//                 const optionKey = optionLabel;
//                 return (
//                   <Button
//                     key={index}
//                     onClick={() => handleOptionClick(index)}
//                     sx={{
//                       display: "block",
//                       width: "100%",
//                       margin: "10px 0",
//                       border: "2px solid",
//                       marginTop: "10px",
//                       borderRadius: "0px",
//                       borderColor:
//                         selectedOption === index
//                           ? currentQuestion['Right Answer'] === String.fromCharCode(65 + index)
//                             ? "var(--green-color)"
//                             : "var(--gray-color)"
//                           : "#000",
//                       backgroundColor:
//                         selectedOption === index
//                           ? currentQuestion['Right Answer'] === String.fromCharCode(65 + index)
//                             ? "var(--green-color)"
//                             : "var(--red-color)"
//                           : "#fff",
//                       cursor: "pointer",
//                       textAlign: "left",
//                       fontSize: { xs: "14px", sm: "16px" },
//                     }}
//                     disabled={isAnswered}
//                   >
//                     <p style={{ color: "var(--black-color)" }}>
//                       {currentQuestion[optionKey]}
//                     </p>
//                   </Button>
//                 );
//               })}
//             </div>
//           </>
//         )}
//       </div>

//       <div
//         style={{
//           height: "63px",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignContent: "center",
//         }}
//       >

//         {!hasSelectedOption &&
//           <div
//             className="circle"
//             style={{
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               backgroundColor: "gray",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute",
//               margin: "auto",
//             }}
//           >

//             <p style={{ margin: 0 }}>{currentQuestionIndex + 1}</p>
//           </div>
//         }{" "}

//         {!hasSelectedOption &&
//           <p
//             style={{
//               marginTop: "auto",
//               textAlign: "center",
//               width: "400px",
//               position: "fixed",
//               bottom: "0",
//             }}
//           >
//             Each quiz has 5 questions
//           </p>
//         }{" "}
//       </div>
//     </>
//   );
// };

// export default Quiz;






















import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, CircularProgress, LinearProgress } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import CircleIcon from "@mui/icons-material/Circle";
import "./index.css";
import arrowimg from "../../assets/arrow.png";
import { db } from "../../firebase";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [hasSelectedOption, setHasSelectedOption] = useState(false);
  const { category } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       // Determine the collection name based on the category
  //       const collectionName = category === 'indian-navy' ? 'Question_indian_navy' : 'Question';
  //       const querySnapshot = await getDocs(collection(db, collectionName));
  //       const allQuestions = querySnapshot.docs.map(doc => doc.data());

  //       console.log("All Questions:", allQuestions);

  //       // Shuffle and select 5 random questions
  //       const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
  //       const selectedQuestions = shuffledQuestions.slice(0, 5);

  //       console.log("Selected Questions:", selectedQuestions);

  //       setQuestions(selectedQuestions);
  //     } catch (error) {
  //       console.error("Error fetching questions: ", error);
  //     }
  //   };

  //   fetchQuestions();
  // }, [category]);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Determine the collection name based on the category
        const collectionName =
          category === "indian-navy" ? "Question_Indian_Navy" : "Question";
        console.log(`Fetching from collection: ${collectionName}`);

        const querySnapshot = await getDocs(collection(db, collectionName));
        if (querySnapshot.empty) {
          console.warn(`No documents found in collection: ${collectionName}`);
        }

        const allQuestions = querySnapshot.docs.map((doc) => doc.data());
        console.log("All Questions:", allQuestions);

        // Shuffle and select 5 random questions
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
            // alert("Correct Answer!");
          } else {
            // alert("Incorrect Answer!");
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

  // if (questions.length === 0) {
  //   return <Typography>Loading questions...</Typography>;
  // }
  // debugger
  if (questions.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          backgroundColor: "#f5f5f5", // Optional: add a background color if needed
        }}
      >
        <CircularProgress size={60} />
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} container justifyContent="flex-end" padding={0}>
            <img src={arrowimg} alt="" />
          </Grid>

          <Grid item xs={11}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontSize: "40px",
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

        {/* <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ my: 1 }}
        >
          <Box className="outerdiv">
            <Box className="innerdiv"></Box>
          </Box>
        </Grid> */}
    <Grid container justifyContent="center" alignItems="center" sx={{ my: 1 }}>
          <Box sx={{ width: '100%', marginTop: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progressPercentage}
              sx={{
                height: 5,
                // borderRadius: 5,
                backgroundColor: 'var(--black-color)', // Background color of the progress bar
                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'var(--footer-color)', // Color of the progress fill
                },
              }}
            />
          </Box>
        </Grid>
        {currentQuestion && (
          <>
            <Typography
              variant="h6"
              component="p"
              gutterBottom
              style={{ margin: "25px 5px" }}
            >
              {/* {!hasSelectedOption && ( */}
                <strong>
                  Q.{currentQuestionIndex + 1}/{questions.length}:
                </strong>
              {/* // )}{" "} */}
              {currentQuestion.Question}
            </Typography>
            {/* <div>
              {['Option A', 'Option B', 'Option C'].map((optionLabel, index) => {
                const optionKey = optionLabel;
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
                      borderColor:
                        selectedOption === index
                          ? currentQuestion['Right Answer'] === String.fromCharCode(65 + index)
                            ? "var(--green-color)"
                            : "var(--gray-color)"
                          : "#000",
                      backgroundColor:
                        selectedOption === index
                          ? currentQuestion['Right Answer'] === String.fromCharCode(65 + index)
                            ? "var(--green-color)"
                            : "var(--red-color)"
                          : "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: { xs: "14px", sm: "16px" },
                    }}
                    disabled={isAnswered}
                  >
                    <p style={{ color: "var(--black-color)" }}>
                      {currentQuestion[optionKey]}
                    </p>
                  </Button>
                );
              })}
            </div> */}
            <div>
              {["Option A", "Option B", "Option C"].map(
                (optionLabel, index) => {
                  const optionKey = optionLabel;
                  const isSelected = selectedOption === index;
                  const isCorrect =
                    currentQuestion["Right Answer"] ===
                    String.fromCharCode(65 + index);

                  // Determine text color based on button's background color
                  const textColor = isSelected
                    ? isCorrect
                      ? "#fff" // Green background
                      : "#fff" // Red background
                    : "#000"; // Default background

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
          </>
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
        {!hasSelectedOption && (
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
        )}{" "}
        {!hasSelectedOption && (
          <p
            style={{
              marginTop: "auto",
              textAlign: "center",
              width: "400px",
              position: "fixed",
              bottom: "0",
            }}
          >
            Each quiz has 5 questions
          </p>
        )}{" "}
      </div>
    </>
  );
};

export default Quiz;















// import { useState, useEffect } from "react";
// import { Box, Grid, Typography, Button, CircularProgress, LinearProgress } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import CircleIcon from "@mui/icons-material/Circle";
// import "./index.css";
// import arrowimg from "../../assets/arrow.png";
// import { db } from "../../firebase";

// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [score, setScore] = useState(0);
//   const [hasSelectedOption, setHasSelectedOption] = useState(false);
//   const { category } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const collectionName =
//           category === "indian-navy" ? "Question_Indian_Navy" : "Question";
//         const querySnapshot = await getDocs(collection(db, collectionName));
//         if (querySnapshot.empty) {
//           console.warn(`No documents found in collection: ${collectionName}`);
//         }

//         const allQuestions = querySnapshot.docs.map((doc) => doc.data());
//         const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
//         const selectedQuestions = shuffledQuestions.slice(0, 5);

//         setQuestions(selectedQuestions);
//       } catch (error) {
//         console.error("Error fetching questions: ", error);
//       }
//     };

//     fetchQuestions();
//   }, [category]);

//   useEffect(() => {
//     if (isAnswered) {
//       const timer = setTimeout(() => {
//         if (selectedOption !== null) {
//           const correctOption =
//             questions[currentQuestionIndex]?.["Right Answer"]?.toUpperCase();
//           const selectedOptionLetter = String.fromCharCode(65 + selectedOption);

//           if (correctOption === selectedOptionLetter) {
//             setScore(score + 1);
//           }

//           if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//           } else {
//             navigate("/results", {
//               state: {
//                 score:
//                   score +
//                   (questions[currentQuestionIndex]?.["Right Answer"] ===
//                   String.fromCharCode(65 + selectedOption)
//                     ? 1
//                     : 0),
//                 total: questions.length,
//               },
//             });
//           }

//           setSelectedOption(null);
//           setIsAnswered(false);
//           setHasSelectedOption(false);
//         }
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [
//     isAnswered,
//     questions,
//     currentQuestionIndex,
//     selectedOption,
//     score,
//     navigate,
//   ]);

//   const handleOptionClick = (index) => {
//     setSelectedOption(index);
//     setIsAnswered(true);
//     setHasSelectedOption(true);
//   };

//   if (questions.length === 0) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "60vh",
//           backgroundColor: "#f5f5f5",
//         }}
//       >
//         <CircularProgress size={60} />
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];
//   const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

//   return (
//     <>
//       <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} container justifyContent="flex-end" padding={0}>
//             <img src={arrowimg} alt="" />
//           </Grid>

//           <Grid item xs={11}>
//             <Typography
//               variant="h4"
//               component="h2"
//               gutterBottom
//               sx={{
//                 fontSize: "40px",
//                 textAlign: "left",
//                 fontWeight: "bold",
//               }}
//             >
//               {category.replace("-", " ").toUpperCase()} Quiz
//               <span
//                 style={{
//                   fontSize: "30px",
//                   fontWeight: "bold",
//                   color: "var(--footer-color)",
//                 }}
//               >
//                 <CircleIcon />
//               </span>
//             </Typography>
//           </Grid>
//         </Grid>

//         <Grid container justifyContent="center" alignItems="center" sx={{ my: 1 }}>
//           {/* Progress Bar Container */}
//           <Box sx={{ width: '100%', marginTop: 2 }}>
//             {/* <LinearProgress variant="determinate" value={progressPercentage} /> */}
//             <LinearProgress
//               variant="determinate"
//               value={progressPercentage}
//               sx={{
//                 height: 5,
//                 // borderRadius: 5,
//                 backgroundColor: 'var(--black-color)', // Background color of the progress bar
//                 '& .MuiLinearProgress-bar': {
//                   backgroundColor: 'var(--footer-color)', // Color of the progress fill
//                 },
//               }}
//             />
//           </Box>
//         </Grid>

//         {currentQuestion && (
//           <>
//             <Typography
//               variant="h6"
//               component="p"
//               gutterBottom
//               style={{ margin: "25px 5px" }}
//             >
//               <strong>
//                 Q.{currentQuestionIndex + 1}/{questions.length}:
//               </strong>{" "}
//               {currentQuestion.Question}
//             </Typography>
//             <div>
//               {["Option A", "Option B", "Option C"].map((optionLabel, index) => {
//                 const optionKey = optionLabel;
//                 const isSelected = selectedOption === index;
//                 const isCorrect =
//                   currentQuestion["Right Answer"] === String.fromCharCode(65 + index);

//                 const textColor = isSelected
//                   ? isCorrect
//                     ? "#fff" // Green background
//                     : "#fff" // Red background
//                   : "#000"; // Default background

//                 return (
//                   <Button
//                     key={index}
//                     onClick={() => handleOptionClick(index)}
//                     sx={{
//                       display: "block",
//                       width: "100%",
//                       margin: "10px 0",
//                       border: "2px solid",
//                       marginTop: "10px",
//                       borderRadius: "0px",
//                       borderColor: isSelected
//                         ? isCorrect
//                           ? "var(--green-color)"
//                           : "var(--gray-color)"
//                         : "#000",
//                       backgroundColor: isSelected
//                         ? isCorrect
//                           ? "var(--green-color)"
//                           : "var(--red-color)"
//                         : "#fff",
//                       cursor: "pointer",
//                       textAlign: "left",
//                       fontSize: { xs: "14px", sm: "16px" },
//                     }}
//                     disabled={isAnswered}
//                   >
//                     <p style={{ color: textColor }}>
//                       {currentQuestion[optionKey]}
//                     </p>
//                   </Button>
//                 );
//               })}
//             </div>
//           </>
//         )}
//       </div>

//       <div
//         style={{
//           height: "63px",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignContent: "center",
//         }}
//       >
//         {!hasSelectedOption && (
//           <div
//             className="circle"
//             style={{
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               backgroundColor: "gray",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute",
//               margin: "auto",
//             }}
//           >
//             <p style={{ margin: 0 }}>{currentQuestionIndex + 1}</p>
//           </div>
//         )}
//         {!hasSelectedOption && (
//           <p
//             style={{
//               marginTop: "auto",
//               textAlign: "center",
//               width: "400px",
//               position: "fixed",
//               bottom: "0",
//             }}
//           >
//             Each quiz has 5 questions
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Quiz;

