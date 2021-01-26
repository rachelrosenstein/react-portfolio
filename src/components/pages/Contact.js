import React from "react";
import data from '../data';

const Contact = () => (
  <div>
    <h1>Contact Me!</h1>
    <p>
      Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
      Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
      pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
      tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
      posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec metus
      vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula. Nam
      tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus. Etiam vel
      condimentum magna, quis tempor nulla.

      <div className='contact-content'>

        <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
        <ul>
          {data.social.map((link, index) => (
            <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
          ))}
        </ul>
      </div>

    </p>
  </div>
);

export default Contact;
