import { useNavigate, useLocation } from "react-router-dom";
import BagIcon from "../Icons/BagIcon";
import styles from "./Nav.module.css"

const Nav = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const pathToHideNav = ["/", "/login", "/signup"];
    const shouldHideNav = pathToHideNav.includes(location.pathname);


    

    return shouldHideNav ? null :(
        <div className={styles.navContainer} >
            <div className={styles.nav}>
                <h2 className={styles.logo} onClick={() => navigate("/home")} >LunchUP <BagIcon className={styles.icon} /></h2>
                <div className={styles.navLinks}>                   
                    <ul className={styles.navLinks} >
                        <li><a onClick={() => navigate("/home")} >Inicio</a></li>
                        <li><a onClick={() => navigate("/products/add")} >Añadir Producto</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )

}


export default Nav;