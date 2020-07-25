import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
const Form = () => {
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  // const change = (e) => {
  //   setemail(e.target.value);
  // };
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
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type='text'
        placeholder='Message'
        value={msg}
        onChange={(e) => setmsg(e.target.value)}
      />
      <input type='submit' />
    </form>
  );
};

export default Form;
