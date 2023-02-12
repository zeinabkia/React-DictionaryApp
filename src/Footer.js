import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Footer() {
  return (
    <div className="footer">
      <span className="coder">Coded By ZeinabSKia</span>
      <a
        className="footer"
        href="https://zeinabkia-portfolio.netlify.app/"
        target="_blank"
        rel="noreferrer"
        title="Portfolio"
      >
        {" "}
        <i className="fa-solid fa-user"></i>
      </a>
      <a
        className="footer"
        href="https://github.com/zeinabkia?tab=repositories"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        {" "}
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        className="footer"
        href="https://www.instagram.com/zeiinabkiia/"
        target="_blank"
        rel="noreferrer"
        title="Instagram"
      >
        {" "}
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        className="footer"
        href="https://t.me/ZeinabSKia"
        target="_blank"
        rel="noreferrer"
        title="Telegram"
      >
        {" "}
        <i className="fa-brands fa-telegram"></i>
      </a>
      <a
        href="mailto:zeinabskia@gmail.com"
        className="footer"
        target="_blank"
        rel="noreferrer"
        title="Email"
      >
        {" "}
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  );
}
