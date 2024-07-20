import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Error = () =>{
    const navigate = useNavigate();

    useEffect(() => {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error en el pago",
            timer: 3000,  
            showConfirmButton: false,
        }).then(() => {
            navigate('/shopping'); 
        });
    }, [navigate]);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <h1>Hubo un error en el pago</h1>
        </Container>
    );
}

export default Error;