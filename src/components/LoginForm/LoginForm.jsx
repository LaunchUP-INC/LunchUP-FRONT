import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: loginData.email,
        password: loginData.password,
      });

      if (response.data.access) {
        alert("Bienvenido a LunchUp");
        navigate("/home");
      } else {
        alert("Contraseña o mail incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Contraseña o mail incorrectos");
    }
  };

  const handleLoginWithGmail = async () => {
    await loginWithRedirect();
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
        <button type="submit" className={styles.btn}>
          Login
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={handleLoginWithGmail}
        >
          Login with Google
        </button>
      </form>

      <p>
        ¿No tienes una cuenta?{" "}
        <Link to="/signup" className={styles.link}>
          Registrarse
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
