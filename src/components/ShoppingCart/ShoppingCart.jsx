import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setShoppingCart,
  removeFromShoppingCart,
  clearShoppingCart,
  addToShoppingCart,
  URLD,
  clearSelectedChild,
} from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Container, Col, Row, Card, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import WhichChild from "../WhichChild/WichChild";
import { useLocation } from "react-router-dom";

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const userId = useSelector((state) => state.user.id);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [preferenceId, setPrefereceId] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const childSelected = useSelector((state) => state.isSelected);
  const location = useLocation();

  useEffect(() => {
    initMercadoPago("APP_USR-78efa39f-0e9d-4fcd-9d8d-f98870bbfeb6", {
      locale: "es-AR",
    });
  }, []);

  useEffect(() => {
    dispatch(setShoppingCart);
    calculateTotalPrice(shoppingCart);
    calculateTotalProducts(shoppingCart);
  }, [dispatch, shoppingCart]);

  useEffect(() => {
    // Mostrar el modal cuando el componente se monte
    setShowModal(true);
  }, []);

  useEffect(()=>{
    dispatch(clearSelectedChild());
  },[location, dispatch]);

  const calculateTotalPrice = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const calculateTotalProducts = (items) => {
    const total = items.reduce((acc, item) => acc + item.quantity, 0);
    setTotalProducts(total);
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromShoppingCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearShoppingCart());
  };

  const addOneProduct = (id) => {
    const productToAdd = shoppingCart.find((prod) => prod.id === id);
    dispatch(addToShoppingCart(productToAdd));
  };

  const removeOneProduct = (id) => {
    const productToRemove = shoppingCart.find((prod) => prod.id === id);
    dispatch(removeFromShoppingCart(productToRemove));
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    toast.error("Para poder avanzar con la compra debe seleccionar un comensal.");
  }

  const handleCheckout = async () => {
    const items = shoppingCart.map((item) => ({
      id: item.id,
      stock: item.stock,
      title: item.name,
      unit_price: item.price,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post(`${URLD}/user/${userId}/payment`, {
        items,
        totalAmount: totalPrice,
        childId: childSelected.id,
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error("Error al crear la preferencia", error);
    }
  };

  const handleBuy = async () => {
    if (!preferenceId) {
      setLoading(true);
      const id = await handleCheckout();
      if (id) setPrefereceId(id);
      setLoading(false);
    }
  };

  return (
    <Container
      className="mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "start",
        height: "85vh",
        width: "100%",
      }}
    >
      <WhichChild show={showModal} handleClose={handleCloseModal} />
      <Row
        style={{
          padding: "20px",

          width: "100%",
        }}
      >
        <Col
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <h3>Carrito de compras</h3>
          {shoppingCart.length === 0 ? (
            <div
              style={{
                backgroundColor: "#FFEEA9",
                padding: "10px",
                borderRadius: "10px",
                border: "2px solid #FFC94A",
              }}
            >
              <h5>No hay productos en el carrito aun</h5>
            </div>
          ) : (
            <Container
              style={{
                maxWidth: "800px",
                borderRadius: "10px",
                backgroundColor: "white",
                padding: "20px",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              {shoppingCart.map((item) => (
                <Card
                  key={item.id}
                  className="mb-3"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #ccc",
                    borderRadius: "0",
                    backgroundColor: "#f8f9fa",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  <Row
                    className="w-100"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Col md={3} className="d-flex align-items-center">
                      <Card.Img
                        variant="top"
                        src={item.images[0]}
                        alt={item.name}
                        style={{
                          width: "90px",
                          height: "70px",
                          borderRadius: "0",
                        }}
                      />
                    </Col>
                    <Col
                      md={3}
                      className="d-flex align-items-start flex-column"
                    >
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>$ {item.price}</Card.Text>
                    </Col>
                    <Col md={2} className="d-flex align-items-center">
                      <Button
                        variant="secondary"
                        style={{
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        value={item.id}
                        onClick={() => {
                          if (item.quantity > 1) {
                            removeOneProduct(item.id);
                          }
                        }}
                      >
                        -
                      </Button>
                      <h3 className="mx-3">{item.quantity}</h3>
                      <Button
                        variant="secondary"
                        style={{
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        value={item.id}
                        onClick={() => {
                          if (item.quantity < item.stock) {
                            addOneProduct(item.id);
                          } else {
                            toast.error("Máximo de stock alcanzado.");
                          }
                        }}
                      >
                        +
                      </Button>
                    </Col>
                    <Col
                      md={2}
                      className="d-flex align-items-center justify-content-end"
                    >
                      <Button
                        variant="outline-danger"
                        style={{
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => handleRemoveProduct(item.id)}
                      >
                        <FontAwesomeIcon icon={faX} />
                      </Button>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Container>
          )}
        </Col>

        <Col
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <h3>Resumen de compra</h3>
          {shoppingCart.length === 0 ? (
            <div>
              <p>Aquí podrás ver el resumen cuando agregues algo al carrito</p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: "10px",
              }}
            >
              <p>Productos({totalProducts})</p>
              <h3>Total: $ {totalPrice}</h3>
              <div className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  onClick={childSelected ? handleBuy : handleShowModal}
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Comprar"
                  )}
                </Button>
                <Button variant="warning" onClick={handleClearCart}>
                  Limpiar carrito
                </Button>
              </div>
              <div className="mt-3">
                {preferenceId && (
                  <Wallet
                    initialization={{ preferenceId, redirectMode: "modal" }}
                  />
                )}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
