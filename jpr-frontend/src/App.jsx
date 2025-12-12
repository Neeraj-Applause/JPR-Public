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
  import ScrollToTop from "./components/ScrollToTop.jsx";
  import InjuryAnalysisPage from "./pages/services/InjuryAnalysisPage.jsx";
  import NewsPage from "./pages/NewsPage.jsx";

  import AdminLogin from "./pages/dashboard/AdminLogin.jsx";
  import DashboardLayout from "./components/layout/dashboard/Layout.jsx";
  import AdminHome from "./pages/dashboard/AdminHome.jsx";
  import ProtectedRoute from "./services/ProtectedRoute.jsx";
  import AdminNews from "./pages/dashboard/AdminNews.jsx";
  import AdminPublications from "./pages/dashboard/AdminPublications.jsx";



  function App() {
    const [count, setCount] = useState(0);

    return (
      <>
    <ScrollToTop />
    <Routes>
      {/* Public routes with container */}
      <Route path='/' element={<div className='container-fluid font-inter'><HomePage /></div>} />
      <Route path='/about' element={<div className='container-fluid font-inter'><AboutPage /></div>} />
      <Route path='/services/crash-investigations' element={<div className='container-fluid font-inter'><CrashInvestigationsPage /></div>} />
      <Route path='/services/data-analytics' element={<div className='container-fluid font-inter'><DataAnalyticsPage /></div>} />
      <Route path='/services/road-safety-engineering' element={<div className='container-fluid font-inter'><RoadSafetyPage /></div>} />
      <Route path='/services/training' element={<div className='container-fluid font-inter'><TrainingPage /></div>} />
      <Route path='/services/data-collection' element={<div className='container-fluid font-inter'><DataCollectionPage /></div>} />
      <Route path='/services/crash-reconstructions' element={<div className='container-fluid font-inter'><CrashReconstructionPage /></div>} />
      <Route path='/leadership/:slug' element={<div className='container-fluid font-inter'><LeadershipDetailPage /></div>} />
      <Route path='/services/injury-analysis' element={<div className='container-fluid font-inter'><InjuryAnalysisPage /></div>} />
      <Route path='/news' element={<div className='container-fluid font-inter'><NewsPage /></div>} />

      {/* Admin login without container */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin dashboard without container */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminHome />} />
        <Route path="news" element={<AdminNews />} />
        <Route path="publications" element={<AdminPublications />} />
        {/* <Route path="projects" element={<AdminProjects />} /> */}
        {/* <Route path="careers" element={<AdminCareers />} /> */}
        {/* <Route path="contact-messages" element={<AdminContactMessages />} /> */}
      </Route>
    </Routes>
      </>
    );
  }

  export default App;
