import React, { useState, useCallback } from "react";

// const { useCallback } = require("react");

function Child({ handleClick }) {
  console.log("Child rendered"); 
  return <button onClick={handleClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default Parent;
// // import React, { useState } from "react";

// // function Child({ handleClick }) {
// //   console.log("Child rendered"); 
// //   return <button onClick={handleClick}>Click Me</button>;
// // }

// // function Parent() {
// //   const [count, setCount] = useState(0);

// //   const handleClick = () => {
// //     console.log("Button clicked");
// //   };

// //   return (
// //     <div>
// //       <p>Count: {count}</p>
// //       <button onClick={() => setCount(count + 1)}>Increment</button>
// //       <Child handleClick={handleClick} />
// //     </div>
// //   );
// // }

// // export default Parent;
// const increase = useCallback(()=>{
//   setCount(count+1)
// })