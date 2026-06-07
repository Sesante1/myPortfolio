import React from "react";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <CustomCursor />
      
      <NavBar />
      <Hero />
      <AboutMe />
      <Contact />
    </>
  );
};

export default App;
