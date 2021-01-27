import React from "react";
import data from '../data';
import Form from "../contactForm"
import SayHello from "../SayHello.png"
import "../style.css"

const Contact = () => (
  <div>
    <img src={SayHello} alt='about iamge' className="hello"></img>
    <div>
      <Form />
    </div>
    <div className='contact-content'>

      <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
      <ul>
        {data.social.map((link, index) => (
          <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
        ))}
      </ul>
    </div>
  </div>
);

export default Contact;
