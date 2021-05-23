import { useState } from "react";
import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({ id, title, price, description, category, image }) {
    // create a star state for randon star rating generation
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    //generate values for hasprime component
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className="">
            <p>{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4>{title}</h4>
            <div className="flex">
                {Array(rating).fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-400" />
                    ))}

            </div>

            {hasPrime && <p>Has Prime Del</p>}
            <p>{description}</p>
            <div>

            </div>


        </div>
    )
}

export default Products
