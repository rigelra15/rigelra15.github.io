import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useDarkModeContext } from "../DarkModeContext";

function MobileMenu({ isDarkMode, toggleDarkMode, isOpen, onToggle }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: isDarkMode ? 'rgba(33, 33, 33, 0.8)' : 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)'}}
    >
      <div className="flex justify-between p-5">
        <button
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-full text-xl p-2"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <FaSun style={{ color: "orange" }} />
          ) : (
            <FaMoon style={{ color: "orange" }} />
          )}
        </button>
        <button onClick={onToggle}>
          {isOpen ? (
            <FaTimes style={{ color: isDarkMode ? 'white' : 'black' }} />
          ) : (
            <FaBars style={{ color: isDarkMode ? 'white' : 'black' }} />
          )}
        </button>
      </div>
      <ul className="flex flex-col items-center space-y-4">
        <li>
          <a
            href="/"
            style={{
              backgroundColor: isDarkMode ? "#3d3d3d" : "gray",
              color: isDarkMode ? "white" : "white",
            }}
            className="px-4 py-2 rounded-full font-semibold"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href=""
            style={{ color: isDarkMode ? "white" : "black" }}
            className="px-4 py-2 font-semibold"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href=""
            style={{ color: isDarkMode ? "white" : "black" }}
            className="px-4 py-2 font-semibold"
          >
            Portofolio
          </a>
        </li>
        <li>
          <a
            href=""
            style={{ color: isDarkMode ? "white" : "black" }}
            className="px-4 py-2 font-semibold"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href=""
            style={{ color: isDarkMode ? "white" : "black" }}
            className="px-4 py-2 font-semibold"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ backgroundColor: isDarkMode ? "#212121" : "#ffffff" }}
      className="py-5 px-10 rounded-b-[30px] fixed top-0 left-0 right-0"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          style={{ color: isDarkMode ? "white" : "#212121" }}
          className="text-2xl font-bold"
        >
          Rigel R.
        </a>

        <ul className="hidden md:flex space-x-8">
          <li><a href="/" style={{ backgroundColor: isDarkMode ? '#3d3d3d' : 'gray', color: isDarkMode ? 'white' : 'white' }} class="bg-gray-200 px-4 py-2 rounded-full ease-in-out duration-300 font-semibold">Home</a></li>
          <li><a href="" style={{ color: isDarkMode ? 'white' : '#212121' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out duration-300 hover:font-semibold hover:mx-[-10px]">About Me</a></li>
          <li><a href="" style={{ color: isDarkMode ? 'white' : '#212121' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out duration-300 hover:font-semibold hover:mx-[-10px]">Portofolio</a></li>
          <li><a href="" style={{ color: isDarkMode ? 'white' : '#212121' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out duration-300 hover:font-semibold hover:mx-[-10px]">Contact</a></li>
          <li><a href="" style={{ color: isDarkMode ? 'white' : '#212121' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out duration-300 hover:font-semibold hover:mx-[-10px]">Blog</a></li>
      </ul>

        <button
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-full text-xl p-2"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <FaSun style={{ color: "orange" }} />
          ) : (
            <FaMoon style={{ color: "orange" }} />
          )}
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-full text-xl p-2 ml-4"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <FaTimes style={{ color: isDarkMode ? 'white' : 'black' }} />
          ) : (
            <FaBars style={{ color: isDarkMode ? 'white' : 'black' }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isOpen={isMenuOpen}
        onToggle={handleMenuToggle}
      />
    </nav>
  );
}

