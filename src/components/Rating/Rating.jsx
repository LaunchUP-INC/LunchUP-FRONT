import styles from "./Rating.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchrating } from "../../redux/actions";

const Rating = ({ rating }) => {
    const [stars, setStars] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        setStars(rating)
    }, [rating]);

    const handleClick = (e) => {
        setStars(Number(e.target.value));
        // Aquí puedes despachar una acción para actualizar el rating en el servidor si es necesario
    };

    return (
        <div className={styles.rating}>
            {[5, 4, 3, 2, 1].map((value) => (
                <label
                    key={value}
                    className={`${styles.label} ${value <= stars ? styles.filledStar : styles.emptyStar}`}
                    htmlFor={`star${value}`}
                >
                    <input
                        className={styles.input}
                        value={value}
                        name="rating"
                        id={`star${value}`}
                        type="radio"
                        checked={stars === value}
                        onChange={handleClick}
                    />
                    <span>&#9733;</span>
                </label>
            ))}
        </div>
    );
};

export default Rating;
