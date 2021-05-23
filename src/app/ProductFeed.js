import Products from "../components/Products"

function ProductFeed( {products}) {
    return (
        <div>
            <h2>this is the products</h2>
            {products.map(({id, title, price, description, category, image})=>(
                <Products
                key={id}
                id={id}
                title={title}
                price={price}
                descrtription={description}
                category={category}
                image={image}/>
 
            ))}
        </div>
    )
}

export default ProductFeed
