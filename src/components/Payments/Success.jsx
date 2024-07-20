import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { clearShoppingCart } from "../../redux/actions";

const Success = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        Swal.fire({
            icon: "success",
            title: "Pago exitoso",
            text: "El pago se ha realizado con éxito",
            timer: 3000, 
            showConfirmButton: false,
        }).then(() => {
            dispatch(clearShoppingCart());
            navigate('/shopping'); 
        });
    }, [navigate]);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <h1>Pago exitoso</h1>
        </Container>
    );
}

export default Success;