import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.css";
import sub_menu_arw from "../../../assets/sub_menu_arw.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* Hamburger Icon - Only show when menu is closed */}
      {!isMenuOpen && (
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      )}

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          {/* Close Button */}
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>

            <li className={styles.listItem}>
              <Link to="/new-vehicles" onClick={() => setIsMenuOpen(false)}>
                New Vehicles
                <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link to="/used-vehicles" onClick={() => setIsMenuOpen(false)}>
                Used Vehicles
                <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link to="/service" onClick={() => setIsMenuOpen(false)}>
                Service
                <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link to="/parts" onClick={() => setIsMenuOpen(false)}>
                Parts
                <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link to="/financial-services" onClick={() => setIsMenuOpen(false)}>
                Financial Services
                <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
                <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className={styles.desktopList}>
        <li className={styles.listItem}>
          <Link to="/">Home</Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/new-vehicles">
            New Vehicles
            <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
          </Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/used-vehicles">
            Used Vehicles
            <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
          </Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/service">
            Service
            <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
          </Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/parts">
            Parts
            <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
          </Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/financial-services">
            Financial Services
            <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
          </Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/contact">
            Contact Us
            <img src={sub_menu_arw} alt="" className={styles.arrowIcon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
