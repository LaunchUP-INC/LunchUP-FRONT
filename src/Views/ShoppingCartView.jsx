import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import {Container, Col, Row, Card, Button} from 'react-bootstrap';

const ShoppingCartView = () =>{

    return(
        <Container fluid className="d-flex justify-content-center" >
            <ShoppingCart />
        </Container>
    )

}

export default ShoppingCartView;