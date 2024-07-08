import styles from "./SingForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthIcon from "../Icons/AuthIcon";
import { useNavigate } from "react-router-dom";
import { validate } from "./validate";
import AddComensalModal from "../AddComensal/AddComensal";
import axios from "axios";

const SingForm = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

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
      handleAddChild();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      alert("Por favor, corrija los errores antes de enviar el formulario.");
    } else {
      try {
        await loginWithRedirect();
        const token = await getAccessTokenSilently();
        await axios.post(
          "http://localhost:3001/register",
          {
            firstname: formData.name,
            lastname: formData.lastName,
            telephone: formData.phone,
            email: formData.email,
            password: formData.password,
            isAdmin: false,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Formulario enviado correctamente");
        navigate("/login");
      } catch (error) {
        console.error("Error registrando el usuario:", error);
        alert(
          "Hubo un error registrando el usuario. Por favor, inténtelo de nuevo."
        );
      }
    }
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

  return (
    !isAuthenticated && (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
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

          <button type="submit" className={styles.btn}>
            Registrarse
          </button>

          <span className={styles.error}>{errors && errors.children}</span>
        </form>
        <div className={styles.noRegister}>
          <div className={styles.auth}>
            <span>Registrase con Auth0</span>
            <button
              className={styles.btnAuth}
              onClick={() => loginWithRedirect()}
            >
              <AuthIcon />
            </button>
          </div>
          <div className={styles.account}>
            <p>¿Ya tienes una cuenta? </p>
            <Link to="/login" className={styles.link}>
              Iniciar Sesion
            </Link>
          </div>
        </div>

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
