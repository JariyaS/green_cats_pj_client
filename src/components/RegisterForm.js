import React, { useState } from "react";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmitRegister}>
        <div className="main-register">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <input
            type="text"
            className="form-control"
            style={{ marginTop: "30px" }}
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            style={{ marginTop: "30px" }}
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            style={{ marginTop: "30px" }}
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            style={{ marginTop: "30px" }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            style={{ marginTop: "30px" }}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary btn-register-form"
            onClick={handleSubmitRegister}
          >
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
