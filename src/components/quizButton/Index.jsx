import { Button } from '@mui/material'
import React from 'react'
import bgImage from '../../assets/bgimg2.jpg'
const QuizButton = ({ name, bgimage }) => {
  
  return (
    <div>
      <button
        style={{
          width: '100%',
          height: '100px',
          color: "var(--footer-color)",
          // backgroundImage: `url(${bgImage})`,
          backgroundColor: 'var(--black-color)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          fontWeight:'900',
          justifyContent: 'center',
          fontSize: '18px',
          zIndex: '1',
          borderRadius: '10px'
        }}
      >
        {name}
      </button>

    </div>
  )
}

export default QuizButton
