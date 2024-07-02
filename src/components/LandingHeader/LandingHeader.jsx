/* eslint-disable react/prop-types */

import BagIcon from "../Icons/BagIcon";
import styles from "./LandingHeader.module.css";
import { Link } from "react-scroll";
const LandingHeader = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <h2 className={styles.logo}>
          LunchUP <BagIcon className={styles.icon} />
        </h2>
        <div>
          <ul className={styles.navLinks}>
            <li>
              <Link to="inicio" smooth={true} duration={500}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                De qué trata
              </Link>
            </li>

            <li>
              <a className={styles.button} href="/login">
                Ingresar
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;
