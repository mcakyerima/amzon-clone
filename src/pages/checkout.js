import Header from "../components/Header";
import Image from "next/image"

function Checkout() {
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

                        <div className="flex p-5 space-x-10 bg-white">
                            <h1 className="text-3xl border-b pb-4">your shopping basket</h1>
                        </div>
                </div>


                {/* Right Hand Section */}
                <div>

                </div>
            </main>

        </div>
    )
}

export default Checkout
