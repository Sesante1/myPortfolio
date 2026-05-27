import React from "react";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import AboutMe from "./sections/AboutMe";

const App = () => {
  return (
    <>
      <CustomCursor />

      <Hero />
      <AboutMe />
    </>
  );
};

export default App;
