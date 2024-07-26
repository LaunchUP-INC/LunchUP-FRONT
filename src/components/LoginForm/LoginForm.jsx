import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { checkUser, fetchUserData, loginUser } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({ errorValidation }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const access = await dispatch(loginUser(loginData));
    

    if (access.access) {
      await dispatch(fetchUserData(loginData));
      navigate("/home");
    }
    errorValidation();
  };

  const handleLoginWithGmail = async () => {
    await loginWithRedirect({
      redirectUri: `${window.location.origin}/login`,
    });
  };

  useEffect(() => {
    const checkRegistration = async () => {
      if (isAuthenticated && user) {
        const access = await dispatch(checkUser(user));

        if (access.access) {
          await dispatch(fetchUserData(user));
          navigate("/home");
        }else{
          navigate("/signup");
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
        <InputGroup className="mb-3">
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            value={loginData.password}
            onChange={handleChange}
            className="form-control"
            style={{ backgroundColor: "#E5D4FF" }}
          />
          <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </InputGroup.Text>
        </InputGroup>
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
