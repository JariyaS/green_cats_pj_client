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
    <div className="login-outer">
      <div className="login-mid">
        <div className="metal-today container-lg">
          <b>
            <h2>Metal's price today</h2>
          </b>
          {/* <div style={{ marginTop: "30px", fontSize: "20px" }}> */}
          <div className="metal-price">
            <p>Patinum(Pt) : {(apiPrice.XPT * 10e5).toFixed(2)} $/Toz</p>
            <p>Paradium(Pd): {(apiPrice.XPD * 10e5).toFixed(2)} $/Toz</p>
            <p>Rhodium(Rh) : {(apiPrice.XRH * 10e5).toFixed(2)} $/Toz</p>
            <p>
              {" "}
              {/* updated date : {new Date(apiPrice.createdAt).toLocaleDateString()} */}
            </p>
          </div>
        </div>
        {/* <div>
          {" "}
          <img
            className="pic-login"
            style={{ width: "300px" }}
            src={
              "https://res.cloudinary.com/dup2jwtit/image/upload/v1645981392/Auto_cats_cycle_qrcn3q.webp"
            }
            alt="Logo"
          />
        </div> */}
      </div>

      <form className="login-page">
        <div className="Email-Form mb-3">
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
