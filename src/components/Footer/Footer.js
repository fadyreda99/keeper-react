import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright {currentYear}</p>
      </footer>
    </div>
  );
};

export default Footer;
