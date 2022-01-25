import React, { useState } from "react";
import "../styles/output.css";

function Navbar() {
  let [hidden, setHidden] = useState("hidden");

  const mobileHidden = () => {
    if (hidden === "hidden") {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };

  return (
    <nav class="bg-violet-200 shadow">
      <div class="px-8 mx-auto shadow">
        <div class="flex justify-between">
          <div class="">
            <div class="flex items-center py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 mr-1 md:h-16 md:w-16 md:mr-2 text-purple-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span class="text-2xl p-2 md:text-4xl font-bold md:p-3">
                Kerry Eames
              </span>
            </div>
          </div>
          <div class="hidden md:flex items-center">
            <a
              href="#aboutMe"
              class="mx-2 px-4 py-2 text-2xl font-medium rounded-lg bg-violet-400 shadow hover:bg-violet-500"
            >
              About Me
            </a>
            <a
              href="#projects"
              class="mx-2 px-4 py-2 text-2xl font-medium rounded-lg bg-violet-400 shadow hover:bg-violet-500"
            >
              My Projects
            </a>
          </div>
          <div class="md:hidden flex item-center">
            <button type="button" onClick={mobileHidden}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class={`${hidden}`}>
        <a
          href="#aboutMe"
          class="block py-2 px-4 text-sm shadow hover:bg-violet-300"
        >
          About Me
        </a>
        <a
          href="#projects"
          class="block py-2 px-4 text-sm shadow hover:bg-violet-300"
        >
          My Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
