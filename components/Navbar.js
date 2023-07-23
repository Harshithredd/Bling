import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { IoCartOutline ,IoChevronForwardCircleOutline } from "react-icons/io5";
import { HiOutlineMinusCircle , HiOutlinePlusCircle, HiShoppingBag} from "react-icons/hi2";

const Navbar = () => {
    let cartRef = useRef();

    const toggleCart = () => {
        if (cartRef.current.classList.contains('translate-x-full')) {
            cartRef.current.classList.remove('translate-x-full')
            cartRef.current.classList.add('translate-x-0')
        } else if (cartRef.current.classList.contains('translate-x-0')) {
            cartRef.current.classList.remove('translate-x-0')
            cartRef.current.classList.add('translate-x-full')
        }
    }
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
                        md:mt-0 shadow-lg shadow-gray-500/50"
                    onClick={toggleCart}
                >
                    <p>Cart</p>
                    <IoCartOutline className='pl-1 text-xl' />
                </button>
            </div>
            <div ref={cartRef}
                className='sidebar absolute top-0 right-0 bg-gray-200 opacity-100 bg-origin-padding transform transition-transform
                            translate-x-full h-full md:w-2/6  sm:w-full  z-10 pt-6 px-10'
            >
                <div className='flex justify-between align-middle pb-8'>
                    <h2 className='text-xl font-bold text-slate-950'>Bling Cart</h2>
                    <IoChevronForwardCircleOutline onClick={toggleCart} size='30px' 
                    className='pt-1 cursor-pointer'/>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='flex justify-between'>
                                <div className='w-2/3'>nike hoodie</div>
                                <div className='flex w-1/3 justify-between'>
                                <HiOutlineMinusCircle className='pt-0 cursor-pointer text-indigo-500 hover:text-indigo-600' size='25px'/>
                                    <span className='' size='20px'>1</span>
                                    <HiOutlinePlusCircle className='pt-0 cursor-pointer  text-indigo-500 hover:text-indigo-600 ' size='25px'/>
                                </div>    
                            </div>
                            
                        </li>
                        <li>
                            <div className='flex justify-between py-4'>
                                <div className='w-2/3'>Adidas wind breaker</div>
                                <div className='flex w-1/3 justify-between'>
                                <HiOutlineMinusCircle className='pt-0 cursor-pointer' size='25px'/>
                                    <span className='' size='20px'>2</span>
                                    <HiOutlinePlusCircle className='pt-0 cursor-pointer' size='25px'/>
                                </div>    
                            </div>
                            
                        </li>

                    </ul>
                </div>
                <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none
                                 hover:bg-indigo-600 rounded text-lg"
                >
                    <HiShoppingBag className='pt-1' size={'25px'}/> 
                    <span className='pl-2'>Checkout</span>
                </button>
                <button class="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none
                                 hover:bg-indigo-600 rounded text-lg"
                >
                   
                    <span className='pl-2'> Clear Cart</span>
                </button>
            </div>
        </header>
    )
}

export default Navbar;