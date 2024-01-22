
import React from 'react';

function EightBall({ color, message, handleClick }) {
  return (
    <div className="eight-ball" style={{ backgroundColor: color }}>
      <p>{message}</p>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default EightBall;



// import React, { useState } from 'react';

// function EightBall({ answers }) {
//   const [color, setColor] = useState("black");
//   const [message, setMessage] = useState("Think of a Question");

//   const handleClick = () => {
//     let randomIndex = Math.floor(Math.random() * answers.length);
//     if (answers[randomIndex]) {
//       setMessage(answers[randomIndex].msg);
//       setColor(answers[randomIndex].color); // Set the color state
//     } else {
//       console.error(`No answer at index ${randomIndex}`);
//     }
//   };

//   return (
//     <div className="eight-ball" style={{ backgroundColor: color }}>
//       <p>{message}</p>
//       <button onClick={handleClick}>Change</button> {/* Add this line */}
//     </div>
//   );
// }

// export default EightBall;