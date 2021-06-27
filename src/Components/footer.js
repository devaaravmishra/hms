import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className={"footer"} id={"footer"}>
        <span className={"footer-left"}>
          &copy; 2021 HOSPITAL All Rights Reserved
        </span>
        <ul className={"footer-right"}>
          <li>
            <a
              href="https://twitter.com/who?lang=en"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/WHO/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/who/?hl=en"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={"footer-bottom"}>
        <span className={"footer-bottom-text"}>
          Designed by Jitesh Prajapat &amp; Aarav Mishra
        </span>
      </div>
    </footer>
  );
};

export default Footer;
