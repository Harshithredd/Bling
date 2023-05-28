import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <header className="text-gray-600 body-font  bg-gradient-to-r from-yellow-600  via-yellow-500  to-yellow-300">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src='/logo.png' width={40} height={50} />
                    <span className="ml-3 text-xl">Bling</span>
                </Link>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/tshirts" className="mr-5 text-black hover:text-gray-50">Tshirts</Link>
                    <Link href="/hoodies" className="mr-5 text-black hover:text-gray-50">Hoodies</Link>
                    <Link href="/suits" className="mr-5 text-black hover:text-gray-50">Suits</Link>
                    <Link href="/jackets" className="mr-5 text-black hover:text-gray-50">Jackets</Link>
                    
                </nav>
                <button className="inline-flex items-center justify-center bg-gray-700 text-gray-100 border-0 
                        py-1 px-3 focus:outline-none hover:bg-yellow-500 hover:text-black rounded text-base mt-4 
                        md:mt-0 shadow-lg shadow-gray-500/50">
                    <p>Cart</p>
                    <IoCartOutline className='pl-1 text-xl' />
                </button>
            </div>
        </header>
    )
}

export default Navbar