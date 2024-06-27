

const ProductDetail = (props) =>{

    const {id, title, image, extendedIngredients, summary} = props.product;

    console.log("hola");

    return(
        <div>
            <div>
                <div>
                    <img src={image} alt={title} />
                </div>
                <div>
                    <h2>{title}</h2>
                    <ul>
                        {extendedIngredients.map((i)=>{
                           return <li key={i.id}>{i.name}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div>
                <p>{summary}</p>
            </div>
        </div>
    )
}

export default ProductDetail;