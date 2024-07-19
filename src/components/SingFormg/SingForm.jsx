import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./SingForm.module.css";
import AddComensalModal from "../AddComensal/AddComensal";
import { validate } from "./validate";

const SingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    children: [{ name: "", lastName: "", school: "", grade: "" }],
  });

  const [errors, setErrors] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [savedComensalsCount, setSavedComensalsCount] = useState(0);

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
      setErrors(validationErrors);
      alert("Por favor, corrija los errores antes de enviar el formulario.");
      return;
    }

    try {
      await axios.post("http://localhost:3001/register", {
        firstname: formData.name,
        lastname: formData.lastName,
        telephone: formData.phone,
        email: formData.email,
        password: formData.password,
        isAdmin: false,
      });
      alert("Formulario enviado correctamente");
      navigate("/login");
    } catch (error) {
      console.error("Error registrando el usuario:", error);
      alert(
        "Hubo un error registrando el usuario. Por favor, inténtelo de nuevo."
      );
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
    <Container
      className="d-flex justify-content-center align-items-center flex-column gap-5"
      style={{ minHeight: "100vh" }}
    >
      <Form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded"
        style={{ boxShadow: "7px 7px 1px rgb(9, 98, 70)", maxWidth: "700px" }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              style={{ backgroundColor: "#E5D4FF" }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu apellido"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              isInvalid={!!errors.lastName}
              style={{ backgroundColor: "#E5D4FF" }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@mail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              style={{ backgroundColor: "#E5D4FF" }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="phone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              style={{ backgroundColor: "#E5D4FF" }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              style={{ backgroundColor: "#E5D4FF" }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="confirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              isInvalid={!!errors.confirmPassword}
              style={{ backgroundColor: "#E5D4FF" }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="mb-2">
          <strong>Comensales guardados:</strong> {savedComensalsCount}
        </div>

        <span className="text-danger" type="invalid">
          {errors.children}
        </span>

        <div>
          <Button className="btn-primary w-100 mb-2" onClick={openModal}>
            Añadir Comensal
          </Button>
        </div>

        <Button className="btn-success w-100" type="submit">
          Registrarse
        </Button>
      </Form>
      <Form.Text
        className="text-muted mt-3 d-flex justify-content-center align-items-center flex-column gap-2 "
        style={{ fontSize: "18px" }}
      >
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className={styles.link}>
          Inicia sesión aquí
        </Link>
      </Form.Text>

      <AddComensalModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        childrens={formData.children}
        handleAddChild={handleAddChild}
        handleChildChange={handleChildChange}
        errors={errors}
        setFormData={setFormData}
        savedComensalsCount={savedComensalsCount}
        setSavedComensalsCount={setSavedComensalsCount}
      />
    </Container>
  );
};

export default SingForm;
