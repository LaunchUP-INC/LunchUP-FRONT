import { useNavigate } from "react-router-dom";
import BagIcon from "../Icons/BagIcon";
import styles from "./DashboardHeading.module.css";

const DashboardHeading = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <h1>
        <BagIcon className={`${styles.icon} me-2`} />
        Dashboard
      </h1>

      <ul className={styles.navLinks}>
        <li>Dashboard</li>

        <li>
          <a onClick={() => navigate("/products/add")}>Añadir Producto</a>
        </li>
      </ul>
    </header>
  );
};

export default DashboardHeading;
