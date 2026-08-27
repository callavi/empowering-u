import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { navLinks } from "../../data/navbar.js";
import { contactInfo } from "../../data/contactInfo.js";
import Container from "../Container/Container";
import logo from "../../../assets/logo-without-name-dark.webp";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
<footer className={styles.footer}>
  <Container>
    <div className={styles.footerMain}>

      {/* Brand */}
      <div className={styles.brand}>
        <Link to="/" className={styles.logo}>
          <img
            src={logo}
            alt="Empowering U Logo"
          />
          <div className={styles.logoText}>
            <span>Empowering U</span>
            <span className={styles.highlight}>
              An Empowering Minds Initiative
            </span>
          </div>
        </Link>

        <p className={styles.infoText}>
          Empowering U helps entrepreneurs and businesses navigate
          registration, compliance, and growth with practical guidance
          and straightforward services.
        </p>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Footer navigation"
        className={styles.column}
      >
        <h3 className={styles.footerHeading}>
          Quick Links
        </h3>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={styles.link}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Contact */}
      <div className={styles.column}>
        <h3 className={styles.footerHeading}>
          Contact Us
        </h3>

        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <MapPin size={17} className={styles.icon} />
            <span>{contactInfo.address}</span>
          </div>

          <div className={styles.contactItem}>
            <Phone size={17} className={styles.icon} />
            <span>{contactInfo.phone}</span>
          </div>

          <div className={styles.contactItem}>
            <Mail size={17} className={styles.icon} />
            <span>{contactInfo.email}</span>
          </div>

          <div className={styles.contactItem}>
            <Clock size={17} className={styles.icon} />
            <span>{contactInfo.hours}</span>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className={styles.bottomBar}>
      <p className={styles.infoText}>
        © 2026 Empowering U. All rights reserved.
      </p>

      <div className={styles.credits}>
        <a
          href="https://storyset.com/marketing"
          className={styles.credit}
          target="_blank"
          rel="noopener noreferrer"
        >
          Marketing illustrations by Storyset
        </a>

        <span className={styles.credit}>
          Thanks to SVGR by Greg Bergé
        </span>
      </div>
    </div>
  </Container>
</footer>
  );
}