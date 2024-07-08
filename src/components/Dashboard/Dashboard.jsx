import { useEffect, useState } from "react";
import DashboardHeading from "./DashBoardHeading";
import styles from "./Dashboard.module.css";
import axios from "axios";
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/dishes");
      setData(result.data);
    };
    fetchData();
  }, []);

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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
