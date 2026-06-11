import React from "react";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import NavBar from "./components/NavBar";
import FeaturedProjects from "./sections/FeaturedProjects";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <>
      <CustomCursor />
      <Chatbot />

      <NavBar />
      <Hero />
      {/* <AboutMe /> */}
      <FeaturedProjects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
