import Image from 'next/image';

function Header() {
    return (
        <header>
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow md:flex-grow-0 ">
                    <Image
                        src='https://links.papareact.com/f90'
                        width={140}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />

                </div>

                <div>
                    <input type="text" />
                </div>

            </div>

            {/* custom search bar */}




            {/* button nav */}

            <div></div>
        </header>
    )
}

export default Header
