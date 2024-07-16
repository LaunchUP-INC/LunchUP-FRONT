import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Products = (props) =>{
    const { products } = props;
    const navigate = useNavigate();


    
    console.log(props);
    return(
        <Container>
            <Row className="mb-2">
                <div className="d-flex justify-content-between " >
                    <h2>Productos</h2>
                    <Button onClick={() => navigate("/admin/product/create")}><FontAwesomeIcon icon={faPlus} /> Nuevo producto</Button>
                </div>
            </Row>
            <Row className="mb-2">
                <Col>Nombre</Col>
                <Col>Precio</Col>
                <Col>Stock</Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row className="mb-1">
                {products.map((item) =>{
                    return (
                        <Card key={item.id} className="mb-1">
                            <Row>
                                <Col>{item.name}</Col>
                                <Col>$ {item.price}</Col>
                                <Col>{item.stock}</Col>
                                <Col><Button variant="success" onClick={() => navigate(`/admin/product/modify/${item.id}`)} ><FontAwesomeIcon icon={faPenToSquare} /> Editar</Button></Col>
                                <Col><Button variant="danger"><FontAwesomeIcon icon={faArrowsRotate} />Desactivar</Button></Col>
                            </Row>
                        </Card>
                    )
                })}
            </Row>
            

        </Container>
    )

}


export default Products;