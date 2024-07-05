import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShoppingCart, removeFromShoppingCart, clearShoppingCart } from "../../redux/actions";

const ShoppingCart = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShoppingCart);

    }, [dispatch])

    const handleRemoveProduct = (productId) => {
        dispatch(removeFromShoppingCart(productId));
    }

    const handleClearCart = () => {
        dispatch(clearShoppingCart);
    }

    const calculateTotalPrice = (items) => {
        const total = items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        setTotalPrice(total);
    };
    

    return (
        <div>
            <div>
                <h2>Carrito de compras</h2>
                {shoppingCart.length === 0
                    ? <div>
                        <h2>No hay productos en el carrito</h2>
                    </div>
                    : shoppingCart.map((item) => {
                        <div key={item.id}>
                            <div>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div>
                                <div>
                                    <h3>{item.name}</h3>
                                    <h3>$&nbsp;{item.price}</h3>
                                </div>
                                <div>
                                    <button onClick={()=>handleRemoveProduct(item.id)}>Eliminar</button>
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
                    <p>Productos({shoppingCart.length})</p>
                    <h3>Total:&nbsp;{totalPrice} </h3>
                    <button>Comprar</button>
                </div>}
                

            </div>

        </div>
    )

}


export default ShoppingCart;