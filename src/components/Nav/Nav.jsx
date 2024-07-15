import { useNavigate, useLocation } from "react-router-dom";
import BagIcon from "../Icons/BagIcon";
import styles from "./Nav.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';

const NavigationBar  = () =>{
    // const navigate = useNavigate();
    // const location = useLocation();

    // const shoppingCart = useSelector(state => state.shoppingCart);

    // const pathToHideNav = ["/", "/login", "/signup"];
    // const shouldHideNav = pathToHideNav.includes(location.pathname);
    // const { isAuthenticated } = useAuth0();

    

    // return shouldHideNav ? null :(
    //     <div className={styles.navContainer} >
    //         <div className={styles.nav}>
    //             <h2 className={styles.logo} onClick={() => navigate("/home")} >LunchUP <BagIcon className={styles.icon} /></h2>
    //             <div className={styles.navLinks}>                   
    //                 <ul className={styles.navLinks} >
    //                     {!isAuthenticated && <li><a onClick={() => navigate("/login")} >Inicar Sesión</a></li>}
    //                     <li><a onClick={() => navigate("/home")} >Inicio</a></li>
    //                     <li><a onClick={() => navigate("/shopping")} >
    //                         <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />{shoppingCart.length > 0 && <span className={styles.cartCount}>{shoppingCart.length}</span>}</a>
    //                     </li>
    //                     {isAuthenticated && <li><a onClick={() => navigate("/profile")} >Mi Perfil</a></li>}
    //                 </ul>
    //             </div>
    //         </div>
            
    //     </div>
    // )


    // BOOTSTRAP
    const navigate = useNavigate();
    const location = useLocation();
    const shoppingCart = useSelector(state => state.shoppingCart);
    const pathToHideNav = ["/", "/login", "/signup", "/admin"];
    const shouldHideNav = pathToHideNav.includes(location.pathname);
    const { isAuthenticated } = useAuth0();

    return shouldHideNav ? null : (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand 
                    onClick={() => navigate("/home")} 
                    style={{ cursor: 'pointer' }}
                    className={styles['navbar-brand']}
                >
                    LunchUP <BagIcon className={`ms-2 ${styles['navbar-icon']}`} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            onClick={() => navigate("/home")} 
                            className={styles['nav-link']}
                        >
                            Inicio
                        </Nav.Link>
                        <Nav.Link 
                            onClick={() => navigate("/shopping")} 
                            className={styles['nav-link']}
                        >
                            <FontAwesomeIcon 
                                icon={faShoppingCart} 
                                className={`me-1 ${styles['navbar-icon']}`} 
                            />
                            {shoppingCart.length > 0 && (
                                <Badge bg="secondary" className={styles['navbar-badge']}>
                                    {shoppingCart.length}
                                </Badge>
                            )}
                        </Nav.Link>
                        {isAuthenticated && (
                            <Nav.Link 
                                onClick={() => navigate("/profile")} 
                                className={styles['nav-link']}
                            >
                                Mi Perfil
                            </Nav.Link>
                        )}
                        {!isAuthenticated && (
                            <Nav.Link 
                                onClick={() => navigate("/login")} 
                                className={styles['nav-link']}
                            >
                                Iniciar Sesión
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}


export default NavigationBar ;