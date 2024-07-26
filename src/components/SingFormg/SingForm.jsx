import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./SingForm.module.css";
import AddComensalModal from "../AddComensal/AddComensal";
import { validate } from "./validate";
import { registerUser} from "../../redux/actions";

const SingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    children: [],
  });


  const [errors, setErrors] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [savedComensalsCount, setSavedComensalsCount] = useState(0);

  const openModal = () => {
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
    
    const success = await dispatch(registerUser(formData));
    if (success) {
      navigate("/login");
    } else if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  const handleAddChild = (child) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      children: [...prevFormData.children, child],
    }));
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
          {savedComensalsCount === 0 && errors.children}
        </span>

        <div>
          <Button className="btn-primary w-100 mb-2" onClick={openModal}>
            Añadir Comensal
          </Button>
        </div>

        <Button
          disabled={savedComensalsCount === 0 && true}
          className="btn-success w-100"
          type="submit"
        >
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
        errors={errors}
        setErrors={setErrors}
        setFormData={setFormData}
        savedComensalsCount={savedComensalsCount}
        setSavedComensalsCount={setSavedComensalsCount}
      />
    </Container>
  );
};

export default SingForm;
