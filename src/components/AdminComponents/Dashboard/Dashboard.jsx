import { useEffect, useState } from "react";
import DashboardHeading from "../AdminNav/TopNavBar";
import styles from "./Dashboard.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteDish, fetchProducts, resetDeleteDishStatus } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";


const Dashboard = () => {
  

  return (
    <Container>
      <Row>
        Aqui va la info general
      </Row>
      <Row>
        Aqui pueden ir unas estadisticas 
      </Row>
    </Container>
  );
};

export default Dashboard;
