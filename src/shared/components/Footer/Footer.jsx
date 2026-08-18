import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { navLinks } from "../../data/navbar.js";
import { contactInfo } from "../../data/contactInfo.js";
import Container from "../Container/Container";
import logo from "../../../assets/logo-without-name-500x500.svg";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 border-gray-200">
        <Container>
      <div className="grid gap-12 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-3 items-center md:items-start">
            <Link to="/" className = {`flex items-center gap-3 ${styles.logo}`}>
                <img src={logo} alt="Empowering U Logo" className="h-12 w-auto" />
                Empowering U
            </Link>
            <p className={`max-w-xs text-center md:text-left ${styles.infoText}`}>
                Empowering U helps entrepreneurs and businesses navigate registration, compliance, and growth with practical guidance and straightforward services.
            </p>
        </div>

      <nav aria-label="Footer navigation" className={`flex flex-col gap-3 text-center md:text-left ${styles.infoText} `}>
        <h3 className={styles.footerHeading}>Quick Links</h3>
        {navLinks.map((link) => (
        <Link
            key={link.path}
            to={link.path}
            className={styles.link}
        >
            {link.name}
        </Link>
        ))}
      </nav>
      <div className={`flex flex-col gap-4 text-center md:text-left ${styles.infoText} `}>
        <h3 className={styles.footerHeading}>Contact Us</h3>
        <div className="flex items-center gap-2 min-w-0">
            <MapPin size={16} 
                    className = {styles.icon}
            />
            <span>{contactInfo.address}</span>
        </div>
        <div className="flex items-center gap-2 min-w-0">
            <Phone size={16} 
                    className = {styles.icon}
            />
            <span>{contactInfo.phone}</span>
        </div>
        <div className="flex items-center gap-2 min-w-0">
            <Mail size={16} 
                    className = {styles.icon}
            />
            <span>{contactInfo.email}</span>
        </div>
        <div className="flex items-center gap-2">
            <Clock size={16} 
                    className = {styles.icon}
            />
            <span>{contactInfo.hours}</span>
        </div>  
        </div>
      </div>
        <div className="flex flex-col gap-3 mt-12 border-t border-gray-200 pt-6 md:flex-row md:justify-between text-center">
            <p className={styles.infoText}>
                © 2026 Empowering U. All rights reserved.
            </p>
            <a href="https://storyset.com/marketing" className={styles.infoText}>Marketing illustrations by Storyset</a>
            <p className={styles.infoText}>Thanks to SVGR by Greg Bergé</p>
        </div>
      </Container>
    </footer>
  );
}