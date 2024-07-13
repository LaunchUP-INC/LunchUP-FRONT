import styles from "./Reviews.module.css";



const Reviews = () => {
    return (
        <div className={styles.page}>
            <div className={styles.margin}></div>
            <h3>Armando Sillas</h3>
            <p className={styles.title}>La aplicacion me parecio excelente, me facilito mucho la resolucion de la comida para mi hijo durante el horario escolar.</p>
        </div>
    );
};

export default Reviews;