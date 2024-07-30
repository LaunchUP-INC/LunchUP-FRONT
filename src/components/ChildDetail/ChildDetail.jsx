import styles from "./ChildDetail.module.css";
import { Table, Form, Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  deleteChild,
  getChild,
  getSchools,
  putChild,
} from "../../redux/actions";
import { validate } from "./validate";

const ChildDetail = () => {
  const children = useSelector((state) => state.children);
  const schools = useSelector((state) => state.schools);
  const dispatch = useDispatch();
  const [editChild, setEditChild] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getChild());
    dispatch(getSchools());
    
  }, [dispatch]);

  const handleEdit = (child) => {
    setEditChild(child);
    setShowModal(true);
  };

  const handleDelete = (child) => {
    dispatch(deleteChild(child.id));
  };

  const handleChange = (e) => {
    setEditChild({
      ...editChild,
      [e.target.name]: e.target.value,
    });

    setError(validate({ ...editChild, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error.childName || error.lastName || error.grade || error.schoolId) {
      return alert("Por favor complete los campos obligatorios");
    }

    dispatch(putChild(editChild));
    setShowModal(false);
    setEditChild(null);
    setError({});
  };

  const handleClose = () => {
    setShowModal(false);
    setEditChild(null);
    setError({});
  };

  const handleSchool = (childSchool) => {
    if (childSchool === "1") {
      return "Colegio Uno";
    } else if (childSchool === "2") {
      return "Colegio Dos";
    } else if (childSchool === "3") {
      return "Colegio Tres";
    } else if (childSchool === "4") {
      return "Colegio Cuatro";
    } else if (childSchool === "5") {
      return "Colegio Cinco";
    } else {
      return "";
    }
  };

  return (
    <div className={styles.container}>
      <h2>Detalles</h2>
      <Table striped bordered hover style={{ marginTop: "20px" }} className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Grado</th>
            <th>Escuela</th>
            <th>Editar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {children.map((child, index) => (
            <tr key={index}>
              <td>{child.firstname}</td>
              <td>{child.lastname}</td>
              <td>{child.gradeLevel}</td>
              <td>{child.School?.name || handleSchool(child.SchoolId)}</td>
              <td className={styles.center}>
                <button
                  className={styles.edit}
                  onClick={() => handleEdit(child)}
                >
                  <svg className={styles.svgIcon} viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2 6.2 16.4 6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </button>
                <button
                  className={styles.delete}
                  onClick={() => handleDelete(child)}
                >
                  <svg className={styles.deleteSvgIcon} viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Comensal</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalContainer}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="childName" className={styles.formGroup}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                value={editChild?.firstname || ""}
                onChange={handleChange}
                isInvalid={!!error.childName}
              />
              <Form.Control.Feedback type="invalid">
                {error.childName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="childLastname" className={styles.formGroup}>
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={editChild?.lastname || ""}
                onChange={handleChange}
                isInvalid={!!error.childLastName}
              />
              <Form.Control.Feedback type="invalid">
                {error.childLastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="childGrade" className={styles.formGroup}>
              <Form.Label>Grado</Form.Label>
              <Form.Control
                type="text"
                name="gradeLevel"
                value={editChild?.gradeLevel || ""}
                onChange={handleChange}
                isInvalid={!!error.childGrade}
              />
              <Form.Control.Feedback type="invalid">
                {error.childGrade}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="childSchool" className={styles.formGroup}>
              <Form.Label>Escuela</Form.Label>
              <Form.Control
                as="select"
                name="schoolId"
                value={editChild?.schoolId || ""}
                onChange={handleChange}
                isInvalid={!!error.childSchool}
              >
                <option value="">Selecciona una escuela</option>
                {schools.map((school) => (
                  <option key={school.id} value={school.id}>
                    {school.name}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {error.childSchool}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar cambios
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChildDetail;
