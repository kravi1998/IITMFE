const productsData = [
    {
    pname:"Apple",
    price:100,
    description:"Red kasmiri apple"
    },
    {
    pname:"orange",
    price:20,
    description:"Nagpuri Orange"
    },
    {
    pname:"Banana",
    price:50,
    description:"Hajipur Banana"
    }
]

function ProductDisplay(){
    return(
        <div className="product-card">
        {productsData.map((product)=>(
            <div className="p-details" key={product.pname}>
                <h3 >Name : {product.pname}</h3>
                <h3 >Price : {product.price}</h3>
                <p >{product.description}</p>
            </div>
            
        ))}
        </div>
        
    )
}

export default ProductDisplay;