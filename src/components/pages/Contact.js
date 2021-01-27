import React from "react";
import data from '../data';
import Form from "../contactForm"

const Contact = () => (
  <div>
    <h1>Contact Me!</h1>
    <div className='contact-content'>

      <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
      <ul>
        {data.social.map((link, index) => (
          <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
        ))}
      </ul>
    </div>
    <div>
      <Form />
    </div>
  </div>
);

export default Contact;
