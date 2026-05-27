import React, { useState } from "react";
import styles from "./topbar.module.css";

import fb from "../../../assets/fb.png";
import yt from "../../../assets/yt.png";
import tw from "../../../assets/tw.png";

import call from "../../../assets/call.png";
import tollfree from "../../../assets/toll-free.png";
import arrow from "../../../assets/cta_arw.png";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.topbarMain}>
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <img src={location} alt="location" />
          <span>4340 Hyw 7E, Markham, ON L3R 1L9</span>
        </div>

        <span className={styles.line}></span>

        <div className={styles.details}>
          <img src={call} alt="call" />
          <span>(905) 752-0881</span>
        </div>

        <span className={styles.line}></span>

        <div className={styles.details}>
          <img src={tollfree} alt="toll-free" />
          <span>Sales:(866) 798-1346</span>
        </div>

        <span className={styles.line}></span>

        <div className={styles.dropdownContainer}>
          <div
            className={styles.dropdownHeader}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Dealership Hours</span>

            <span className={styles.line} style={{ height: "100%" }}></span>

            <img
              src={arrow}
              alt="arrow"
              className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
            />
          </div>

          {isOpen && (
            <ul className={styles.dropdownMenu}>
              <li>Monday - Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
          )}
        </div>
      </div>

      <div className={styles.socialContainer}>
        <div>
          <img src={fb} alt="facebook" />
        </div>

        <div>
          <img src={tw} alt="twitter" />
        </div>

        <div>
          <img src={yt} alt="youtube" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
