import React from "react";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

import facebook from "../../assets/socials/facebook.svg";
import twitter from "../../assets/socials/twitter.svg";
import instagram from "../../assets/socials/instagram.svg";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <address>Dekode AS Tlf: 23 08 00 00 E-post: info@dekode.no</address>
      <address>Tollbugata 11 Postboks 489 Sentrum, 0105 Oslo</address>
      <nav>
        <a href="https://www.dekode.no" className="footer-nav-links">
          Tjenester
        </a>
        <a href="https://www.dekode.no" className="footer-nav-links">
          Produkter
        </a>
        <a href="https://www.dekode.no" className="footer-nav-links">
          Kontakt
        </a>
        <a href="https://www.dekode.no" className="footer-nav-links">
          Abonnement
        </a>
        <a href="https://www.dekode.no" className="footer-nav-links">
          Logg Inn
        </a>
      </nav>
      <div className="footer-links">
        <a href="https://www.dekode.no" className="footer-links-link">
          Personvernerklæring
        </a>
        <a href="https://www.dekode.no" className="footer-links-link">
          Cookies
        </a>
        <a href="https://www.dekode.no" className="footer-links-link">
          Language: ENG (US)
        </a>
      </div>
      <div className="footer-socials">
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
      </div>
    </footer>
  );
};

export default Footer;
