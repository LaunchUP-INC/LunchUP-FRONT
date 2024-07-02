import styles from "./SingForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";


const SingForm = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Crear Cuenta</h1>
            <form className={styles.form}>
                <span>Nombre</span>
                <input type="text" className={styles.input} placeholder="Ingresa tu nombre"/>
                <span>Apellido</span>
                <input type="text" className={styles.input} placeholder="Ingresa tu apellido"/>
                <span>Email</span>
                <input type="email" className={styles.input} placeholder="ejemplo@mail.com"/>
                <span>Contraseña</span>
                <input type="password" className={styles.input} placeholder="Ingresa tu contraseña"/>
                <span>Confirmar Contraseña</span>
                <input type="password" className={styles.input} placeholder="Confirma tu contraseña"/>
                <button className={styles.btn}>Registrarse</button>
            </form>
            <span>Registrase con Google</span>
            <button className={styles.btnGoogle}>
                <FcGoogle />
            </button>

            <p>¿Ya tienes una cuenta? <Link to="/login" className={styles.link}>Iniciar Sesion</Link></p>
        </div>
    )
}

export default SingForm
        