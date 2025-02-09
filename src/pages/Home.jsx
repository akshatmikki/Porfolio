import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Email from "../components/Email";

function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <div className=" overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Dark Mode */}
        {!isDarkMode && (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        )}
        {/* Light Mode */}
        {isDarkMode && (
          <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(148,147,147,.9)_100%)]"></div>
        )}
      </div>
      <Social isDarkMode={isDarkMode} />
      <Email isDarkMode={isDarkMode} />
      <div className="mx-auto px-8 max-md:px-4 ">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      <div className="container mx-auto px-16 -mt-14">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Technologies isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default Home;
