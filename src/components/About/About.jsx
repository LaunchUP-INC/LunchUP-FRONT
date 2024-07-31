import styles from "./About.module.css";
import Guille from "..//..//assets/Perfiles/Guille.png";
import Juanma from "..//..//assets/Perfiles/Juanma.jpeg";
import Lucas from "..//..//assets/Perfiles/Lucas.jpeg";
import Santi from "..//..//assets/Perfiles/Santi.jpeg";
import Maia from "..//..//assets/Perfiles/Maia.jpeg";
import Cintia from "..//..//assets/Perfiles/Cintia.jpeg";
import Tomi from "..//..//assets/Perfiles/Tomi.jpeg";
import CardAbout from "../CardAbout/CardAbout";

const About = () => {
  const GuilleDesc =
    "Soy Guillermo Fernandez, Desarrollador Full Stack con una sólida formación autodidacta y continua. Inicié mi carrera en programación con el curso de Responsive Web Design en FreeCodeCamp, adquiriendo habilidades en HTML, CSS y JavaScript. Luego, mejoré estas habilidades en el curso de Primeros Pasos en el Desarrollo Frontend de Argentina Programa 4.0. Posteriormente, completé el curso de Programador Full Stack en los proyectos T. Tec. San Juan, profundizando en Java, Spring y SQL, y desarrollando habilidades blandas clave como la comunicación efectiva y el trabajo en equipo.";
  const JuanmaDesc =
    "Soy Juan Manuel Balaguera. Como Full Stack Developer, tengo experiencia en proyectos utilizando tecnologías como React, Redux, Node.js, SQL y JavaScript. He desarrollado una variedad de proyectos personales para mejorar mis habilidades y mantenerme al día con las tendencias tecnológicas. Mi objetivo es crear aplicaciones web robustas y escalables, aprovechando mis habilidades creativas y técnicas.";
  const LucasDesc =
    "Soy Lucas Demartin. Además de que actualmente trabajo como carpintero, disfruto aprendiendo y desarrollando habilidades para crecer como programador. Mi interés en este campo surgió al querer entender cómo funcionan los videojuegos detrás de la escenas comencé a explorar y encontrar tecnologías para aprender por mi cuenta, lo que me ayudó a sentar las bases de la programación. Posteriormente, me uní al bootcamp de Soy Henry para desarrollarme como programador Full Stack, lo que me permitió seguir aprendiendo tecnologías como reaccionar. express, javascript, nodeJs, que ayudan a mi crecimiento personal y profesional en este mundo que cada vez me apasiona.";
  const SantiDesc =
    "Soy Santiago Heredia, un desarrollador interesado en aprender lo máximo posible sobre la tecnología y la programación. Me especializo en el desarrollo Front-end.";
  const MaiaDesc =
    "Soy Maia Polischuck. Con una sólida formación como técnica universitaria en alimentos y química, combinada con mi experiencia como docente de química, he adquirido habilidades en comunicación, resolución de problemas y trabajo en equipo. Actualmente tengo experiencia en tecnologías como JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize. Soy una persona muy perfeccionista y detallista, comprometida con la calidad y la precisión en todo lo que hago.";
  const CintiaDesc =
    "Soy Cintia Poloni, Arquitecta de profesión con un enorme interés en el mundo de las tecnologías. Mi curiosidad y mis ganas de aprender me llevaron a estudiar y recientemente completé mi formación en Desarrollo Web Full Stack en Soy Henry. Durante el desarrollo de mi carrera, aprendí diversas tecnologías que pude aplicar en proyectos prácticos, tanto individuales como grupales, donde pude desarrollar soluciones creativas y eficientes y fortalecer la dinámica del trabajo en equipo.";
  const TomiDesc =
    "Soy Tomás Toledo, un Desarrollador Web Full Stack con una base sólida tanto en tecnologías frontend como backend. Mi formación en SoyHenry y la Universidad Abierta Interamericana (UAI) me ha dotado de habilidades de pensamiento crítico y una mentalidad proactiva necesarias para resolver desafíos complejos de software.";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre Nosotros</h1>
      <p className={styles.text}>
        Somos un grupo de Desarrolladores Web Full Stack que nos conocimos
        durante nuestra formación. Decidimos seguir creciendo juntos y adquirir
        experiencia a través de nuevos proyectos.
      </p>
      <div>
        <h2>Creadores</h2>
        <div className={styles.creatorsCards}>
          <h3>Team Frontend</h3>
          <div className={styles.creators}>
            <CardAbout
              img={Guille}
              name="Guille Fernadnez"
              description={GuilleDesc}
            />
            <CardAbout
              img={Santi}
              name="Santiago Heredia"
              description={SantiDesc}
            />
            <CardAbout
              img={Juanma}
              name="Juan Balaguera"
              description={JuanmaDesc}
            />
            <CardAbout
              img={Lucas}
              name="Lucas Demartin"
              description={LucasDesc}
            />
          </div>
          <h3>Team Backend</h3>
          <div className={styles.creators}>
            <CardAbout img={Tomi} name="Tomás Toledo" description={TomiDesc} />
            <CardAbout
              img={Cintia}
              name="Cintia Poloni"
              description={CintiaDesc}
            />
            <CardAbout
              img={Maia}
              name="Maia Polischuck"
              description={MaiaDesc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
