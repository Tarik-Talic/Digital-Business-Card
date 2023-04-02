import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="socialIcons">
      <FontAwesomeIcon icon={faSquareTwitter} />
      <FontAwesomeIcon icon={faSquareFacebook} />
      <FontAwesomeIcon icon={faSquareInstagram} />
      <FontAwesomeIcon icon={faSquareGithub} />
    </div>
  );
};
export default Footer;
