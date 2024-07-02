import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.panWrapper}>
                <div className={styles.pan}>
                    <div className={styles.food}></div>
                    <div className={styles.panBase}></div>
                    <div className={styles.panHandle}></div>
                </div>
                <div className={styles.panShadow}></div>
                <h2 className={styles.loading}> LunchUP </h2>
            </div>
        </div>
    )
}

export default Loader