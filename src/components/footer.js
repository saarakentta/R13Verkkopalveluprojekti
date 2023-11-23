import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="follow-icons">
        <p>Seuraa meitä</p>
        <div className="icons">
          <FontAwesomeIcon icon={faFacebook} />
          <span className="space"></span>
          <FontAwesomeIcon icon={faInstagram} />
          <span className="space"></span>
          <FontAwesomeIcon icon={faTwitter} />
          <span className="space"></span>
          <FontAwesomeIcon icon={faTiktok} />
          <span className="space"></span>
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <div className="footerlinks">
        <p>Tietosuojaseloste</p>
        <p>Medialle</p>
        <p>Rekrytointi</p>
      </div>
    </div>
  );
}

export default Footer;
