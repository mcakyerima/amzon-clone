import Header from "../components/Header";
import Image from "next/image"
import Checkoutproduct from "../components/Checkoutproduct";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter"

function Checkout() {
    const [session] = useSession()
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
                            <h2 className="whitespace-nowrap">SubTotal ({items.length} items):
                                <span className="font-bold">
                                    <Currency />
                                </span>
                            </h2>
                            <button className={`button mt-2 ${!session &&
                                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Login to Checkout" : "Click to Checkout"}
                            </button>
                        </>

                    )}
                </div>
            </main>

        </div>
    )
}

export default Checkout
