function ProductFeed( {products}) {
    return (
        <div>
            <h2>this is the products</h2>
            {products.map(({id, title, price, description, category, image})=>(
                <p>{image}</p>
 
            ))}
        </div>
    )
}

export default ProductFeed
