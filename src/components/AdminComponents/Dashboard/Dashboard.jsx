import { useEffect, useState } from "react";
import DashboardHeading from "../AdminNav/TopNavBar";
import styles from "./Dashboard.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteDish, fetchProducts, resetDeleteDishStatus } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, CardText, Col, Container, Row } from "react-bootstrap";


const Dashboard = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const allUsers = useSelector((state) => state.allUsers);

  return (
    <Container className="mt-5">
      <Row className="d-flex">
        <Col>
          <Card>
            <CardBody>
              <Card.Title><FontAwesomeIcon icon={faUsers}/>{allUsers.length}</Card.Title>
              <CardText>Usuarios</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <Card.Title><FontAwesomeIcon icon={faBasketShopping}/> {allProducts.length}</Card.Title>
              <CardText>Productos publicados</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        Aqui pueden ir unas estadisticas 
      </Row>
    </Container>
  );
};

export default Dashboard;
