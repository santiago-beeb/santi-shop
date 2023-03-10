import React from "react";
import "@styles/SendEmail.scss";
import logo_yard_sale from "@logos/logo_yard_sale.svg";
import icon_email from "@icons/email.svg";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <img src={logo_yard_sale} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={icon_email} alt="email" />
        </div>
        <form action="/santi-shop/#/login">
        <button className="primary-button login-button">Login</button>
        </form>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/santi-shop/#/password-recovery">Resend</a>
        </p>
      </div>
    </div>
  );
};

export { SendEmail };
