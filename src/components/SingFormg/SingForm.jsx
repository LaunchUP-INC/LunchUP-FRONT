import styles from "./SingForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthIcon from "../Icons/AuthIcon";
import { useNavigate } from "react-router-dom";
import { validate } from "./validate";
import AddComensalModal from "../AddComensal/AddComensal";

const SingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
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
    console.log(formData);
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      alert("Por favor, corrija los errores antes de enviar el formulario.");
    } else {
      alert("Formulario enviado correctamente");
      navigate("/login");
    }

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
          <label>Nombre</label>
          <input
            name="name"
            type="text"
            className={styles.input}
            placeholder="Ingresa tu nombre"
            onChange={handleChange}
            value={formData.name}
          />
          <span className={styles.error}>{errors && errors.name}</span>
          <label>Apellido</label>
          <input
            name="lastName"
            type="text"
            className={styles.input}
            placeholder="Ingresa tu apellido"
            onChange={handleChange}
            value={formData.lastName}
          />
          <span className={styles.error}>{errors && errors.lastName}</span>
          <label>Email</label>
          <input
            name="email"
            type="email"
            className={styles.input}
            placeholder="ejemplo@mail.com"
            onChange={handleChange}
            value={formData.email}
          />
          <span className={styles.error}>{errors && errors.email}</span>
          <label>Teléfono</label>
          <input
            name="phone"
            type="number"
            className={styles.input}
            placeholder="Teléfono"
            onChange={handleChange}
            value={formData.phone}
          />
          <span className={styles.error}>{errors && errors.phone}</span>
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            className={styles.input}
            placeholder="Ingresa tu contraseña"
            onChange={handleChange}
            value={formData.password}
          />
          <span className={styles.error}>{errors && errors.password}</span>
          <span>Confirmar Contraseña</span>
          <input
            name="confirmPassword"
            type="password"
            className={styles.input}
            placeholder="Confirma tu contraseña"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          <span className={styles.error}>{errors.confirmPassword}</span>

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
          errors={errors}
        />
      </div>
    )
  );
};

export default SingForm;
