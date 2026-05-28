import React from "react";
import styles from "./header.module.css";
import banner from "../../../assets/banner.png";
import logo from "../../../assets/Logo.png";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

function Header() {
  return (
    <div className={styles.main}>
      <img src={banner} alt="banner" className={styles.banner} />

      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />

        <div className={styles.navContainer}>
          <Topbar />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
