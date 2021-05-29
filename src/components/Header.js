import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/client"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useRouter } from 'next/router';

function Header({ products }) {
    const [session] = useSession();
    //call the inbuilt rooter hook in next.js
    const router = useRouter();

    return (
        <header className="fixed top-0 w-full z-50">
            {/* top nav */}
            <div className="relative w-full top-0 flex items-center bg-amazon_blue p-1 flex-grow py-2 z-50 mb-3.5">
                <div className="mt-2 flex items-center flex-grow md:flex-grow-0 ">
                    <Image
                        onClick={() => router.push('/')}
                        src='https://links.papareact.com/f90'
                        width={140}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />

                </div>

                {/* custom search bar */}
                <div className=" hidden md:flex flex-grow items-center bg-yellow-400 h-10 cursor-pointer rounded-md shadow w-50 hover:bg-yellow-500">
                    <input type="text" className="flex-grow w-6 h-full fp-2 flex-shrink rounded-l-md" />
                    <SearchIcon className=" h-12 p-4" />
                </div>

                {/* Right Container */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>
                            {!session ? `Sign In` : `Hello ${session.user.name}`}
                        </p>
                        <p className="font-extrabold md:text-sm ">Account & List</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& orders </p>
                    </div>
                    <div  className="relative link flex items-center ">
                        <spans className="absolute top-0 right-0 bg-yellow-400 h-4 w-4 object-fill rounded-full text-center md:right-10  font-bold text-black">0</spans>
                        <ShoppingCartIcon className="h-10" />
                        <p className=" hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>


            {/* button nav */}

            <div className="fixed flex my-40 w-full z-50  items-center space-x-3 bg-amazon_blue-light text-white mb-10">
                <p className="flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">prices</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health and personal Care</p>


            </div>
        </header>
    )
}

export default Header;