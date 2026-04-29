import React, { useState } from "react";
//import axios from "axios";

function Attributes() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    try {
      const resp = await axios.post('http://localhost:3000/api/auth/login', formData, {
        withCredentials: true
      })
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <h2 id="welcome">Welcome Back !</h2>

      <h4 id="comment">We are so excited to see you again !</h4>

      <h3 className="keys">Email or Phone No.</h3>

      <input
        className="inputs"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <h3 className="keys">Password</h3>

      <input
        className="inputs"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <h5 id="forgot">Forgot your Password?</h5>

      <button id="login">Log In</button>

      <h5 id="register">
        Need an account? <u>Register</u>
      </h5>
    </>
  );
}

export default Attributes;
