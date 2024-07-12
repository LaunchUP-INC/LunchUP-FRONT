import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShoppingCart, removeFromShoppingCart, clearShoppingCart, addToShoppingCart } from "../../redux/actions";
import styles from "./ShoppingCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import {Container, Col, Row, Card, Button} from 'react-bootstrap';




const ShoppingCart = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [preferenceId, setPrefereceId] = useState(null);
    // const [publickKey, setPublickKey] = useState(null);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        initMercadoPago("APP_USR-78efa39f-0e9d-4fcd-9d8d-f98870bbfeb6");
    },[]);

    useEffect(() => {
        dispatch(setShoppingCart);
        calculateTotalPrice(shoppingCart);
        calculateTotalProducts(shoppingCart);
    }, [dispatch, shoppingCart]);

    //Funcion que calcula el precio total
    const calculateTotalPrice = (items) => {
        const total = items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        setTotalPrice(total);
    };

    //Funcion que calcula la cantidad total de productos
    const calculateTotalProducts = (items) => {
        const total = items.reduce(
            (acc, item) => acc + item.quantity,
            0
        );
        setTotalProducts(total);
    }


    //Funcion para quitar un producto del carrito
    const handleRemoveProduct = (productId) => {
        dispatch(removeFromShoppingCart(productId));
    };


    //Funcion para quitar todos los productos del carrito
    const handleClearCart = () => {
        dispatch(clearShoppingCart());
    };


    const addOneProduct = (e) => {
        const { value } = e.target;
        const productToAdd = shoppingCart.find(prod => prod.id === Number(value));

        dispatch(addToShoppingCart(productToAdd));
    }

    const removeOneProduct = (id) => {
        const productToRemove = shoppingCart.find(prod => prod.id === id);
        dispatch(removeFromShoppingCart(productToRemove));
    }


    const handleCheckout = async () => {
        const items = shoppingCart.map(item => ({
            title: item.name,
            unit_price: item.price,
            quantity: item.quantity,
        }));

        try {
            const response = await axios.post(`https://lunchup-back.onrender.com/payment`, items);
            const { id } = response.data;
            
            return id;

        } catch (error) {
            console.error("Error al crear la preferencia", error);
        }
    }

    const handleBuy = async () =>{
        const id = await handleCheckout();

        if(id) setPrefereceId(id);

    }

    return (

        <Container className="mt-5">
            <Row>
                <Col lg={9}>
                    <h2>Carrito de compras</h2>
                    {shoppingCart.length === 0
                        ? <div>
                            <h2>No hay productos en el carrito</h2>
                        </div>
                        : shoppingCart.map((item) => {
                            return (
                                <Card key={item.id} className="mb-3">
                                    <Row noGutters>
                                        <Col md={2}>
                                            <Card.Img variant="top" src={item.images[0]} alt={item.name} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body className="d-flex justify-content-between align-items-center">
                                                <Card.Title>{item.name}</Card.Title>
                                                <div className="d-flex align-items-center mb-2">
                                                    <Button variant="secondary" value={item.id} onClick={() => {
                                                        if (item.quantity > 1) {
                                                            removeOneProduct(item.id)
                                                        }
                                                    }}>-</Button>
                                                    <h3 className="mx-3">{item.quantity}</h3>
                                                    <Button variant="secondary" value={item.id} onClick={addOneProduct}>+</Button>
                                                </div>
                                                <Card.Text>$&nbsp;{item.price}</Card.Text>
                                                <Button variant="danger" className="ml-auto" onClick={() => handleRemoveProduct(item.id)}>
                                                    <FontAwesomeIcon icon={faX} />
                                                </Button>
                                                
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            );
                        })}
                </Col>
            
                <Col lg={3}>
                    <h2>Resumen de compra</h2>
                    {shoppingCart.length === 0
                        ? <div>
                            <p>Aquí podrás ver el resumen cuando agregues algo al carrito</p>
                        </div>
                        : <div>
                            <p>Productos({totalProducts})</p>
                            <h3>Total:&nbsp;${totalPrice}</h3>
                            <div className="d-flex justify-content-between">
                                <Button variant="primary" onClick={handleBuy}>Comprar</Button>
                                <Button variant="warning" onClick={handleClearCart}>Limpiar carrito</Button>
                            </div>
                            <div className="mt-3">
                                {preferenceId && <Wallet initialization={{ preferenceId, redirectMode: "blank" }} />}
                            </div>
                        </div>}
                </Col>
            </Row>
        </Container>        
    )

}


export default ShoppingCart;