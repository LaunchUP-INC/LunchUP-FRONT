

const ProductDetail = (props) =>{

    const {id, title, image, extendedIngredients, summary} = props;

    return(
        <div>
            <div>
                <div>
                    <img src={image} alt={title} />
                    imagen
                </div>
                <div>
                    <h2>{title}</h2>
                    <ul>
                        {extendedIngredients.map((i)=>{
                            <li key={i.id}>{i.name}</li>
                        })}
                    </ul>
                    titulo + ingedientes
                </div>
            </div>
            <div>
                <p>{summary}</p>
                summary
            </div>
        </div>
    )
}

export default ProductDetail;