import React from "react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Jomel Sesante
        </a>

        <nav className="desktop">
          <ul>
            <li className="group">
              <a href="#home">Home</a>
              <span className="underline"></span>
            </li>
            <li className="group">
              <a href="#about">About</a>
              <span className="underline"></span>
            </li>
            <li className="group">
              <a href="#contact">Contact</a>
              <span className="underline"></span>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
