import React from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import Estimation from "./components/estimation/Estimation";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
