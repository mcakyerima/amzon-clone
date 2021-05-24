import Products from "./Products"

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">

            {products.map(({ id, title, price, description, category, image }) => (
                <Products
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image} />

            ))}

            <img className="md:col-span-full
            " src="https://links.papareact.com/dyz"/>
        </div>
    )
}

export default ProductFeed;
