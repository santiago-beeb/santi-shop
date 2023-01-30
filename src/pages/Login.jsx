import React, { useRef } from "react";
import "@styles/Login.scss";
import logo_yard_sale from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo_yard_sale} alt="logo" className="logo" />
        <form action="/santi-shop/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            required
            type="text"
            name="email"
            placeholder="santi@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            className="primary-button login-button"
          >
            Log in
          </button>
          <a href="/santi-shop/#/password-recovery">Forgot my password</a>
        </form>
        <form action="/santi-shop/#/signup">
        <button className="secondary-button signup-button">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export { Login };
