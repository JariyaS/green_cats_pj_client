import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiPrice, setApiPrice] = useState({});
  const navigate = useNavigate();
  // const metalApi = "https://www.metals-api.com/api/latest";
  const metalApi = "/metalprices";

  const { login } = useContext(AuthContext);

  // function expo(x, f) {
  //   return String(Number.parseFloat(x).toExponential(f))
  //     .split("e")
  //     .join(" x 10 **");
  // }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    axios
      // .get(metalApi, {
      //   params: {
      //     access_key:
      //       "f4q75ozb2t3l78o673fdmej98nhh3r85nsgoobjl5g6cqugsrprko415m703",
      //     base: "USD",
      //     // symbols: ["XPD,XPT,XRH"],
      //     // symbols: `XPD${"%2"}CXPT${"%2"}CXRH`,
      //     symbols: "XPD,XPT,XRH",
      //   },
      // })
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
      }}
    >
      <div>
        <h2>Today's metal price</h2>
        <div>
          {/* <p>PT's Price : {expo(apiPrice.XPT, 2)}</p> */}
          <p>PT's Price (USD/toz): {(apiPrice.XPT * 10e5).toFixed(2)}</p>
          <p>PD's Price (USD/toz) : {(apiPrice.XPD * 10e5).toFixed(2)}</p>
          <p>RH's Price (USD/toz) : {(apiPrice.XRH * 10e5).toFixed(2)}</p>
          <p>
            {" "}
            updated date : {new Date(apiPrice.createdAt).toLocaleDateString()}
          </p>
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
        <a
          href="/"
          style={{
            padding: "10px",
            textDecoration: "none",
            marginBottom: "50px",
          }}
        >
          Forgot password?
        </a>

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
      <div></div>
    </div>
  );
}

export default LoginForm;
