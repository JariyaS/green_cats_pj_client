import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: 0,
        }}
      >
        <h2>Today's metal price</h2>
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
            href="#"
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
          >
            Register
          </button>
        </form>
      </div>
    </form>
  );
}

export default LoginForm;
