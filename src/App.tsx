import React from "react";
import Navbar from "./Navbar";
import CustomCarousel from "./CustomCarousel";
import Services from "./Services";
import Project from "./Project";
import About from "./About";
import Blog from "./Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import "./CustomCarousel.css";
import Contact from "./Contect";
import Index from "./Index";


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Services" element={<Services id={"services"} />} />
        <Route path="/CustomCarousel" element={<CustomCarousel id={"CustomCarousel"} />} />
        <Route path="/project" element={<Project id={"project"} />} />
        <Route path="/about" element={<About id={"about"} />} />
        <Route path="/blog" element={<Blog id={"blog"} />} />
        <Route path="/contact" element={<Contact id={"contact"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;









