import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Loader from "../Loader/Loader";

const Profile = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const [show, setShow] = useState(false);
    const [comensal, setComensal] = useState({
        nombre: "",
        apellido: "",
        curso: "",
        escuela: "",
    });
    console.log(comensal);
    const handleChange = (event) => {
        setComensal({
            ...comensal,
            [event.target.name]: event.target.value,
        });
    };

    if (isLoading) {
        return <Loader />;
    }

    const handleShowModal = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        isAuthenticated && (
            <div className={styles.container}>
                <img
                    src={user.picture}
                    alt={user.name}
                    className={styles.picture}
                />
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.nickname}>{user.nickname}</p>
                <div>
                    <button onClick={handleShowModal} className={styles.btn}>Agregar Comensal</button>
                    <div className={`${styles.comensal} ${show ? styles.open : ""}`}>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <button className={styles.btnClose} onClick={handleClose}>X</button>
                            <h3>Comensal</h3>
                            <span>Nombre y apellido</span>
                            <input 
                                type="text" 
                                placeholder="Nombre" 
                                name="nombre" 
                                onChange={handleChange} 
                                value={comensal.nombre}
                            />
                            <input 
                                type="text" 
                                placeholder="Apellido" 
                                name="apellido" 
                                onChange={handleChange} 
                                value={comensal.apellido}
                            />
                            <span>Curso</span>
                            <input 
                                type="text" 
                                placeholder="Curso" 
                                name="curso" 
                                onChange={handleChange} 
                                value={comensal.curso}
                            />
                            <span>Escuela</span>
                            <input 
                                type="text" 
                                placeholder="Escuela" 
                                name="escuela" 
                                onChange={handleChange} 
                                value={comensal.escuela}
                            />
                            <button className={styles.btn}>Añadir</button>
                        </form>
                    </div>
                </div>
                <div>
                    <button>Edit Profile</button>
                    <button onClick={() => logout()} className={styles.btn}>Logout</button>
                </div>
            </div>
        )
    );
};

export default Profile;
