import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


const Stats = () => {

    const [disabledProducts, setDisabledProducts] = useState([]);

    // const salesData = [];
    //array de ejemplo
    const salesData = [
        { month: 'January', productA: 4000, productB: 2400, productC: 2400 },
        { month: 'February', productA: 3000, productB: 1398, productC: 2210 },
        { month: 'March', productA: 2000, productB: 9800, productC: 2290 },
        { month: 'April', productA: 2780, productB: 3908, productC: 2000 },
        { month: 'May', productA: 1890, productB: 4800, productC: 2181 },
        { month: 'June', productA: 2390, productB: 3800, productC: 2500 },
        { month: 'July', productA: 3490, productB: 4300, productC: 2100 },
      ];

    const handleToggleProduct = (productName) => {
        setDisabledProducts((prev) =>
            prev.includes(productName)
                ? prev.filter((name) => name !== productName)
                : [...prev, productName]
        );
    };


    const productKeys = Object.keys(salesData[0]).filter(key => key !== 'month');

    return (
        <Container>
      <Row>
        <Col md={8}>
          <h2>Ventas de Productos por Mes</h2>
          <LineChart
            width={700}
            height={400}
            data={salesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            {productKeys.map((key) => (
              !disabledProducts.includes(key) && (
                <Line key={key} type="monotone" dataKey={key} name={key.replace('product', 'Product ')} stroke="#8884d8" />
              )
            ))}
          </LineChart>
        </Col>
        <Col md={4}>
          <h2>Habilitar/Deshabilitar Productos</h2>
          <Form>
            {productKeys.map((key) => (
              <Form.Check
                key={key}
                type="checkbox"
                label={key.replace('product', 'Product ')}
                checked={!disabledProducts.includes(key)}
                onChange={() => handleToggleProduct(key)}
              />
            ))}
          </Form>
        </Col>
      </Row>
    </Container>
    )

}

export default Stats;