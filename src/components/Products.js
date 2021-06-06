import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({ id, title, price, description, category, image }) {
    // hook dispatch to dispatcher
    const dispatch = useDispatch();

    // create a star state for randon star rating generation
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    //generate values for hasprime component
    const [hasPrime] = useState(Math.random() < 0.5)
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            hasPrime,
            rating,
        };

        // Sending the product as an action to the REDUX store which is the basket slice
        dispatch(addToBasket(product))
    }

    return (
        <div className="relative flex flex-col m-5  bg-white  z-30 p-10 shadow-lg  transform  cursor-pointer">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <div className="flex justify-center relative">
                <Image className="transform transition-all hover:scale-110 hover:m-5" src={image} height={200} width={200} objectFit="contain" />
            </div>
            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating).fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-400" />
                    ))}

            </div>


            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="NGN" />
            </div>
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-grey-500">Free Next-day Delivery</p>
                </div>
            )}
            <button onClick={addItemToBasket} className=" mt-auto button">Add to Basket</button>


        </div>
    )
}

export default Products;
