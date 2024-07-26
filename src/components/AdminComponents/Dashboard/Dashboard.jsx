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
import Rating from "../../Rating/Rating";


const Dashboard = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const allUsers = useSelector((state) => state.allUsers);

  const ratingProducts = [...allProducts].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <Container className="mt-5">
      <Row className="d-flex mb-3">
        <Col>
          <Card>
            <CardBody>
              <Card.Title><FontAwesomeIcon icon={faUsers} />{allUsers.length}</Card.Title>
              <CardText>Usuarios</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <Card.Title><FontAwesomeIcon icon={faBasketShopping} /> {allProducts.length}</Card.Title>
              <CardText>Productos publicados</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="my-3"><h2>Top 3 productos mejor calificados</h2></Row>
      <Row>
        {ratingProducts.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.images[0]} style= {{width: "100%", height: "250px"}} />
              <CardBody>
                <Card.Text><h4>{item.name}</h4></Card.Text>
                <Rating rating={item.rating}/>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
