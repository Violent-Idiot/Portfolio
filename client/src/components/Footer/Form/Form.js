import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
const Form = () => {
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/", {
        email,
        msg,
      })
      .then((res) => console.log(res.data));
    setemail("");
    setmsg("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Email'
        value={email}
        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        onChange={(e) => setemail(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Message'
        value={msg}
        onChange={(e) => setmsg(e.target.value)}
        required
      />
      <input type='submit' />
    </form>
  );
};

export default Form;
