import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stats = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const ratingProducts = [...allProducts].sort((a, b) => b.rating - a.rating);
  const [disabledProducts, setDisabledProducts] = useState([]);

  const handleToggleProduct = (productName) => {
    setDisabledProducts((prev) =>
      prev.includes(productName)
        ? prev.filter((name) => name !== productName)
        : [...prev, productName]
    );
  };

  // Preparar datos para el gráfico de barras
  const barChartData = ratingProducts.map((product) => ({
    name: product.name,
    rating: product.rating,
  }));

  // Filtrar productos deshabilitados
  const filteredBarChartData = barChartData.filter(
    (product) => !disabledProducts.includes(product.name)
  );

  // Formatear etiquetas del eje Y para incluir una estrella
  const tickFormatter = (value) => `${value} ★`;

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>Calificaciones de Productos</h2>
          <BarChart
            width={700}
            height={500}
            data={filteredBarChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-25} 
              textAnchor="end" 
              height={80} // Ajusta la altura para que haya espacio para las etiquetas inclinadas
              interval={0} // Mostrar todas las etiquetas
            />
            <YAxis 
              domain={[1,2,3,4,5]} // Asegurar que el dominio del eje Y sea de 1 a 5
              tickFormatter={tickFormatter}
            />
            <Tooltip />
            <Bar dataKey="rating" fill="#8884d8" />
          </BarChart>
        </Col>
        <Col md={4}>
          <h2>Habilitar/Deshabilitar Productos</h2>
          <Form>
            {ratingProducts.map((product) => (
              <Form.Check
                key={product.name}
                type="checkbox"
                label={product.name}
                checked={!disabledProducts.includes(product.name)}
                onChange={() => handleToggleProduct(product.name)}
              />
            ))}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
