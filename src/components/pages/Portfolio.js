import React from "react";
import Burger from "../burger.png";
import fridge from "../fridge-recipe.jpeg";
import vinyl from "../vinyldestination.jpg";
import Codequiz from "../Codequiz.png";
import Workday from "../Workday.png"
import "../style.css";

const Portfolio = () => (
  <div className="divider">
    <h1> Portfolio Page</h1>


    <p></p>
    <div>
      <h2>Vinyl Destination</h2>
      <img src={vinyl} alt='about iamge' className="Vinyl"></img>
      <p>Link to Github Repo: <a
        href="https://github.com/rachelrosenstein/Vinyl-Destination">https://github.com/rachelrosenstein/Vinyl-Destination</a>
      </p>
      <p>Link to Deployed Application: <a
        href="https://vinyl-destination.herokuapp.com/">https://vinyl-destination.herokuapp.com/</a>
      </p>
      <p>Description:A simple web application that allows the user to create an account and start a
      collection of their records, search, stream and add albums, click 'ADD TO MY COLLECTION' button
      and add it to a database, dynamically creating an HTML file and displaying the information to
                        the user.</p>
    </div>
    <p></p>
    <h2>Eat Da Burger</h2>
    <img src={Burger} alt='about iamge' className="burger"></img>
    <p>Link to Github Repo: <a
      href="https://github.com/rachelrosenstein/Eat-Da-Burger">https://github.com/rachelrosenstein/Eat-Da-Burger</a>
    </p>
    <p>Link to Deployed Application: <a
      href="https://murmuring-coast-03451.herokuapp.com/">https://murmuring-coast-03451.herokuapp.com/</a>
    </p>
    <p>Description: A simple application that allows the user to create a burger, click a button and add
    it to a database, dynamically creating an HTML file and displaying the information to the user.
                    </p>
    <p></p>
    <h2>Fridge-Recipe App</h2>
    <img src={fridge} alt='about iamge' className="Vinyl"></img>
    <p>Link to Github Repo: <a
      href="https://github.com/dchiev/Fridge-Recipe-App">https://github.com/dchiev/Fridge-Recipe-App</a>
    </p>
    <p>Link to Deployed Application: <a
      href="https://dchiev.github.io/Fridge-Recipe-App/">https://dchiev.github.io/Fridge-Recipe-App/</a>
    </p>
    <p>Description: The Fridge Recipe App - This application is designed so that everyone can have a
    recipe to make with the ingredients they currently have in their fridge. Once the ingredients
    that are available have been searched a recipe is generated that includes: the country of
                        origin, ingredients, instructions, a link to a Youtube video and a picture!</p>

    <h2>Code Quiz</h2>
    <img src={Codequiz} alt='about iamge' className="Vinyl"></img>
    <p>Link to Github Repo: <a
      href="https://github.com/rachelrosenstein/Code-Quiz">https://github.com/rachelrosenstein/Code-Quiz</a>
    </p>
    <p>Link to Deployed Application: <a
      href="https://rachelrosenstein.github.io/Code-Quiz/">https://rachelrosenstein.github.io/Code-Quiz/</a>
    </p>
    <p>Description:This is a multiple choice timed JavaScript quiz with multiple-choice questions. This
    app will run in the browser and feature dynamically updated HTML and CSS powered by your
                        JavaScript code.</p>
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
  </div >

);


export default Portfolio;
