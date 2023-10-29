import React from "react";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
  const handleLogin = (data) => {
    // ทำการเช็คและทำการ Login ตรงนี้
    console.log("Logging in with:", data);
  };

  const handleRegister = (data) => {
    // ทำการเช็คและทำการสมัครสมาชิก ตรงนี้
    console.log("Registering with:", data);
  };

  return (
    <>
      <LoginForm handleLogin={handleLogin} />
      <RegisterForm handleRegister={handleRegister} />
    </>
  );
}

export default App;
