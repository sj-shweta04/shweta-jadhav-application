import React from "react";
import {
  TbCopyright,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
} from "react-icons/tb";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h3>Follow Us On Social Media!</h3>
        <div className="socials-container">
          <h2>Socials</h2>
          <div className="socials">
            <TbBrandFacebook />
            <TbBrandInstagram />
            <TbBrandLinkedin />
            <TbBrandTwitter />
          </div>
        </div>
        <span>
          <TbCopyright /> All rights reserved, 2024.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
