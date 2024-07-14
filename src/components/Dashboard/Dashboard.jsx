import { useEffect, useState } from "react";
import DashboardHeading from "./DashBoardHeading";
import styles from "./Dashboard.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteDish, fetchProducts, resetDeleteDishStatus } from "../../redux/actions";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector(state => state.allProducts);
  const succesDishDelete = useSelector(state => state.succesDishDelete);
  const errorDishDelete = useSelector(state => state.errorDishDelete);
  const [data, setData] = useState([]);

  useEffect(() => {    
    dispatch(fetchProducts())
  }, [dispatch]);

  useEffect(() => {
    if (succesDishDelete) {
      window.alert("Plato eliminado con éxito");
      dispatch(fetchProducts());
      dispatch(resetDeleteDishStatus());
    }
    if (errorDishDelete) {
      window.alert("Error al querer eliminar plato");
    }
  }, [succesDishDelete, errorDishDelete, dispatch]);

  const handleDeleteProduct = async (id) =>{
    await dispatch(deleteDish(id));
    if(succesDishDelete) window.alert("Plato eliminado con éxito");
    if(errorDishDelete) window.alert("Error al querer eliminar plato");
  }

  return (
    <section className={styles.dashboardContainer}>
      <DashboardHeading />
      <div>
        <h1>Admin Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => navigate(`/product/modify/${item.id}`)}>Editar</button>
                </td>
                <td>
                  <button className={styles.dB} onClick={() => handleDeleteProduct(item.id)}>Eliminar producto</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
