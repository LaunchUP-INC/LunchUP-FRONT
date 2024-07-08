import { useNavigate, useLocation } from "react-router-dom";
import BagIcon from "../Icons/BagIcon";
import styles from "./Nav.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const shoppingCart = useSelector(state => state.shoppingCart);

    const pathToHideNav = ["/", "/login", "/signup"];
    const shouldHideNav = pathToHideNav.includes(location.pathname);
    const { isAuthenticated } = useAuth0();

    

    return shouldHideNav ? null :(
        <div className={styles.navContainer} >
            <div className={styles.nav}>
                <h2 className={styles.logo} onClick={() => navigate("/home")} >LunchUP <BagIcon className={styles.icon} /></h2>
                <div className={styles.navLinks}>                   
                    <ul className={styles.navLinks} >
                        {!isAuthenticated && <li><a onClick={() => navigate("/login")} >Inicar Sesión</a></li>}
                        <li><a onClick={() => navigate("/home")} >Inicio</a></li>
                        <li><a onClick={() => navigate("/shopping")} >
                            <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />{shoppingCart.length > 0 && <span className={styles.cartCount}>{shoppingCart.length}</span>}</a>
                        </li>
                        {isAuthenticated && <li><a onClick={() => navigate("/profile")} >Mi Perfil</a></li>}
                    </ul>
                </div>
            </div>
            
        </div>
    )

}


export default Nav;