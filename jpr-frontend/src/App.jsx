import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
 <div className='container-fluid font-inter'>
  <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>

 </div>

    </>
  );
}

export default App;
