import React from "react";
import "../style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rachel from "../rachel.jpg"

function About() {
  return (
    <div>
      <Row>
        <Col size="md-6">
          <img src={Rachel} alt='about iamge' className="Rachel"></img>

        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <h1>Hi! I'm Rachel Rosenstein.</h1>
          <h2>“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.” – Michael Scott, Season 5, “The Duel”</h2>
          <br></br>
                      Hi! Welcome to my Portfolio! My name is Rachel and I currently live in Philadelphia, PA. I wasborn and raised in Fort Myers, FL and got my Bachelors in Hospitality Management from the University of Central Florida! I currently live with my boyfriend and my precious little
      nugget Charlie (pic of him on the right)! In my spare time I make resin and polymer clay
      earrings, I love to travel and go to the gym! I can’t wait to start my career in Web
      Development as it has always been a dream of mine for a while now!
      <br></br>
          <a href="https://rachelrosenstein.github.io/Portfolio/" target="_blank"> Click Here to View my Original Portfolio Site </a>
        </Col>
      </Row>
    </div>
  );
}

export default About
