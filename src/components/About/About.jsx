import styles from "./About.module.css"
import Guille from "..//..//assets/Perfiles/Guille.png"
import Juanma from "..//..//assets/Perfiles/Juanma.jpeg"
import Lucas from "..//..//assets/Perfiles/Lucas.jpeg"
import Santi from "..//..//assets/Perfiles/Santi.jpeg"
import Maia from "..//..//assets/Perfiles/Maia.jpeg"
import Cintia from "..//..//assets/Perfiles/Cintia.jpeg"
import Tomi from "..//..//assets/Perfiles/Tomi.jpeg"
import CardAbout from "../CardAbout/CardAbout"

const About = () => {

    const GuilleDesc = "👋 ¡Hola! 🌐 Soy un Desarrollador Full Stack con una sólida formación autodidacta y continua. Inicié mi carrera en programación con el curso de Responsive Web Design en FreeCodeCamp, adquiriendo habilidades en HTML, CSS y JavaScript. Luego, mejoré estas habilidades en el curso de Primeros Pasos en el Desarrollo Frontend de Argentina Programa 4.0. Posteriormente, completé el curso de Programador Full Stack en los proyectos T. Tec. San Juan, profundizando en Java, Spring y SQL, y desarrollando habilidades blandas clave como la comunicación efectiva y el trabajo en equipo.";
    const JuanmaDesc = "👋 ¡Hola! Soy Juan Manuel Balaguera. Como Full Stack Developer, tengo experiencia en proyectos utilizando tecnologías como React, Redux, Node.js, SQL y JavaScript. He desarrollado una variedad de proyectos personales para mejorar mis habilidades y mantenerme al día con las tendencias tecnológicas. Mi objetivo es crear aplicaciones web robustas y escalables, aprovechando mis habilidades creativas y técnicas.";
    const LucasDesc = "Hi 👋, I'm Lucas Demartin. Beside that currently i'm working as a carpenter, i enjoy learning and developing skills to grow as a programmer. My interest in this field was sparked by wanting to understand how video games work behind the scenes. I began exploring and finding technologies to learn on my own, which helped me lay the foundations of programming. Later, I joined the Soy Henry bootcamp to develop myself as a Full Stack programmer, enabling me to continue learning technologies such as react, express, javascript, nodeJs, that aid my personal and professional growth in this world that I am increasingly passionate about.🔥";
    const SantiDesc = "¡Hola! Mi nombre es Santiago. Soy un desarrollador interesado en aprender lo máximo posible sobre la tecnología y la programación. Me especializo en el desarrollo Front-end.";
    const MaiaDesc = "Hola 👋, Soy Maia. Con una sólida formación como técnica universitaria en alimentos y química, combinada con mi experiencia como docente de química, he adquirido habilidades en comunicación, resolución de problemas y trabajo en equipo. Actualmente tengo experiencia en tecnologías como JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize. Soy una persona muy perfeccionista y detallista, comprometida con la calidad y la precisión en todo lo que hago.";
    const CintiaDesc = "¡Hola, soy Cintia Poloni! 👋 Mi nombre es Cintia Poloni, soy Arquitecta de profesión con un enorme interés en el mundo de las tecnologías. Mi curiosidad y mis ganas de aprender me llevaron a estudiar y recientemente completé mi formación en Desarrollo Web Full Stack en Soy Henry. Durante el desarrollo de mi carrera, aprendí diversas tecnologías que pude aplicar en proyectos prácticos, tanto individuales como grupales, donde pude desarrollar soluciones creativas y eficientes y fortalecer la dinámica del trabajo en equipo.";
    const TomiDesc = "Hola, soy Toledo Tomás👋 Soy un Desarrollador Web Full Stack con una base sólida tanto en tecnologías frontend como backend. Mi formación en SoyHenry y la Universidad Abierta Interamericana (UAI) me ha dotado de habilidades de pensamiento crítico y una mentalidad proactiva necesarias para resolver desafíos complejos de software. 🧑‍💻"
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre Nosotros</h1>
            <p className={styles.text}>Somos una empresa dedicada a mejorar la alimentación escolar.</p>
            <div>
                <h2>Creadores</h2>
                <div className={styles.creatorsCards}>
                    <h3>Team Frontend</h3>
                    <div className={styles.creators}>
                        <CardAbout img={Guille} name="Guille Fernadnez" description={GuilleDesc} />
                        <CardAbout img={Santi} name="Santiago Heredia" description={SantiDesc}/>
                        <CardAbout img={Juanma} name="Juan Balaguera" description={JuanmaDesc}/>
                        <CardAbout img={Lucas} name="Lucas Demartin" description={LucasDesc}/>
                    </div>
                    <h3>Team Backend</h3>
                    <div className={styles.creators}>
                        <CardAbout img={Tomi} name="Tomás Toledo" description={TomiDesc}/>
                        <CardAbout img={Cintia} name="Cintia Poloni" description={CintiaDesc}/>
                        <CardAbout img={Maia} name="Maia Polischuck" description={MaiaDesc}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
