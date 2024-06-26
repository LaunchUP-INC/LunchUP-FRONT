import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={styles.generalContainer}>
      <section className={styles.containerHero}>
        <img className={styles.fork} src="/heroImage-fork1.png" alt="fork" />
        <div className={styles.containerText}>
          <h3>La solución perfecta para una alimentación escolar saludable</h3>
          <p>
            Nuestra app está diseñada para transformar la experiencia de las
            cantinas escolares, haciendo que la elección de comidas nutritivas y
            deliciosas sea más fácil y accesible para todos.
          </p>

          <button>Comenzar</button>
        </div>
        <div className={styles.containerImg}>
          <img src="/heroImage-fork2.png" alt="img" />
        </div>
      </section>

      <section className={styles.containerAbout}>
        <div className={styles.containerSection}>
          <h2>¿Cómo funciona?</h2>
          <div className={styles.containerSteps}>
            <div className={styles.step}>
              <h3>Paso 1: Ingresá tus datos y los de tu hijo.</h3>
              <img src="/concept.png" alt="img" />
            </div>
            <div className={styles.step}>
              <img src="concept3.png" alt="img" />
              <h3>Paso 2: Elegí el menu que mas te guste.</h3>
            </div>
            <div className={styles.step}>
              <h3>Paso 3: Recarga el saldo y paga de manera segura.</h3>
              <img src="concept5.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
