import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import { ContactUs } from "./ContactUs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 50, // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function
      delay: 100, // Delay in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="bg-[#0a192f]">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-[#0a192f] z-50 shadow-md">
        <div className="flex justify-between mx-6 p-4">
          <ul className="flex text-white gap-10 w-full">
            <li className="text-pink-500 text-4xl cursor-pointer">
              <a href="#home">SE</a>
            </li>
            <div className="hidden md:flex gap-10 ml-auto">
              <li className="cursor-pointer hover:text-pink-500 transition-all duration-200">
                <a href="#home">Home</a>
              </li>
              <li className="cursor-pointer hover:text-pink-500 transition-all duration-200">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer hover:text-pink-500 transition-all duration-200">
                <a href="#skills">Skills</a>
              </li>
              <li className="cursor-pointer hover:text-pink-500 transition-all duration-200">
                <a href="#projects">Projects</a>
              </li>
              <li className="cursor-pointer hover:text-pink-500 transition-all duration-200">
                <a href="#contact">Contact</a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="w-full pt-[5rem]">
        <div
          className="mx-auto w-11/12 md:w-[43.75rem] h-auto mt-[6.25rem] text-center md:text-left"
          data-aos="fade-left"
        >
          <div className="text-white">
            <p className="text-pink-400 font-bold text-xl">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold">Shlok Ekhande</h1>
            <h1 className="text-2xl md:text-[3.2rem] font-bold -mt-2 md:-mt-4 opacity-70">
              I'm a Web Developer
            </h1>
            <p className="opacity-70 text-sm md:text-base">
              I am a third-year engineering student at Savitribai Phule Pune
              University (SPPU) in Pune with strong problem-solving skills. As a
              MERN stack developer, I am passionate about building efficient
              solutions and exploring new opportunities in technology.
            </p>
            <div className="mt-5 flex flex-col md:flex-row gap-4 md:gap-8 justify-center md:justify-start">
              <button className="border py-2 px-3 rounded-md hover:bg-pink-600 cursor-pointer hover:scale-105 transition-all duration-200">
                <a href="#skills">View Skills</a>
              </button>
              <button className="border py-2 px-3 rounded-md hover:bg-pink-600 cursor-pointer hover:scale-105 transition-all duration-200">
                <a href="#projects">View Work</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-aos="fade-right" className="mt-10">
        <div className="mt-[16rem] w-11/12 md:w-[56.25rem] mx-auto">
          <div className="text-center w-[7.5rem] mx-auto md:ml-80">
            <h1 className="text-white text-4xl font-bold border-b-8 border-pink-600 opacity-80">
              About
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-10 mt-4">
            <div className="text-white opacity-95 font-bold text-2xl md:text-4xl text-center md:text-left">
              Hi! I'm Shlok. Nice to meet you. Please take a look around.
            </div>
            <div className="text-white w-full md:w-[74rem] text-sm md:text-base">
              I am a full-stack developer with a passion for building web
              applications and learning new technologies. I am currently
              pursuing my BE in Computer Science and Engineering from SPPU. I am
              a quick learner and a team player. I am always looking for
              opportunities to learn and grow.
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-60">
        <div className="h-auto">
          <div className="text-white mx-auto w-11/12 md:w-[70rem] mt-25">
            <h1 className="text-4xl font-bold opacity-80 border-b-8 border-pink-600">
              Skills
            </h1>
            <p className="mt-2">
              //These are the technologies I have worked with
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-y-2 mx-auto w-11/12 md:w-[70rem] mt-5">
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow rounded-md hover:shadow-md hover:shadow-pink-500">
                <img src="html.png" width="80px" className="mx-auto" />
                <p className="text-white mt-4">HTML</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img src="css.png" alt="" width="80px" className="mx-auto" />
                <p className="text-white mt-4">CSS</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img src={"js.png"} alt="" width="80px" className="mx-auto" />
                <p className="text-white mt-4">JavaScript</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img
                  src={"tailwind.png"}
                  alt=""
                  width="80px"
                  className="mx-auto"
                />
                <p className="text-white mt-4">Tailwind</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img src="c++.png" alt="" width="80px" className="mx-auto" />
                <p className="text-white mt-4">C++</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img
                  src="express.png"
                  alt=""
                  width="80px"
                  className="mx-auto"
                />
                <p className="text-white mt-4">Express</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img src="git.png" alt="" width="80px" className="mx-auto" />
                <p className="text-white mt-4">Git</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img src="github.png" alt="" width="80px" className="mx-auto" />
                <p className="text-white mt-4">GitHub</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img src="sql.png" alt="" width="80px" className="mx-auto" />
                <p className="text-white mt-4">SQL</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img src="nodejs.png" alt="" width="80px" className="mx-auto" />
                <p className="text-white mt-4">Node.js</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img src="react.png" alt="" width="80px" className="mx-auto" />
                <p className="text-white mt-4">React</p>
              </div>
              <div className="border text-center w-[14.375rem] h-[8.5rem] hover:scale-110 transition-all duration-300 shadow hover:shadow-md hover:shadow-pink-500">
                <img
                  src="mongodb.png"
                  alt=""
                  width="80px"
                  className="mx-auto"
                />
                <p className="text-white mt-4">MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-aos="fade-in"
        className="mt-40 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="border-b-8 border-pink-600 text-3xl text-white font-bold mt-12 opacity-80 text-center sm:text-left">
            Projects
          </h1>
          <p className="text-white mt-2 text-center sm:text-left">
            //Check Out Some Of My Work
          </p>

          <div className="flex flex-wrap justify-center gap-10 sm:gap-20 mt-7">
            <div className="w-full sm:w-[18.75rem] h-auto bg-black rounded-md border border-gray-950 p-4">
              <div className="flex justify-between">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#998877] hover:text-pink-600 cursor-pointer">
                  GifGenie
                </h1>
                <a
                  href="https://github.com/ShlokEkhande/GifGenie"
                  className="border p-2 sm:p-3 text-[#998877] text-lg sm:text-xl hover:text-pink-600 cursor-pointer rounded-md"
                >
                  Github
                </a>
              </div>
              <img src="gif.png" className="w-full h-auto mt-2" />
              <p className="text-white mt-4 text-base sm:text-[18px]">
                A React.js app that fetches custom or random GIFs based on user
                input or selection. Built with Tailwind CSS and Axios, it
                showcases my ability to integrate APIs, manage state
                efficiently, and handle data fetching seamlessly.
              </p>
            </div>

            <div className="w-full sm:w-[18.75rem] h-auto bg-black rounded-md border border-gray-950 p-4">
              <div className="flex justify-between">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#998877] hover:text-pink-600 cursor-pointer">
                  Portfolio
                </h1>
                <a
                  href="https://github.com/ShlokEkhande/Portfolio"
                  className="border p-2 sm:p-3 text-[#998877] text-lg sm:text-xl hover:text-pink-600 cursor-pointer rounded-md"
                >
                  Github
                </a>
              </div>
              <img src="ptf.png" className="w-full h-auto mt-2" />
              <p className="text-white mt-4 text-base sm:text-[18px]">
                Portfolio Website Built with React.js and Tailwind CSS, this
                site showcases my skills, projects, and experience. It features
                a clean, design for a smooth user experience and easy
                navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactUs />
    </div>
  );
}

export default App;
