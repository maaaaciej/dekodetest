import React from "react";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

import facebook from "../../assets/socials/facebook.svg";
import twitter from "../../assets/socials/twitter.svg";
import instagram from "../../assets/socials/instagram.svg";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-container">
        <div className="footer-container-address">
          <address>
            <p className="footer-container-address-line">Dekode AS</p>
            <p className="footer-container-address-line">Tlf: 23 08 00 00</p>
            <p className="footer-container-address-line">
              E-post: info@dekode.no
            </p>
          </address>

          <address className="footer-container-address-last">
            <p className="footer-container-address-line">Tollbugata 11, Oslo</p>
            <p className="footer-container-address-line">
              Postboks 489 Sentrum, 0105 Oslo
            </p>
          </address>
        </div>

        <nav className="footer-container-nav">
          <a
            href="https://www.dekode.no"
            className="footer-container-nav-links"
          >
            Tjenester
          </a>
          <a
            href="https://www.dekode.no"
            className="footer-container-nav-links"
          >
            Produkter
          </a>
          <a
            href="https://www.dekode.no"
            className="footer-container-nav-links"
          >
            Kontakt
          </a>
          <a
            href="https://www.dekode.no"
            className="footer-container-nav-links"
          >
            Abonnement
          </a>
          <a
            href="https://www.dekode.no"
            className="footer-container-nav-links"
          >
            Logg Inn
          </a>
        </nav>
        <div className="footer-container-links">
          <a
            href="https://www.dekode.no"
            className="footer-container-links-link"
          >
            Personvernerklæring
          </a>
          <a
            href="https://www.dekode.no"
            className="footer-container-links-link"
          >
            Cookies
          </a>
          <a
            href="https://www.dekode.no"
            className="footer-container-links-link"
          >
            Language: ENG (US)
          </a>

          <div className="footer-container-links-socials">
            <a href="https://www.twitter.com">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
