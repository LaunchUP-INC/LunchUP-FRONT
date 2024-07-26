import { Container } from "react-bootstrap";

const Banned = () => {
  return (
    <Container
      style={{
        padding: "20px",
        borderRadius: "10px",
        border: "2px solid #7D0A0A",
        backgroundColor: "#D04848",
      }}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <h3 style={{ color: "white" }}>Usuario baneado</h3>
    </Container>
  );
};

export default Banned;
