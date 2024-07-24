import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faLock, faUnlock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setUserAdminBan } from "../../../redux/actions";
import Swal from "sweetalert2";


const Users = (props) => {
  const { users } = props;

  const dispatch = useDispatch();



  const userAdminHandler = async (user) => {
    const id = user.id;
    const updatedUser = { ...user, isAdmin: !user.isAdmin };

    const response = await dispatch(setUserAdminBan(id, updatedUser));

    if (response === "success") {
      Swal.fire({
        icon: "success",
        title: "Admin",
        text: `${updatedUser.isAdmin ? `El usuario "${updatedUser.firstname} ${updatedUser.lastname}" ahora es admin` : `El usuario "${updatedUser.firstname} ${updatedUser.lastname}" ya no es admin`}`,
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error",
      })
    }
  }

  const userBanHandler = async (user) => {
    const id = user.id;
    const updatedUser = { ...user, banned: !user.banned };

    const response = await dispatch(setUserAdminBan(id, updatedUser));

    if (response === "success") {
      Swal.fire({
        icon: "success",
        title: "Admin",
        text: `${updatedUser.banned ? `El usuario "${updatedUser.firstname} ${updatedUser.lastname}" ahora esta baneado` : `El usuario "${updatedUser.firstname} ${updatedUser.lastname}" ya no esta baneado`}`,
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error",
      })
    }
  }

  return (
    <Container>
      <Row>
        <h2>Usuarios <FontAwesomeIcon icon={faUsers} /> </h2>
      </Row>

      <Row>
        <Col style={{ fontSize: "18px" }}>Nombre</Col>
        <Col style={{ fontSize: "18px" }}>Email</Col>
        <Col style={{ fontSize: "18px" }}>N° Telefono</Col>
        <Col style={{ textAlign: "center", fontSize: "18px" }}>Acciones</Col>
      </Row>

      <Row className="mb-1 bg-light" style={{ border: "1px solid black" }}>
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              style={{
                borderRadius: "0px",
                display: "flex",
                justifyContent: "center",
                padding: "5px",
                border: "1px solid gray",
              }}
            >
              <Row className="align-items-center">
                <Col>{`${user.firstname} ${user.lastname}`}</Col>
                <Col>{user.email}</Col>
                <Col>{user.telephone}</Col>
                <Col
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    variant={user.isAdmin ? "danger" : "success"}
                    onClick={() => userAdminHandler(user)}
                    style={{ height: "35px", fontSize: "15px", width: "170px" }}
                  >
                    <FontAwesomeIcon icon={faArrowsRotate} /> {user.isAdmin ? "Quitar admin" : "Dar admin"}
                  </Button>
                  <Button
                    variant={user.banned ? "success" : "danger"}
                    onClick={() => userBanHandler(user)}
                    style={{ height: "35px", fontSize: "15px", width: "180px" }}
                  >
                    <FontAwesomeIcon
                      icon={user.banned ? faUnlock : faLock}
                      style={{ fontSize: "12px", marginRight: "3px" }}
                    />
                    {user.banned ? "Quitar ban" : "Banear usuario"}
                  </Button>
                </Col>
              </Row>
            </Card>
          );
        })}
      </Row>
    </Container>
  )

}

export default Users;