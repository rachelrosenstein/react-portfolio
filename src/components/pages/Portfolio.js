import React from "react";
import { RepoCard } from "../Card/Card"
import "../style.css";

const projects = [
  {
    title: "Vinyl Destination",
    img: "https://github.com/rachelrosenstein/react-portfolio/blob/main/public/assets/vinyldestination.jpg?raw=true",
    github: "https://github.com/rachelrosenstein/Vinyl-Destination",
    heroku: "https://murmuring-coast-03451.herokuapp.com/",
    description: `Description:A simple web application that allows the user to create an account and start a
    collection of their records, search, stream and add albums, click 'ADD TO MY COLLECTION' button
    and add it to a database, dynamically creating an HTML file and displaying the information to the user.`,
  },
  {
    title: "Eat-Da-Burger",
    img: "../public/assets/burger.png",
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
    img: "../assets/Codequiz.png",
    github: "https://github.com/rachelrosenstein/Code-Quiz",
    heroku: "https://rachelrosenstein.github.io/Code-Quiz/",
    description: `This is a multiple choice timed JavaScript quiz with multiple-choice questions. This
    app will run in the browser and feature dynamically updated HTML and CSS powered by your
    JavaScript code.`
  },
  {
    title: "Workday Scheduler",
    img: "../assets/Workday.png",
    github: "https://github.com/rachelrosenstein/Work-Day-Scheduler",
    heroku: "https://rachelrosenstein.github.io/Work-Day-Scheduler/",
    description: `Create a simple calendar application that allows a user to save events for each hour
    of the day by modifying starter code. This app will run in the browser and feature dynamically
 updated HTML and CSS powered by jQuery.`
  },
]

function Portfolio() {
  return (
    <div className="divider">
      <h1> Portfolio Page</h1>
      {projects.length ? projects.map((project, index) => <RepoCard key={index} {...project} />) : "No projects found"}

    </div>

  );
}


export default Portfolio;
