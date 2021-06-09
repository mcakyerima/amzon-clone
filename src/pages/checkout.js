import Header from "../components/Header";
import Image from "next/image"
import Checkoutproduct from "../components/Checkoutproduct";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Checkout() {
    const items = useSelector(selectItems);
    return (
        <div className="relative bg-gray-100">
            <div className="bg-gray-100 relative mb-1.5">
                <Header />
            </div>
            <main className="lg:flex max-w-xl mx-auto mt-24">
                {/* left hand section */}
                <div className="flex-grow-2 m-5 shadow-sm ">
                    <Image src="https://links.papareact.com/ikj"
                        width={1030}
                        height={300}
                        objectFit="contain" />

                    <div className="flex flex-col p-5 space-x-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0
                                ? "your Amazon Basket is empty"
                                : "Shopping Basket"}
                        </h1>

                        {items.map((item, index) => (
                            <Checkoutproduct
                                key={index}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime} />
                        ))}

                    </div>

                    {/* map through and  remder the ckeckout products in the item reducer */}

                </div>


                {/* Right Hand Section */}
                <div>
                        {items.length > 0 && (
                            <>
                                <h2>SubTotal ({items.length} items)</h2>
                            </>

                        )}
                </div>
            </main>

        </div>
    )
}

export default Checkout
