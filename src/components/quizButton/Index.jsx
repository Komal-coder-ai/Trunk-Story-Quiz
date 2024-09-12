// import { Button } from "@mui/material";
// import React from "react";
// import bgImage from "../../assets/bgimg2.jpg";
// const QuizButton = ({ name, bgimage }) => {
//   return (
//     <div>
//       <Button
//         sx={{
//           width: "100%",
//           height: "100px",
//           color: "var(--footer-color)",

//           backgroundColor: "var(--black-color)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           fontWeight: "900",
//           justifyContent: "center",
//           fontSize: "18px",
//           zIndex: "1",
//           borderRadius: "10px",
//           transition: "transform 0.3s ease, background-color 0.3s ease",
//           "&:hover": {
//             backgroundColor: "#333",
//             transform: "translateY(-5px)",
//           },
//           "&:active": {
//             backgroundColor: "#000",
//             transform: "translateY(0)",
//           },
//         }}
//       >
//         {name}
//       </Button>
//     </div>
//   );
// };

// export default QuizButton;
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuizButton = ({ name, to }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [navigateAfterAnimation, setNavigateAfterAnimation] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent default button behavior

    // Start the animation
    setIsAnimating(true);

    // Set a flag to navigate after animation completes
    setNavigateAfterAnimation(true);
  };

  // Effect to handle navigation after animation
  useEffect(() => {
    if (navigateAfterAnimation) {
      const timer = setTimeout(() => {
        navigate(to); // Navigate to the new page
      }, 500); // 500 milliseconds delay

      // Clean up the timer if the component unmounts before the timeout
      return () => clearTimeout(timer);
    }
  }, [navigateAfterAnimation, navigate, to]);

  return (
    <Button
      onClick={handleClick}
      sx={{
        width: "100%",
        height: "100px",
        color: "var(--footer-color)",
        backgroundColor: "var(--black-color)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        fontWeight: "900",
        justifyContent: "center",
        fontSize: "18px",
        zIndex: "1",
        borderRadius: "10px",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        transform: isAnimating ? "translateY(-5px)" : "translateY(0)",
        backgroundColor: isAnimating ? "#333" : "var(--black-color)",
        "&:hover": {
          backgroundColor: "#333",
          transform: "translateY(-5px)",
        },
        "&:active": {
          backgroundColor: "#000",
          transform: "translateY(0)",
        },
      }}
    >
      {name}
    </Button>
  );
};

export default QuizButton;
