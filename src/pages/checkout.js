import Header from "../components/Header";
import Image from "next/image"
import Checkoutproduct from "../components/Checkoutproduct";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter"
import React, { useState, useEffect } from 'react';

function Checkout() {
    const [session] = useSession()
    const items = useSelector(selectItems);
    const [totalPrice , setTotalPrice] = useState(0)

    const total = useEffect(() => {
        const num = items.map((item, ind) => { return item.price }).reduce((accu , idx) => {return accu + idx }, 0)
        const final = Math.round(num * 100) / 100
        setTotalPrice(final)
    }, [items])

    return (
        <div className="relative bg-gray-100">
            <div className="bg-gray-100 relative mb-1.5">
                <Header />
            </div>
            <main className="lg:flex flex-grow p-15 mx-auto mt-24">
                {/* left hand section */}
                <div className="lg:min-w-min  flex-grow m-5 shadow-sm ">
                    <Image src="https://links.papareact.com/ikj"
                        width={1080}
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
                <div className="flex flex-col bg-white shadow-md p-10 m-0">
                    {items.length > 0 && (
                        <div className="">
                            <h2 className="whitespace-nowrap">SubTotal ({items.length}{" "} items):{"  "}
                                <span className="font-bold">
                                    <Currency quantity={totalPrice} currency="NGN" />
                                </span>
                            </h2>
                            <button
                            disabled={!session}
                            className={`button mt-2 min-w-full ${!session &&
                                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Login to Checkout" : "Click to Checkout"}
                            </button>
                        </div>

                    )}
                </div>
            </main>

        </div>
    )
}

export default Checkout
