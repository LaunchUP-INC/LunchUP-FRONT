import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import BasketIcon from "../../Icons/BasketIcon";
import styles from "./Products.module.css";
const Products = (props) => {
  const { products } = props;
  const navigate = useNavigate();

  return (
    <Container>
      <Row style={{ marginBottom: "40px" }}>
        <div className="d-flex justify-content-between ">
          <h2>
            Productos <BasketIcon className={styles.icon} />
          </h2>
          <Button onClick={() => navigate("/admin/product/create")}>
            <FontAwesomeIcon icon={faPlus} /> Nuevo producto
          </Button>
        </div>
      </Row>
      <Row className="mb-2">
        <Col style={{ fontSize: "18px" }}>Nombre</Col>
        <Col style={{ fontSize: "18px" }}>Precio</Col>
        <Col style={{ fontSize: "18px" }}>Stock</Col>
        <Col style={{ textAlign: "center", fontSize: "18px" }}>Acciones</Col>
      </Row>
      <Row className="mb-1 bg-light" style={{ border: "1px solid black" }}>
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              style={{
                borderRadius: "0px",
                display: "flex",
                justifyContent: "center",
                padding: "5px",
                border: "1px solid gray",
              }}
            >
              <Row className="align-items-center">
                <Col>{item.name}</Col>
                <Col>$ {item.price}</Col>
                <Col>{item.stock}</Col>
                <Col
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    variant="success"
                    onClick={() => navigate(`/admin/product/modify/${item.id}`)}
                    style={{ height: "35px", fontSize: "15px" }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} /> Editar
                  </Button>
                  <Button
                    variant="danger"
                    style={{ height: "35px", fontSize: "15px" }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowsRotate}
                      style={{ fontSize: "12px", marginRight: "3px" }}
                    />
                    Desactivar
                  </Button>
                </Col>
              </Row>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
