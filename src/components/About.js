import React, { useState, useEffect } from "react";
import { useDarkModeContext } from "../DarkModeContext";
import './About.css';

export default function About() {
  const { isDarkMode } = useDarkModeContext();
  const images = ["./2-min.png", "./4-min.png", "./6-min.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="about" style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0' }}>
      <div className="top-20 container pt-[8rem] md:pt-[8rem] mx-auto px-1 flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" style={{ color: isDarkMode ? 'white' : 'black' }}>
          <h1 className="title-font text-3xl md:text-4xl mb-2 font-bold">
            Hi There,
          </h1>
          <h1 className="title-font text-3xl md:text-4xl mb-5 font-bold">
            I am <span className="text-sky-500">Rigel</span> Ramadhani W.
          </h1>
          <p className="mb-8 leading-relaxed px-5 md:px-0">
            Passionate about crafting beautiful interfaces that captivate users. Let's collaborate and bring your ideas to life!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">
              View Portfolio
            </a>
            <a
              href="#projects"
              className={`ml-4 inline-flex text-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 hover:text-white rounded text-lg ${isDarkMode ? 'bg-gray-500' : 'bg-white'} ${isDarkMode ? '' : 'border-sky-300 border-2' }`}>
              See Skills
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hover:animate-testing relative mt-10">
          <img
            className="object-cover object-center inset-4 rounded animate-testing"
            alt="hero"
            src={images[currentImageIndex]}
          />
        </div>
      </div>
      <style>
        {`
        @keyframes animate-testing {
          0% {transform: translateX(0px);}
          100% {transform: translateX(-100px);}
        }
        `}
      </style>
    </div>
  );
}
