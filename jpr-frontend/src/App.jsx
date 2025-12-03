  import { useState } from "react";
  import reactLogo from "./assets/react.svg";
  import viteLogo from "/vite.svg";
  import "./App.css";
  import Layout from "./components/layout/Layout.jsx";
  import { Routes, Route } from "react-router-dom";
  import HomePage from "./pages/HomePage.jsx";
  import AboutPage from "./pages/AboutPage.jsx";
  import CrashInvestigationsPage from "./pages/services/CrashInvestigationsPage.jsx";
  import DataAnalyticsPage from "./pages/services/DataAnalyticsPage.jsx";
  import RoadSafetyPage from "./pages/services/RoadSafetyPage.jsx";
  import TrainingPage from "./pages/services/TrainingPage.jsx";
  import DataCollectionPage from "./pages/services/DataCollectionPage.jsx";
  import CrashReconstructionPage from "./pages/services/CrashReconstructionPage.jsx";
  import LeadershipDetailPage from "./pages/LeadershipDetailPage.jsx";

  function App() {
    const [count, setCount] = useState(0);

    return (
      <>
  <div className='container-fluid font-inter'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services/crash-investigations' element={<CrashInvestigationsPage />} />
      <Route path='/services/data-analytics' element={<DataAnalyticsPage />} />
      <Route path='/services/road-safety-engineering' element={<RoadSafetyPage />} />
      <Route path='/services/training' element={<TrainingPage />} />
      <Route path='/services/data-collection' element={<DataCollectionPage />} />
      <Route path='/services/crash-reconstructions' element={<CrashReconstructionPage />} />
      <Route path='/leadership/:slug' element={<LeadershipDetailPage />} />
    </Routes>

  </div>

      </>
    );
  }

  export default App;
