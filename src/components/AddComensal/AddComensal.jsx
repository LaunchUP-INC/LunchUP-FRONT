import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getSchools } from "../../redux/actions";
import { validate } from "../ChildDetail/validate";
import { toast } from "react-toastify";

const AddComensalModal = ({
  modalIsOpen,
  closeModal,
  handleAddChild,
  errors,
  setErrors,
  setSavedComensalsCount,
  savedComensalsCount,
}) => {
  const dispatch = useDispatch();
  const schools = useSelector((state) => state.schools);
  const [newChild, setNewChild] = useState({
    firstname: "",
    lastname: "",
    SchoolId: "",
    gradeLevel: "",
  });

 
  useEffect(() => {
    dispatch(getSchools());
  }, [dispatch]);

  const handleNewChildChange = (event) => {
    const { name, value } = event.target;
    setNewChild((prevNewChild) => ({ ...prevNewChild, [name]: value }));
    setErrors(validate({ ...newChild, [name]: value }));
  };

  const handleSave = () => {
    if (
      errors.childName ||
      errors.childLastName ||
      errors.childSchool ||
      errors.childGrade
    ) {
      toast.error("Por favor, corrija los errores antes de guardar.")
      return;
    }
    if (
      newChild.firstname.trim() !== "" &&
      newChild.lastname.trim() !== "" &&
      newChild.SchoolId.trim() !== "" &&
      newChild.gradeLevel.trim() !== ""
    ) {
      handleAddChild(newChild);
      setNewChild({
        firstname: "",
        lastname: "",
        SchoolId: "",
        gradeLevel: "",
      });

      setSavedComensalsCount(savedComensalsCount + 1);

      closeModal();
    } else {
      toast.error("Por favor, complete todos los campos antes de guardar.")
    }
  };

  return (
    <Modal show={modalIsOpen} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Añadir Comensal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="childName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del comensal"
              name="firstname"
              value={newChild.firstname}
              onChange={handleNewChildChange}
              isInvalid={!!errors.childName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.childName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="childLastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellido del comensal"
              name="lastname"
              value={newChild.lastname}
              onChange={handleNewChildChange}
              isInvalid={!!errors.childLastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.childLastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="childSchool">
            <Form.Label>Escuela</Form.Label>
            <Form.Control
              as="select"
              name="SchoolId"
              value={newChild.SchoolId}
              onChange={handleNewChildChange}
              isInvalid={!!errors.childSchool}
            >
              <option value="">Selecciona una escuela</option>
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.childSchool}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="childGrade">
            <Form.Label>Grado</Form.Label>
            <Form.Control
              type="text"
              placeholder="Grado del comensal"
              name="gradeLevel"
              value={newChild.gradeLevel}
              onChange={handleNewChildChange}
              isInvalid={!!errors.childGrade}
            />
            <Form.Control.Feedback type="invalid">
              {errors.childGrade}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar Comensal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddComensalModal;
