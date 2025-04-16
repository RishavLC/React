import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Route,Routes } from 'react-router-dom';
import Sidebar from './component/sidebar';
// import Home from './pages/home';
// import About from './pages/about';
// import Contact from './pages/contact';
import './App.css'; 
import { GlobalStateProvider } from './provider/GlobalStateContext';

const App = () => {
  return (
    <GlobalStateProvider>
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes> */}
        </div>
      </div>
    </Router>
    </GlobalStateProvider>
  );
};

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import ArrList from './ArrList';
// import Counter from './test';
// import Parent from './callback';

// // function ArrList(){
// //   const [arr, setArr] = useState([]);
// //   const [input, setInput] = useState("");

// //   const arr_set = () =>{
// //       setArr([...arr, input]);
// //       setInput("");
// //   }
// //   return (
// //       <div>
// //           Array: <input type="text" value={input} onChange={(e) => setInput(e.target.value)} ></input>
// //           <button onClick={arr_set}>Add</button>
// //           <ul>
// //               {arr.map((item, index) => (
// //                   <li key={index}>{item}</li>
// //                   ))}
// //           </ul>
// //       </div>
// //   )
// // } ;
// // export default ArrList;

// function App() {
//   const [count, setCount] = useState(0);

//   const [randomNumber, setRandomNumber] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const spin = () => {
//     const randomValue = Math.floor(Math.random() * 100) + 1;
//     setRandomNumber(randomValue);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//          <Parent/>
//          <ArrList />
//          <Counter count={count} increment={increment} decrement={decrement} />
//         <p>
//           Counter: <span>{count}</span>
//         </p>
//         <div>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//         </div>
//         <div style={{ marginTop: '20px' }}>
//           <p>Random Spin Box</p>
//           <div className="spin-box">
//             <p>{randomNumber}</p>
//           </div>
//           <button onClick={spin}>Spin</button>
//         </div>

//       </header>
//     </div>
//   );
// }

// export default App;
