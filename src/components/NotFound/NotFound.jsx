import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import imagen from '..//..//assets/img/404.png';

const NotFound = () => {
    const [counter, setCounter] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        const redirectTimer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimer);
        };
    }, [navigate]);

    return (
        <div className={styles.notFound}>
            <div className={styles.container}>
                <h1 className={styles.h1}>404 - Página no encontrada</h1>
                {/*             <img src={imagen} alt="404" className={styles.image}/> */}
                <p className={styles.p}>Redirigiendo a la página de inicio en {counter} segundos...</p>
            </div>
        </div>
    );
};

export default NotFound;