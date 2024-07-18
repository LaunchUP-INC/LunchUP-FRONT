import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { loginWithRedirect, getAccessTokenSilently, isAuthenticated } =
    useAuth0();
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

  useEffect(() => {
    const checkRegistration = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          console.log("Token recibido desde Auth0:", token);

          const response = await axios.post(
            "http://localhost:3001/register/check",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status === 200) {
            const isRegistered = response.data.isRegistered;
            navigate(isRegistered ? "/home" : "/register");
          } else {
            alert("Error en la verificación.");
          }
        } catch (error) {
          console.error("Error al verificar el usuario:", error);
        }
      }
    };

    checkRegistration();
  }, [isAuthenticated, navigate, getAccessTokenSilently]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column gap-5">
      <Form className="form bg-white box-shadow p-5 rounded" style={{boxShadow: "7px 7px 1px rgb(9, 98, 70)"}} onSubmit={handleSubmit} >
        <Form.Control
          type="text"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <Button
          type="submit"
          variant="primary"
          className="btn btn-primary mb-3 w-100"
        >
          Login
        </Button>
        <Button
          type="button"
          variant="danger"
          className="btn btn-danger mb-3 w-100"
          onClick={handleLoginWithGmail}
        >
          Login with Google
        </Button>
      </Form>

      <p>
        ¿No tienes una cuenta?{" "}
        <Link to="/signup" className="link">
          Registrarse
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
