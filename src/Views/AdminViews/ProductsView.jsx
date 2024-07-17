import Products from "../../components/AdminComponents/Products/Products";



const ProductsView = (props) =>{
    

    return(
        <>
            <Products products={props.products} />
        </>
    )

}

export default ProductsView;