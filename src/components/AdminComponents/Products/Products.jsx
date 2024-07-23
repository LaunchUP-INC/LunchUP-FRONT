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
import { useState } from "react";
import EditStockModal from "./EditStockModal";
import { useDispatch } from "react-redux";
import { deleteDish } from "../../../redux/actions";


const Products = (props) => {
  const { products } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleActiveProduct = (item) =>{
    console.log(item);
    dispatch(deleteDish(item.id));
  }


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
        <Col lg={6} style={{ fontSize: "18px" }}>Nombre</Col>
        <Col lg={2} style={{ fontSize: "18px" }}>Precio</Col>
        <Col lg={1} style={{ fontSize: "18px" }}>Stock</Col>
        <Col lg={3} style={{ textAlign: "center", fontSize: "18px" }}>Acciones</Col>
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
                <Col lg={6}>{item.name}</Col>
                <Col lg={2}>$ {item.price}</Col>
                <Col lg={1}>
                  {item.stock}{" "}
                  <Button
                    variant="link"
                    onClick={() => handleShowModal(item)}
                    style={{ padding: "0" }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button></Col>
                <Col
                lg={3}
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    variant="success"
                    onClick={() => navigate(`/admin/product/modify/${item.id}`)}
                    style={{ height: "35px", fontSize: "15px", width: "100px" }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} /> Editar
                  </Button>
                  <Button
                    variant={item.isDeleted ? "success" : "danger"}
                    style={{ height: "35px", fontSize: "15px", width: "150px" }}
                    onClick={() => handleActiveProduct(item)}
                  >
                    <FontAwesomeIcon
                      icon={faArrowsRotate}
                      style={{ fontSize: "12px", marginRight: "3px" }}                      
                    />
                    {item.isDeleted ? "activar" : "Desactivar"}
                  </Button>
                </Col>
              </Row>
            </Card>
          );
        })}
      </Row>
      {selectedProduct && (
        <EditStockModal
          show={showModal}
          handleClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </Container>
  );
};

export default Products;
