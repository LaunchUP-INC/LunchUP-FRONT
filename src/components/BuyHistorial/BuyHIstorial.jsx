import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchOrders } from "../../redux/actions";
import styles from "./BuyHistorial.module.css";

const BuyHistorial = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  console.log(orders);

  return (
    <div className={styles.container}>
      <h2>Mis compras</h2>
      <Table striped bordered hover className={styles.table}>
        <thead>
          <tr>
            <th>N° Compra</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>${order.totalPrice}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/history/${order.id}`)}
                >
                  Ver Detalles
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BuyHistorial;