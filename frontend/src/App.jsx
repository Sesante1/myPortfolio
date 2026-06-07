import React from "react";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import NavBar from "./components/NavBar";
import FeaturedProjects from "./sections/FeaturedProjects";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <>
      <CustomCursor />

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
