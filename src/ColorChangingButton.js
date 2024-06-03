import React, { useState } from 'react';

const ColorChangingButton = () => {
  const [background, setBackground] = useState('red');

  const handleClick = () => {
    setBackground(background === 'red' ? 'green' : 'red');
  };

  return (
    <button
      style={{
        background,
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      onClick={handleClick}>
      Click me to change background color!
    </button>
  );
}

export default ColorChangingButton;