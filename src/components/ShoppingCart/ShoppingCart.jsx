import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShoppingCart, removeFromShoppingCart, clearShoppingCart, addToShoppingCart } from "../../redux/actions";
import styles from "./ShoppingCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';


const ShoppingCart = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [preferenceId, setPrefereceId] = useState(null);
    const [publickKey, setPublickKey] = useState(null);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        initMercadoPago(publickKey);
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
            const response = await axios.post("ruta back", items);
            const { preferenceId, publicKey } = response.data;

            setPrefereceId(preferenceId);
            setPublickKey(publicKey);

            // mp.checkout({
            //     preference: {
            //         id: preferenceId,
            //     },
            //     autoOpen: true,
            // });


        } catch (error) {
            console.error("Error al crear la preferencia", error);
        }
    }

    return (
        <div className={styles.cartContainer}>
            <div>
                <h2>Carrito de compras</h2>
                {shoppingCart.length === 0
                    ? <div>
                        <h2>No hay productos en el carrito</h2>
                    </div>
                    : shoppingCart.map((item) => {
                        return <div key={item.id} className={styles.itemContainer}>
                            <div>
                                <img src={item.image} alt={item.name} className={styles.imgs} /> 
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.itemInfoMain}>
                                    <h3>{item.name}</h3>
                                    <div className={styles.chQuanBtns}>
                                        <button value={item.id} onClick={() => {
                                            if (item.quantity > 1) {
                                                removeOneProduct(item.id)
                                            }
                                        }}>-</button>
                                        <h3>{item.quantity}</h3>
                                        <button value={item.id} onClick={addOneProduct}>+</button>
                                    </div>
                                    <h3>$&nbsp;{item.price}</h3>
                                </div>
                                <div>
                                    <button onClick={() => handleRemoveProduct(item.id)}><FontAwesomeIcon icon={faX} /></button>
                                </div>
                            </div>
                        </div>
                    })}
            </div>
            <div>
                <h2>Resumen de compra</h2>
                {shoppingCart.length === 0
                    ? <div>
                        <p>Agui podras ver el resumen cuando agreges algo al carrito</p>
                    </div>
                    : <div>
                        <p>Productos({totalProducts})</p>
                        <h3>Total:&nbsp;{totalPrice} </h3>
                        <div>
                            <button onClick={handleCheckout} >Comprar</button>
                            <button onClick={handleClearCart} >Limpiar carrito</button>
                        </div>
                        <div>
                            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId, redirectMode:"modal" }}/>}
                        </div>

                    </div>}


            </div>

        </div>
    )

}


export default ShoppingCart;