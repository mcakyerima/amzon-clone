import Image from "next/image"

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

            </div>
        </div>
    )
}

export default Checkoutproduct
