import styles from "./EditProfile.module.css";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions";
import { toast } from "react-toastify";
import { clearError } from "../../redux/actions";
import { Form, Button, Container } from "react-bootstrap";

const EditProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const [firstname, setFirstname] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState(profile?.phone || "");
  const [lastname, setLastname] = useState(profile?.lastName || "");
  const userID = localStorage.getItem('user');
  const storeUser =  JSON.parse(userID);

  const id = storeUser.id;

  useEffect(() => {
    if(error){
      toast.error(error)
      dispatch(clearError())
    }

  },[error])

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      firstname,
      lastname,
      telephone, 
      email,
      password,
    };
    dispatch(updateProfile(updatedProfile, id));
    toast.success("Modificacion exitosa")
  };

  return (
    <Container className={styles.container}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Edit Profile</h1>
        <Form.Group controlId="firstname">
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className={styles.inputText}
            required
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Control
            type="text"
            placeholder="Apellido"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className={styles.inputText}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputEmail}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputPassword}
            required
          />
        </Form.Group>
        <Form.Group controlId="telephone">
          <Form.Control
            type="tel"
            placeholder="Teléfono"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className={styles.inputTel}
            required
          />
        </Form.Group>
        <Button type="submit" className={styles.submitButton}>
          Guardar cambios
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
