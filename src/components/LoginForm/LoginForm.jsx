import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginData.email === user.email &&
      loginData.password === user.password
    ) {
      alert("Bienvenido a LunchUp");
      navigate("/home");
    } else {
      alert("Contraseña o mail incorrectos");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          className={styles.inputForm}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className={styles.inputForm}
        />
        <button className={styles.btn}>Login</button>
      </form>
      <p>
        Do not have an account?{" "}
        <Link to="/signup" className={styles.link}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
