import React, { useState } from "react";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmitRegister}>
        <div
          style={{
            width: "40%",
            marginLeft: "30px",
            marginTop: "20px",
          }}
        >
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
            className="btn btn-primary"
            style={{ marginTop: "30px", marginLeft: "15vw" }}
            onClick={handleSubmitRegister}
          >
            {" "}
            Submit
          </button>
        </div>
      </form>
      <div>
        <img
          style={{ width: "50%", margin: "20px" }}
          src={
            "https://res.cloudinary.com/dup2jwtit/image/upload/v1644064091/Auto_cats_cycle_ofch2p.webp"
          }
          alt="AutoCats cycle"
        />
      </div>
    </div>
  );
}

export default RegisterForm;
