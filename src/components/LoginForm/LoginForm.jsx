import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


const LoginForm = ({errorValidation}) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(loginData); // Agrega esto para verificar los datos
    dispatch(loginUser(loginData));
    errorValidation();



  const handleLoginWithGmail = async () => {
    await loginWithRedirect();
  };

  useEffect(() => {
    const checkRegistration = async () => {
      if (isAuthenticated && user) {
        try {
          const response = await axios.post(
            "http://localhost:3001/register/check",
            {
              email: user.email,
            }
          );

          if (response.status === 200) {
            const isRegistered = response.data.isRegistered;
            navigate(isRegistered ? "/home" : "/signup");
          } else {
            alert("Error en la verificación.");
          }
        } catch (error) {
          console.error("Error al verificar el usuario:", error);
        }
      }
    };

    checkRegistration();
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column gap-5">
      <Form
        className="form bg-white box-shadow p-5 rounded"
        style={{ boxShadow: "7px 7px 1px rgb(9, 98, 70)" }}
        onSubmit={handleSubmit}
      >
        <Form.Control
          type="text"
          name="email"
          placeholder="Mail"
          value={loginData.email}
          onChange={handleChange}
          className="form-control mb-3"
          style={{ backgroundColor: "#E5D4FF" }}
        />
        <Form.Control
          type="password"
          name="password"
          placeholder="Contraseña"
          value={loginData.password}
          onChange={handleChange}
          className="form-control mb-3"
          style={{ backgroundColor: "#E5D4FF" }}
        />
        <Button
          type="submit"
          variant="primary"
          className="btn btn-primary mb-3 w-100"
        >
          Ingresar
        </Button>
        <Button
          type="button"
          variant="danger"
          className="btn btn-danger mb-3 w-100"
          onClick={handleLoginWithGmail}
        >
          Ingresar con Google
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
