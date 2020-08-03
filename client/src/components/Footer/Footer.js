import React from "react";

// import { Link } from "react-router-dom";

import Form from "./Form/Form";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='r-section'>
        <h1>HIT ME UP!</h1>
        <Form />
      </div>
      <div className='divider'></div>
      <div className='l-section'>
        <p>
          Look I don't have any social media account
          <span role='img' aria-label='emoji'>
            😢
          </span>
          .
          <br />
          <br />
          Yeah I know that I am old School but I am better this way. <br />
          <br />
          So only way of contacting me is through
          <span role='img' aria-label='emoji'>
            👈
          </span>
          form.
          <br />
          <br />
          But connect with{" "}
          <a href='https://github.com/Violent-Idiot'>
            <i className='fab fa-github'></i>
          </a>{" "}
          or mail me at panakalaryan@gmail.com
        </p>
        <p>
          Look I don't have any social media account
          <span role='img' aria-label='emoji'>
            😢
          </span>
          .
          <br />
          <br />
          Yeah I know that I am old School but I am better this way. <br />
          <br />
          So only way of contacting me is through
          <span role='img' aria-label='emoji'>
            ☝
          </span>
          form.
          <br />
          <br />
          But connect with{" "}
          <a href='https://github.com/Violent-Idiot'>
            <i className='fab fa-github'></i>
          </a>{" "}
          or mail me at panakalaryan@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
