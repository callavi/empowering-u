import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { navLinks } from "../../data/navbar.js";
import { Button } from "../Button/Button";
import logo from "../../../assets/logo-without-name-500x500.svg";
import { useState , useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);
      useEffect(() => {
            const body = document.body;
            const html = document.documentElement;

            if (menuOpen) {
                html.style.overflow = "hidden";
                body.style.overflow = "hidden";
            } else {
                html.style.overflow = "";
                body.style.overflow = "";
            }

            return () => {
                html.style.overflow = "";
                body.style.overflow = "";
            };
            }, [menuOpen]);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur relative">
        <section className="mx-auto max-w-7xl px-4">
            <div className="flex min-h-20 items-center justify-between py-2 md:h-20 md:py-0">
                <div className="flex items-center justify-between gap-6">
                    <NavLink to="/" className = {`flex items-center gap-3 ${styles.logo}`}>
                        <img src={logo} alt="Empowering U Logo" className="h-12 w-auto md:h-16" />
                        <span className={`flex justify-center items-center gap-2 ${styles.logoText}`}>Empowering U | <span className={styles.highlight}>An Empowering Minds Initiative</span></span>
                    </NavLink>
                </div>

                <nav className="items-center gap-6 text-sm font-medium text-gray-700 hidden md:flex">
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
                        <Button variant="primary" as={NavLink} to="/contact">Contact Us</Button>
                </nav>
                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </section>
        {menuOpen && (
                <button
                    className={styles.backdrop}
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                />
        )}
        <nav
            className={`${styles.mobileMenu} ${
                menuOpen ? styles.mobileMenuOpen : ""
            }`}
            >
            {navLinks.map((link) => (
            <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                isActive
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
            >
                {link.name}
            </NavLink>
            ))}

            <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            >
            <Button variant="primary">Contact Us</Button>
            </NavLink>
        </nav>
    </header>
);}