import React from "react";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../images/profile-pic.jpg";

export default function Info() {
  return (
    <>
      <div className="profile">
        <div className="profileInfo">
          <img className="profileInfo__image" src={profilePic} />
          <h1 className="profileInfo__name">Tarik Talic</h1>
          <h4 className="profileInfo__title">Fronted Developer</h4>
          <p className="profileInfo__website">tariktalic.website</p>
        </div>
        <div className="contactInfo">
          <span className="contactInfo__email">
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </span>
          <span className="contactInfo__linkedIn">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </span>
        </div>
      </div>
    </>
  );
}
