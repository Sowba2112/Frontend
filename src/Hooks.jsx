// ------------useState&useEffect----------------
// import React, { useState, useEffect } from "react";
// function App(){
//   let[Count, setCount] = useState(0);
//   useEffect(()=>{
//     console.log("value updated");
//   },[Count])
//   return(
//     <div>
//       <h1>Count: {Count}</h1>
//       <button onClick={() => setCount(Count+1)}>Increment</button>
//       <button onClick={() => setCount(Count-1)}>Decrement</button>
//     </div>
//   )
// }
// export default App




// -----------usestate&useRef----------------
// import React, { useState, useRef } from "react";
// function App(){
//   let[Count, setCount] = useState(0);
//   let countRef = useRef(0);
//   let increment = ()=>{
//     setCount(Count+1);
//     countRef.current++;
//     console.log("state: ",Count);
//     console.log("Ref: ",countRef.current);
//   }
//   return(
//   <div>
//     <h1>Count: {countRef.current}</h1>
//     <button onClick={increment}>++++</button>
//   </div>
//   );
// }
// export default App






// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";
// function Useref() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//     console.log("Render Count: ", count.current);
//   });
//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }
// export default Useref


