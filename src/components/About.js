import React from "react";
import "../styles/output.css";
import gitLogo from "../styles/GitHub-Mark-64px.png";
import myPhoto from "../styles/vday.jpg";

function About() {
  return (
    <div
      className="left-0 right-0 md:flex justify-center items-center"
      id="aboutMe"
    >
      <div className="mx-8 basis-1/2">
        <div className="bg-violet-200 shadow px-16 py-8 rounded-xl">
          <h1 className="text-2xl p-2 md:text-4xl font-bold md:p-3 text-center">
            A Little About Me
          </h1>
          <span classNameName="text-center">
            I'm currently located in Denver, Colorado. I'm just about to finish
            up the Coding Bootcamp I've been taking part in since November. I've
            dabbled in code for a long time and finally decided I'd like to
            pursue it.
          </span>
          <h1 className="text-2xl p-2 md:text-4xl font-bold md:p-3 text-center">
            My Skills
          </h1>
          <span>
            My current skills include Javascript, CSS, and HTML as well as
            technologies like MongoDB, React, Handlebars, SQL, and WebApps
          </span>
          <h1 className="text-2xl p-2 md:text-4xl font-bold md:p-3 text-center">
            My Experience
          </h1>
          <span>
            I am a junior developer just coming to end of my classNamees, but I
            do have a year and half experience working as a Quality Assurance
            tester for mobile softwares
          </span>
        </div>
        <div className="bg-violet-200 shadow md:flex m-4 p-2 rounded-xl">
          <div className="bg-violet-400 shadow flex md:block md:basis-1/3 p-4 m-3 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mr-1 md:h-16 md:w-16 md:mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="font-xs">Kerryeames@live.com</span>
          </div>
          <a
            href="https://www.linkedin.com/in/kerry-eames-048619148/"
            className="bg-violet-400 shadow hover:bg-violet-500 flex content-center md:block md:basis-1/3 p-4 m-3 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mr-1 md:h-16 md:w-16 md:mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="font-xs md:font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/KerryEames-Vris"
            className="bg-violet-400 shadow hover:bg-violet-500 flex content-center md:block md:basis-1/3 p-4 m-3 rounded-xl"
          >
            <img src={gitLogo} alt="github logo" />
            <span className="font-xs md:font-medium">Github</span>
          </a>
        </div>
      </div>
      <div className="basis-1/2 flex justify-center">
        <img
          src={myPhoto}
          alt="Me"
          className="hidden md:flex ml-8 rounded-lg text-center rounded-xl border-8 border-violet-200"
        />
      </div>
    </div>
  );
}

export default About;
