import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8002/users/register", {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
      });
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
    <form onSubmit={handleSubmitRegister}>
      <div style={{ width: "40%", marginLeft: "30px" }}>
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
        >
          {" "}
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
