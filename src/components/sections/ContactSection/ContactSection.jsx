import React from "react";
import styles from "./contact.module.css";
import map from "../../../assets/map.png";
import fb from "../../../assets/fb.png";
import yt from "../../../assets/yt.png";
import tw from "../../../assets/tw.png";
import call from "../../../assets/call.png";
import location from "../../../assets/location.png";
import clock from "../../../assets/clock.png";

function ContactSection() {
  return (
    <section className={styles.contactMain}>
      <div className={styles.contactTop}>
        <div className={styles.detailsContainer}>
          <h3>Address</h3>
          <h5>4340 Hyw 7E, Markham, ON L3R 1L9</h5>
        </div>

        <span className={styles.dashed}></span>

        <div className={styles.detailsContainer}>
          <h3>Phone</h3>
          <h5>(905) 752-0881</h5>
        </div>

        <span className={styles.dashed}></span>

        <div className={styles.detailsContainer}>
          <h3>Email</h3>
          <h5>william@markhaminfiniti.com</h5>
        </div>

        <span className={styles.dashed}></span>

        <div className={styles.detailsContainer}>
          <h3>Follow us on</h3>
          <div className={styles.iconContainer}>
            <img src={fb} alt="facebook" />
            <img src={tw} alt="twitter" />
            <img src={yt} alt="yt" />
          </div>
        </div>
      </div>

      <div className={styles.contactBottom}>
        <div className={styles.tile}>
          <img src={clock} alt="clock" />
          <h3>Dealership Hours</h3>
        </div>
        <div className={styles.tile}>
          <img src={call} alt="call" />
          <h3>Contact Us</h3>
        </div>
        <div className={styles.tile}>
          <img src={location} alt="location" />
          <h3>Location</h3>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
