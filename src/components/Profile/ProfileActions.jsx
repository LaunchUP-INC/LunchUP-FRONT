import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileActions = () => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isAuthenticated) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      logout();
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      navigate("/login"); // Navegar a la página de inicio de sesión
    }
    localStorage.removeItem("authType");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5px",
        alignItems: "center",
        margin: "0 auto",
        padding: "5px",
      }}
    >
      <Button
        variant="primary"
        onClick={() => navigate("/profile/edit")}
      >
        Editar Perfil
      </Button>
      <Button variant="success" onClick={() => navigate("/history")}>
        Mis Compras
      </Button>
      <Button variant="danger" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </div>
  );
};

export default ProfileActions;
