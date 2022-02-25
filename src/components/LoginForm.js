import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";
import axios from "../config/axios";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiPrice, setApiPrice] = useState({});
  const navigate = useNavigate();

  const metalApi = "/metalprices";

  const { login } = useContext(AuthContext);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    axios

      .get(metalApi)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data.rates.XPD);
        // const { XPD, XPT, XRH } = res.data;
        // console.log(XPD);
        // console.log(XPT);
        // console.log(XRH);
        setApiPrice(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: 0,
        backgroundColor: "rgb(182,227,212)",
        color: "Green",
        paddingBottom: "100px",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          // display: "flex",
          textAlign: "center",
          width: "50vw",
        }}
      >
        <b>
          <h2 style={{ marginTop: "30px" }}>Metal's price today</h2>
        </b>
        <div style={{ marginTop: "30px", fontSize: "20px" }}>
          <p>Patinum(Pt) : {(apiPrice.XPT * 10e5).toFixed(2)} $</p>
          <p>Paradium(Pd): {(apiPrice.XPD * 10e5).toFixed(2)} $</p>
          <p>Rhodium(Rh) : {(apiPrice.XRH * 10e5).toFixed(2)} $</p>
          <p>
            {" "}
            {/* updated date : {new Date(apiPrice.createdAt).toLocaleDateString()} */}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "evenly",
            marginTop: "50px",
          }}
        >
          {" "}
          <img
            style={{ width: "100px", margin: "20px" }}
            src={
              "https://res.cloudinary.com/dup2jwtit/image/upload/v1644059078/toyota_logo_mmxwny.webp"
            }
            alt="Toyota"
          />
          <img
            style={{ width: "100px", margin: "20px" }}
            src={
              "https://res.cloudinary.com/dup2jwtit/image/upload/v1644060251/nissan_logo_qk2okp.webp"
            }
            alt="Nissan"
          />
          <img
            style={{ width: "100px", margin: "20px" }}
            src={
              "https://res.cloudinary.com/dup2jwtit/image/upload/v1644060237/honda_logo_ukfhmg.webp"
            }
            alt="Honda"
          />
          <img
            style={{ width: "100px", margin: "20px" }}
            src={
              "https://res.cloudinary.com/dup2jwtit/image/upload/v1644060347/ford_logo_odwl5v.webp"
            }
            alt="Ford"
          />
        </div>
      </div>
      <form style={{ width: "40%" }}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link
          to="/"
          style={{
            padding: "10px",
            textDecoration: "none",
            marginBottom: "50px",
          }}
        >
          Forgot password?
        </Link>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "30px" }}
          onClick={handleSubmitLogin}
        >
          Sign In
        </button>
        <button
          type="submit"
          className="btn btn-success"
          style={{ width: "100%", marginTop: "30px" }}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
