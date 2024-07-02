import styles from "./SingForm.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { validate } from "./validation";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions";

const SingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors(validate({ ...formData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !errors.name &&
      !errors.lastName &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword
    ) {
      dispatch(register(formData.email, formData.password));
      alert("Bienvenido a LunchUp!");
      navigate("/login");
    } else {
      console.log("Formulario no valido");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <span>Nombre</span>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Ingresa tu nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <span className={styles.error}>{errors.name ? errors.name : ""}</span>
        <span>Apellido</span>
        <input
          type="text"
          name="lastName"
          className={styles.input}
          placeholder="Ingresa tu apellido"
          value={formData.lastName}
          onChange={handleChange}
        />
        <span className={styles.error}>
          {errors.lastName ? errors.lastName : ""}
        </span>
        <span>Email</span>
        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="ejemplo@mail.com"
          value={formData.email}
          onChange={handleChange}
        />
        <span className={styles.error}>{errors.email ? errors.email : ""}</span>
        <span>Contraseña</span>
        <input
          type="password"
          name="password"
          className={styles.input}
          placeholder="Ingresa tu contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        <span className={styles.error}>
          {errors.password ? errors.password : ""}
        </span>
        <span>Confirmar Contraseña</span>
        <input
          type="password"
          name="confirmPassword"
          className={styles.input}
          placeholder="Confirma tu contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span className={styles.error}>
          {errors.confirmPassword ? errors.confirmPassword : ""}
        </span>
        <button className={styles.btn} onClick={handleSubmit}>
          Registrarse
        </button>
      </form>
      <span>Registrase con Google</span>
      <button className={styles.btnGoogle}>
        <FcGoogle />
      </button>

      <p>
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className={styles.link}>
          Iniciar Sesion
        </Link>
      </p>
    </div>
  );
};

export default SingForm;
