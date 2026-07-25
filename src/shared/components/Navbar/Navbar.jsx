import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { navLinks } from "./navbar.js";
import Container from "../Container/Container";
import { Button } from "../Button/Button";
import logo from "../../../assets/logo-without-name-500x500.svg";

export default function Navbar() {
      console.log("Navbar rendered");
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <Container>
      <div className="flex h-20 items-center justify-between">
        <div className="flex items-center justify-between gap-6">
            <NavLink to="/" className = {`flex items-center gap-3 ${styles.logo}`}>
                <img src={logo} alt="Empowering U Logo" className="h-16 w-auto" />
                Empowering U
            </NavLink>
        </div>

      <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
        <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
                isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
            }
        >
            {link.name}
        </NavLink>
        ))}
        <NavLink to="/contact">
            <Button variant="primary">Contact Us</Button>
        </NavLink>
      </nav>
      </div>
      </Container>
    </header>
  );
}