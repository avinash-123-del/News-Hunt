'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import {  UserAuth } from './Context'
import Link from 'next/link'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'


const Navbar = () => {

    const { user, googleSignIn, logOut } = UserAuth()

    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    // console.log('user info', user);

    const CartItems = useSelector((state) => {
        return state.user
    })

    console.log("cartItems",CartItems);


    return (
        <div className='bg-gradient-to-t from-sky-100 to-sky-200 shadow-lg fixed top-0 w-screen z-10'>

            <div className='container flex justify-between py-2  '>
                <Link href='/'>
                    <Image src='/iconNH.png' width={150} height={50} alt=''/>
                </Link>

                <ul className="flex items-center justify-between gap-6 font-semibold text-gray-600">

                    <Link href="/home">Home</Link>

                    <Link href="/contact">Contact Us</Link>
                    
                    <Link href="/cart">
                        <li className="p-2 cursor-pointer">
                            <button type="button" className="inline-flex items-center py-2.5 text-sm text-center font-semibold text-gray-600 ">
                                Cart
                                <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                                    {CartItems.length}
                                </span>
                            </button>
                        </li>
                    </Link>


                    {/* {!user ? null : (
                    <li className="p-2 cursor-pointer">
                        <Link href="/profile">Profile</Link>
                    </li>
                )} */}

                </ul>


                {!user ? (
                    <ul className="flex items-center">
                        <li onClick={handleSignIn}
                         className="py-1 px-2 cursor-pointer  text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                            Login
                        </li>

                    </ul>
                ) :

                    (
                        <div className='flex items-center justify-between gap-2'>
                            <Image className='rounded-full' src={user?.photoURL} width={30} height={50} alt=''/>
                           <span className='font-semibold'>{user?.displayName}</span> 
                            <button onClick={handleSignOut} type="button" className="text-white bg-gradient-to-b from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2">sign out</button>
                        </div>

                    )}


            </div>
        </div>
    )
}

export default Navbar