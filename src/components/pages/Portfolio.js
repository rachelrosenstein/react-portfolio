import React from "react";
import { RepoCard } from "../Card/Card"
import Workday from "../Workday.png"
import "../style.css";
import { propTypes } from "react-bootstrap/esm/Image";

const projects = [
  {
    title: "Vinyl Destination",
    img: "../assets/vinyldestination.jpg",
    github: "https://github.com/rachelrosenstein/Vinyl-Destination",
    heroku: "https://murmuring-coast-03451.herokuapp.com/",
    description: `Description:A simple web application that allows the user to create an account and start a
    collection of their records, search, stream and add albums, click 'ADD TO MY COLLECTION' button
    and add it to a database, dynamically creating an HTML file and displaying the information to the user.`,
  },
  {
    title: "Eat-Da-Burger",
    img: "../assets/burger.png",
    github: "https://github.com/rachelrosenstein/Eat-Da-Burger",
    heroku: "https://murmuring-coast-03451.herokuapp.com/",
    description: `A simple application that allows the user to create a burger, click a button and add
    it to a database, dynamically creating an HTML file and displaying the information to the user.`
  },
  {
    title: "Fridge-Recipe App",
    img: "../assets/fridge-recipe.jpeg",
    github: "https://github.com/dchiev/Fridge-Recipe-App",
    heroku: "https://dchiev.github.io/Fridge-Recipe-App",
    description: `This application is designed so that everyone can have a
    recipe to make with the ingredients they currently have in their fridge. Once the ingredients
    that are available have been searched a recipe is generated that includes: the country of
    origin, ingredients, instructions, a link to a Youtube video and a picture!`
  },
  {
    title: "Code-Quiz",
    img: "../assets/fridge-recipe.jpeg",
    github: "https://github.com/rachelrosenstein/Code-Quiz",
    heroku: "https://rachelrosenstein.github.io/Code-Quiz/",
    description: `This is a multiple choice timed JavaScript quiz with multiple-choice questions. This
    app will run in the browser and feature dynamically updated HTML and CSS powered by your
    JavaScript code.`
  },
]

function Portfolio() {
  return (
    <div className="divider">
      <h1> Portfolio Page</h1>
      {projects.length ? projects.map((project, index) => <RepoCard key={index} {...project} />) : "No projects found"}

      <div>
        <h2>Workday Scheduler</h2>
        <img src={Workday} alt='about iamge' className="Vinyl"></img>
        <p>Link to Github Repo: <a
          href="https://github.com/rachelrosenstein/Work-Day-Scheduler">https://github.com/rachelrosenstein/Work-Day-Scheduler</a>
        </p>
        <p>Link to Deployed Application: <a
          href="https://rachelrosenstein.github.io/Work-Day-Scheduler/">https://rachelrosenstein.github.io/Work-Day-Scheduler/</a>
        </p>
        <p>Description: Create a simple calendar application that allows a user to save events for each hour
        of the day by modifying starter code. This app will run in the browser and feature dynamically
     updated HTML and CSS powered by jQuery.</p>
      </div>
    </div>

  );
}


export default Portfolio;
