import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.quickLinks}>
          <span>Quick Links</span>
        </div>

        <div className={styles.linksContainer}>
          <span>Home</span>
          <span className={styles.separator}>›</span>

          <span>New Vehicles</span>
          <span className={styles.separator}>›</span>

          <span>Used Vehicles</span>
          <span className={styles.separator}>›</span>

          <span>Service</span>
          <span className={styles.separator}>›</span>

          <span>Parts</span>
          <span className={styles.separator}>›</span>

          <span>Financial Services</span>
          <span className={styles.separator}>›</span>

          <span>Contact Us</span>
          <span className={styles.separator}>›</span>

          <span>Sitemap</span>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>
          © Copyright 2014 Markham Infiniti. All Rights Reserved.
        </p>

        <div className={styles.poweredBy}>
          <span>powered by</span>
          <span className={styles.logo}>e-DEALER.CA</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;