import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="/">Home</Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/new-vehicles">New Vehicles</Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/used-vehicles">Used Vehicles</Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/service">Service</Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/parts">Parts</Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/financial-services">Financial Services</Link>
        </li>

        <span className={styles.dashed}></span>

        <li className={styles.listItem}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;