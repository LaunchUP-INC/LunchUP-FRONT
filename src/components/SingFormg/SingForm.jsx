import styles from "./SingForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthIcon from "../Icons/AuthIcon";
import { useNavigate } from "react-router-dom";
import { validate } from "./validate";
import AddComensalModal from "../AñadirComensal/AñadirComensal";

const SingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    children: [{ name: "", age: "", school: "", grade: "" }],
  });

  const [errors, setErrors] = useState({});

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    if (formData.children.length === 0) {
      handleAddChild(); // Añadir un comensal vacío si no hay ninguno
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors(validate({ ...formData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    alert("Bienvenido a LunchUp");
    navigate("/login");
    // Aquí puedes añadir el código para enviar el formulario
  };

  const handleAddChild = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      children: [
        ...prevFormData.children,
        { name: "", lastName: "", school: "", grade: "" },
      ],
    }));
  };

  const handleChildChange = (index, event) => {
    const { name, value } = event.target;
    const updatedChildren = [...formData.children];
    updatedChildren[index][name] = value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      children: updatedChildren,
    }));
    setErrors(validate({ ...formData, children: updatedChildren }));
  };

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className={styles.container}>
        <form className={styles.form}>
          <span>Nombre</span>
          <input
            name="name"
            type="text"
            className={styles.input}
            placeholder="Ingresa tu nombre"
            onChange={handleChange}
          />
          <span className={styles.error}>{errors && errors.name}</span>
          <span>Apellido</span>
          <input
            name="lastName"
            type="text"
            className={styles.input}
            placeholder="Ingresa tu apellido"
            onChange={handleChange}
          />
          <span className={styles.error}>{errors && errors.lastName}</span>
          <span>Email</span>
          <input
            name="email"
            type="email"
            className={styles.input}
            placeholder="ejemplo@mail.com"
            onChange={handleChange}
          />
          <span className={styles.error}>{errors && errors.email}</span>
          <span>Contraseña</span>
          <input
            name="password"
            type="password"
            className={styles.input}
            placeholder="Ingresa tu contraseña"
            onChange={handleChange}
          />
          <span className={styles.error}>{errors && errors.password}</span>
          <span>Confirmar Contraseña</span>
          <input
            name="confirmPassword"
            type="password"
            className={styles.input}
            placeholder="Confirma tu contraseña"
            onChange={handleChange}
          />
          <span className={styles.error}>
            {errors && errors.confirmPassword}
          </span>

          <button type="button" className={styles.comensal} onClick={openModal}>
            Añadir Comensal
          </button>

          <button onClick={handleSubmit} className={styles.btn}>
            Registrarse
          </button>

          <span className={styles.error}>{errors && errors.children}</span>
        </form>
        <span>Registrase con Auth0</span>
        <button className={styles.btnAuth} onClick={() => loginWithRedirect()}>
          <AuthIcon />
        </button>

        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className={styles.link}>
            Iniciar Sesion
          </Link>
        </p>

        <AddComensalModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          childrens={formData.children}
          handleAddChild={handleAddChild}
          handleChildChange={handleChildChange}
        />
      </div>
    )
  );
};

export default SingForm;
