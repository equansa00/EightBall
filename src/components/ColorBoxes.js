
import React from 'react';

function ColorBoxes({ boxes }) {
  return (
    <div className="boxes">
      {boxes.map((color, idx) => (
        <div key={idx} className="box" style={{ backgroundColor: color }}></div>
      ))}
    </div>
  );
}

export default ColorBoxes;


// import React, { useState } from 'react';

// const defaultColors = ["red", "green", "blue", "yellow", "purple"];

// function ColorBoxes({ numOfBoxes = 16, colors = defaultColors }) {
//   const generateRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
//   const initialBoxes = Array.from({ length: numOfBoxes }, generateRandomColor);
  
//   const [boxes, setBoxes] = useState(initialBoxes);

//   return (
//     <div className="boxes">
//       {boxes.map((color, idx) => (
//         <div key={idx} className="box" style={{ backgroundColor: color }}></div>
//       ))}
//     </div>
//   );
// }

// export default ColorBoxes;