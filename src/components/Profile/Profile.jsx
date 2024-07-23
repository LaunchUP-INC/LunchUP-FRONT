import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Loader from "../Loader/Loader";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

import ReviewAlert from "../ReviewAlert/ReviewAlert";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getSchools, addComensal } from "../../redux/actions";
import ProfileActions from "./ProfileActions"; // Importa el componente de acciones de perfil

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const manualUser = useSelector((state) => state.user);
  const [userManual, setUserManual] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const handleClosed = () => setShow(false);
  const handleShow = () => setShow(true);
  const [comensal, setComensal] = useState({
    firstname: "",
    lastname: "",
    gradeLevel: "",
    school: ""
  });

  const dispatch = useDispatch();
  const schools = useSelector((state) => state.schools);

  useEffect(() => {
    dispatch(getSchools()); // Asegúrate de que se obtengan las escuelas
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComensal({
      ...comensal,
      [name]: value
    });
  };

   const handleAddComensal = (e) => {
     e.preventDefault();
     dispatch(addComensal(comensal)); // Llama a la acción con el comensal como argumento
     handleClose(); // Cierra el modal después de añadir el comensal
   };

  useEffect(() => {
    if (!isAuthenticated) {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const fetchUser = async () => {
          try {
            const response = await axios.get(
              `http://localhost:3001/user/${userId}`
            );
            setUserManual(response.data.users);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
        fetchUser();
      }
    }
  }, [isAuthenticated]);

  /*   const handleChange = (event) => {
      setComensal({
        ...comensal,
        [event.target.name]: event.target.value,
      });
    }; */

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Card
        style={{ width: "15rem" }}
        bg={isAuthenticated ? "secondary" : "light"}
        border="dark"
      >
        <Image
          src={
            isAuthenticated
              ? user.picture
              : userManual.picture
                ? userManual.picture
                : "/no-avatar.png"
          }
          alt={
            isAuthenticated
              ? user.name
              : `${manualUser.firstname} ${manualUser.lastname}`
          }
          roundedCircle
        />
        <Card.Body>
          <Card.Title>
            {isAuthenticated
              ? user.name
              : `${manualUser.firstname} ${manualUser.lastname}`}
          </Card.Title>
          <Card.Text>
            {isAuthenticated ? user.email : manualUser.email}.
          </Card.Text>
        </Card.Body>
        <Button variant="success" onClick={handleShow} className={styles.btn}>
          Agregar comensal
        </Button>
      </Card>
      <div>
        <Modal show={show} onHide={handleClosed} animation={true}>
          <Modal.Header closeButton closeVariant="dark">
            <Modal.Title>Nuevo Comensal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAddComensal}>
              <Form.Group className="mb-3" controlId="comensalName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={comensal.firstname}
                  onChange={handleChange}
                  placeholder="Pepito"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="comensalLastname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={comensal.lastname}
                  onChange={handleChange}
                  placeholder="Honguito"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="comensalCourse">
                <Form.Label>Curso</Form.Label>
                <Form.Control
                  type="number"
                  name="gradeLevel"
                  value={comensal.gradeLevel}
                  onChange={handleChange}
                  placeholder="1"
                  min={1}
                  max={6}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="comensalSchool">
                <Form.Label>Nombre de la escuela</Form.Label>
                <Form.Select
                  name="school"
                  value={comensal.school}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar escuela</option>
                  {schools.map((school) => (
                    <option key={school.id} value={school.name}>
                      {school.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClosed}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handleClosed}>
              Añadir
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre completo</th>
              <th>Curso</th>
              <th>Escuela</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark Zuckerberg</td>
              <td>6 A</td>
              <td>Escuela Ejemplo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Elon Musk</td>
              <td>5 B</td>
              <td>Escuela Ejemplo</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bill Gates</td>
              <td>4 C</td>
              <td>Escuela Ejemplo</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <ProfileActions />
      <ReviewAlert user={isAuthenticated ? user.sub : userManual.id} />
    </div>
  );
};

export default Profile;
