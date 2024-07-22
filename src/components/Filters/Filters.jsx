import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import { fetchProducts } from "../../redux/actions";
import {
  FaHamburger,
  FaLeaf,
  FaCarrot,
  FaBreadSlice,
  FaCheese,
} from "react-icons/fa"; 
import styles from "./Filters.module.css";

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    name: "",
    type: "0",
    price: "price-asc",
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const resetAllFilters = () => {
    setFilters({
      name: "",
      type: "0",
      price: "price-asc",
    });
    fetchProducts();
  };

  const foodTypes = [
    { id: "0", name: "Todos", icon: null },
    {
      id: "1",
      name: "Convencional",
      icon: <FaHamburger className={styles.icon} />,
    },
    { id: "2", name: "Vegano", icon: <FaLeaf className={styles.icon} /> },
    {
      id: "3",
      name: "Vegetariano",
      icon: <FaCarrot className={styles.icon} />,
    },
    {
      id: "4",
      name: "Sin gluten",
      icon: <FaBreadSlice className={styles.icon} />,
    },
    {
      id: "5",
      name: "Sin lacteos",
      icon: <FaCheese className={styles.icon} />,
    },
  ];

  return (
    <>
      <SearchBar
        searchText={filters.name}
        onInputChange={(value) => handleFilterChange("name", value)}
        onSearch={() => {}}
        onReset={resetAllFilters}
      />
      <Container className={styles.container}>
        <Row className="mb-3 justify-content-center d-md-none">
          <Col xs={12} className="d-flex justify-content-center">
            <Form.Select
              name="type"
              value={filters.type}
              onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
              className={styles.select}
            >
              {foodTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={12} className="d-flex justify-content-center mt-2">
            <Form.Select
              name="price"
              value={filters.price}
              onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
              className={styles.select}
            >
              <option value="price-desc">Mayor precio</option>
              <option value="price-asc">Menor precio</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="d-none d-md-block">
          <Row className="mb-3 justify-content-center">
            <Col className="d-flex flex-wrap justify-content-center">
              {foodTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`m-2 ${styles.filterCard} ${filters.type === type.id ? styles.selected : ""}`}
                  onClick={() => handleFilterChange("type", type.id)}
                >
                  <Card.Body className="text-center">
                    {type.icon}
                    <Card.Text>{type.name}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
              <Card
                className={`m-2 ${styles.filterCard} ${filters.price === "price-desc" ? styles.selected : ""}`}
                onClick={() => handleFilterChange("price", "price-desc")}
              >
                <Card.Body className="text-center">
                  <Card.Text>Mayor precio</Card.Text>
                </Card.Body>
              </Card>
              <Card
                className={`m-2 ${styles.filterCard} ${filters.price === "price-asc" ? styles.selected : ""}`}
                onClick={() => handleFilterChange("price", "price-asc")}
              >
                <Card.Body className="text-center">
                  <Card.Text>Menor precio</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Row className="justify-content-center">
          <Button variant="outline-secondary" onClick={resetAllFilters}>
            Reiniciar Filtros
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Filters;
