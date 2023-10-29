// RegisterForm.jsx

import React, { useState } from "react";
import { auth } from "../firebase";

const RegisterForm = ({ handleRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const userCredential = await auth.createUserWithEmailAndPassword(
       email,
       password
     );
     const user = userCredential.user;
     console.log("Registered user:", user);
   } catch (error) {
     console.error("Error registering user:", error);
   }
 };


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
