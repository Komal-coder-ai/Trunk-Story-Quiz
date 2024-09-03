import { Button } from '@mui/material'
import React from 'react'
import bgImage from '../../assets/bgimg2.jpg'
const QuizButton = ({name ,bgimage}) => {
  return (
    <div>
   <Button
   sx={{
    width: '100%',
    height: '100px',
    color:"var(--footer-color)",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
zIndex: '1',
   }}
   >
{name}
   </Button>

    </div>
  )
}

export default QuizButton
