import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CrashInvestigationsPage from "./pages/services/CrashInvestigationsPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
 <div className='container-fluid font-inter'>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/services/crash-investigations' element={<CrashInvestigationsPage />} />
  </Routes>

 </div>

    </>
  );
}

export default App;
