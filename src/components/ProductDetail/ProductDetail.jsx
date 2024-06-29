import styles from "./ProductDetail.module.css";
import veganIcon from "../../utils/foodTypesIcons/vegan-icon.png";
import vegetarianIcon from "../../utils/foodTypesIcons/vegetarian-icon.png";
import glutenFreeIcon from "../../utils/foodTypesIcons/gluten-free.png";
import dairyFreeIcon from "../../utils/foodTypesIcons/dairy-free.png";


const ProductDetail = (props) => {

    const { id, name, image, price, description, Meal_Type, vegetarian, vegan, glutenFree, dairyFree, preparationTime, servings } = props.product;

    console.log(props.product);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.dishInfo}>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h2>{name}</h2>
                    {vegetarian || vegan || glutenFree || dairyFree ?
                        <div className={styles.iconsContainer}>
                            {vegan ? <img src={veganIcon} alt="vegan" className={styles.foodTypeIcon} /> : null}
                            {vegetarian ? <img src={vegetarianIcon} alt="vegetarian" className={styles.foodTypeIcon} /> : null}
                            {glutenFree ? <img src={glutenFreeIcon} alt="gluten-free" className={styles.foodTypeIcon} /> : null}
                            {dairyFree ? <img src={dairyFreeIcon} alt="dairy-free" className={styles.foodTypeIcon} /> : null}
                        </div> : null
                    }
                    <h3>{Meal_Type.name}</h3>
                    <h3>$&nbsp;{price}</h3>
                </div>
            </div>
            <hr />
            <div>
                <h4>Descripción del plato</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductDetail;