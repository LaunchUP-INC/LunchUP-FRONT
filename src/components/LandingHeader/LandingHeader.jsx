import BagIcon from "../Icons/BagIcon";
import styles from "./LandingHeader.module.css";

const LandingHeader = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <h2 className={styles.logo}>LunchUP <BagIcon className={styles.icon} /></h2>
        <div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">De qué trata</a>
            </li>
            <li>
              <a href="#">Cómo funciona</a>
            </li>
            <li>
              <a className={styles.button} href="#">
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
