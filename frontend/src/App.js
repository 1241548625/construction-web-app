// import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ConfirmPage from "./components/ConfirmPage";
import ProjectPage from "./components/ProjectPage";
import ProjectDetail from "./components/ProjectDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const submitHandler = (input) => {
    setIsFormSubmitted(input);
  };
  return (
    <div classname="app">
      <BrowserRouter>
        <Routes>
          <Route />
          <Route
            index
            element={
              <div>
                <Navbar />
                <HomePage />
                <ServicePage />
                <ProjectPage />
                <AboutPage />
                <ContactPage />
                <Footer />
              </div>
            }
          />

          <Route path="project">
            <Route path=":projectId" element={<ProjectDetail />} />
          </Route>
          <Route
            path="contact"
            element={
              <div>
                <ContactPage />
              </div>
            }
          />

          <Route path="Confirm" element={<div>{<ConfirmPage />}</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
