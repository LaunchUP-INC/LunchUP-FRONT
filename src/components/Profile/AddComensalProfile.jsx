import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSchools } from "../../redux/actions";

const AddComensal = ({
  modalIsOpen,
  closeModal,
  children,
  handleChildChange,
  errors,
  handleSaveComensal,
}) => {
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.schools);

  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);


  const handleSave = () => {
    const newChild = children; // Obtener el último hijo añadido

    if (
      errors.childName ||
      errors.childLastName ||
      errors.childSchool ||
      errors.childGrade
    ) {
      alert("Por favor, corrija los errores antes de guardar.");
      return;
    }

    handleSaveComensal(newChild);
  };

  return (
    <Modal show={modalIsOpen} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Añadir Comensal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <Form.Group >
            <Form.Label>Nombre del Hijo/a</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nombre del hijo/a"
              value={children.name}
              onChange={(event) => handleChildChange(event)}
              isInvalid={!!errors.childName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.childName}
            </Form.Control.Feedback>

            <Form.Label>Apellido del Hijo/a</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Apellido del hijo/a"
              value={children.lastName}
              onChange={(event) => handleChildChange(event)}
              isInvalid={!!errors.childLastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.childLastName}
            </Form.Control.Feedback>

            <Form.Label>Escuela</Form.Label>
            <Form.Control
              as="select"
              name="schoolId"
              value={children.schoolId || ""}
              onChange={(event) => handleChildChange(event)}
              isInvalid={!!errors.childSchool}
            >
              <option value="">Seleccione una escuela</option>
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.childSchool}
            </Form.Control.Feedback>

            <Form.Label>Grado/Año</Form.Label>
            <Form.Control
              type="text"
              name="grade"
              placeholder="Grado o Año"
              value={children.grade || ""}
              onChange={(event) => handleChildChange(event)}
              isInvalid={!!errors.childGrade}
            />
            <Form.Control.Feedback type="invalid">
              {errors.childGrade}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
        <Button variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddComensal;
