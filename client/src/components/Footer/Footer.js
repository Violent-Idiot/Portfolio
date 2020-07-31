import React from "react";

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
        </p>
      </div>
    </div>
  );
};

export default Footer;
