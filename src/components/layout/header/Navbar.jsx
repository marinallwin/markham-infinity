import { Link } from "react-router-dom";
import styles from "./header.module.css";
import sub_menu_arw from "../../../assets/sub_menu_arw.png";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
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