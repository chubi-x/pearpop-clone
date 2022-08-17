import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="lb-footer">
      <div className="lb-inner">
        <div className="lb-items">
          <div>
            <div>
              <a href="#">FAQ</a>
            </div>
            <div>
              <a href="#">BLOG</a>
            </div>
            <div>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div>
            <div>
              <a href="privacy-policy/index.html">Privacy Policy</a>
            </div>
            <div>
              <a href="terms-of-use/index.html">Terms of Use</a>
            </div>
          </div>
        </div>
        <div className="lb-row">
          <div className="lb-copyright">
            &copy; 2022 PearPop &nbsp;&nbsp; All Rights Reserved
          </div>
          <div className="lb-social social-links">
            <a href="#">
              <FontAwesomeIcon icon={faDiscord} size="xl" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
          </div>
        </div>
        <div className="lb-fine">
          All names, logos, and brands of third parties (e.g., TikTok,
          Instagram, and their respective logos) displayed on our site are
          trademarks of their respective owners. lady boss and its products and
          services are not endorsed by, sponsored by, or affiliated with these
          third parties. Our use of these names, logos, and brands is for
          identification purposes only, and does not imply any endorsement,
          sponsorship, or affiliation.
        </div>
      </div>
    </div>
  );
}

