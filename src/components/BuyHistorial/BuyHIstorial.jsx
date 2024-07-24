
import styles from "./BuyHistorial.module.css";
import { Table, Button } from "react-bootstrap";
import { useState } from "react";
import RatingModal from "../RatingModal/RatingModal";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BuyHistorial = () => {


const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h2>Mis compras</h2>
            <Table striped bordered hover className={styles.table}>
                <thead>
                    <tr>
                        <th>N° Compra</th>
                        <th>Fecha</th>
                        <th>Monto</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>    
                        <td>1</td>
                        <td>01/01/2023</td>
                        <td>$500</td>
                        <td><Button variant="primary" onClick={()=> navigate("/history/1") }>Ver Detalles</Button></td>
                    </tr>
                </tbody>
            </Table>
        
        </div>
    )


}

export default BuyHistorial;