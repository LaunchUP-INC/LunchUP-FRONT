import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loader from "../Loader/Loader";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import ReviewAlert from "../ReviewAlert/ReviewAlert";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getChild, postChild } from "../../redux/actions";
import ProfileActions from "./ProfileActions";
import { validate } from "./validate";
import AddComensal from "./AddComensalProfile";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const children = useSelector((state) => state.children);
  const dispatch = useDispatch();
  const manualUser = useSelector((state) => state.user);
  const [userManual, setUserManual] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const [errors, setErrors] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newChildren, setNewChildren] = useState([
    {
      name: "",
      lastName: "",
      schoolId: "",
      grade: "",
    },
  ]);

  const openModal = () => {
    setModalIsOpen(true);
  };



  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChildChange = (index, event) => {
    const { name, value } = event.target;
    const updatedChildren = [...newChildren];
    updatedChildren[index] = { ...updatedChildren[index], [name]: value };
    setNewChildren(updatedChildren);

    // Actualizar los errores específicos para este campo
    const updatedErrors = [...errors];
    updatedErrors[index] = validate(updatedChildren[index]);
    setErrors(updatedErrors);
  };

  const handleSaveComensal = (comensal) => {
    dispatch(postChild(comensal));
    closeModal();
  };

  useEffect(() => {
    dispatch(getChild());
  }, [dispatch]);

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Card
        style={{ width: "15rem" }}
        bg={"#FFBF78"}
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
        <Button variant="success" onClick={openModal} className={styles.btn}>
          Agregar comensal
        </Button>
      </Card>
      <AddComensal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        childrens={newChildren}
        handleChildChange={handleChildChange}
        errors={errors}
        handleSaveComensal={handleSaveComensal}
      />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Grado</th>
              <th>Escuela</th>
            </tr>
          </thead>
          <tbody>
            {children.map((child, index) => (
              <tr key={index}>
                <td>{child.firstname}</td>
                <td>{child.lastname}</td>
                <td>{child.gradeLevel}</td>
                <td>{child.SchoolId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ProfileActions />
      <ReviewAlert user={isAuthenticated ? user.sub : userManual.id} />
    </div>
  );
};

export default Profile;
