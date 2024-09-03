import React from 'react';

const ButtonDynamic = ({ width, height, bgColor, text }) => {
  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: bgColor,
    color: '#fff', 
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    fontSize: '20px',
    
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  );
};

export default ButtonDynamic;
