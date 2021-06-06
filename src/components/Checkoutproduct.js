import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image";
import Currency from "react-currency-formatter"

function Checkoutproduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {
    return (
        <div className=" grid grid-cols-5 my-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* middle section */}
            <div className="col-span-3  mx-10">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500 " />
                    ))}
                </div>
                <p className="text-xs my-2  line-clamp-3">{description}</p>
                <Currency quantity={price} currency="NGN" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                        />
                        <p>Free Next-day Delivery</p>
                    </div>)}

            </div>

            <div className="flex flex-col justify-self-end my-auto space-y-2">
                <botton className="button text-xs">Add To Basket</botton>
                <botton className="button text-xs">Delete</botton>
            </div>

        </div>
    )
}

export default Checkoutproduct;
