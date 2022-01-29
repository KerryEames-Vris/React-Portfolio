import react from "react";
import "../styles/output.css";

function Card() {
  return (
    <>
      <div className="mx-32 my-12 p-4 bg-violet-200 flex justify-center rounded-xl md:h-40">
        <a href="" id="projects" className="text-center">
          <h1>COMING SOON</h1>
          <p>Upcoming Project 3</p>
        </a>
      </div>
      <div className="flex mx-32 my-12 justify-center">
        <a
          href="https://kerryeames-vris.github.io/ClassNameProject1-FeedMe/"
          className="md:basis-1/2 m-4 p-4 bg-violet-200 rounded-xl md:h-40 text-center"
        >
          <h1>Feed Me</h1>
          <p>Project 1 of Coding Bootcamp:</p>
          <p className="hidden md:flex">
            Have ingredients laying around, and don't know what to make with
            them? Plug them into this application and find recipe results based
            on the ingredients you entered! There is also a similar function for
            finding a nice cocktail to whip up
          </p>
        </a>
        <a
          href="https://my-health-journal.herokuapp.com/"
          className="md:basis-1/2 m-4 p-4 bg-violet-200 rounded-xl md:h-40 text-center"
        >
          <h1>My Health Journal</h1>
          <p>Project 2 of Coding Bootcamp:</p>
          <p className="hidden md:flex">
            Keeping track of medications and daily health can be difficult and
            mentally taxing. Using this journal application you can keep a
            record of any symptoms and problems that arise, while also logging
            your daily dosages of any medications you may have.
          </p>
        </a>
      </div>
      <div className="flex mx-32 my-12 justify-center">
        <a
          href="https://kerryeames-vris.github.io/PasswordGenerator/"
          className="md:basis-1/2 m-4 p-4 bg-violet-200 rounded-xl md:h-32 text-center"
        >
          <h1>Password Generator</h1>
          <p className="hidden md:flex">
            A simple password generator, just follow the prompts to select what
            kind of symbols you want to use
          </p>
        </a>
        <a
          href="https://kerryeames-vris.github.io/WorkDayScheduler/"
          className="md:basis-1/2 m-4 p-4 bg-violet-200 rounded-xl md:h-32 text-center"
        >
          <h1>Day Planner</h1>
          <p className="hidden md:flex">
            A simple day planner, keep track of your daily schedule and upcoming
            appointments
          </p>
        </a>
      </div>
    </>
  );
}

export default Card;
