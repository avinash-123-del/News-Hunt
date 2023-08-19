import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrashRestore } from 'react-icons/fa'
import { removeNews, deleteNews } from '../store/slices/userSlice'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

const CartItems = () => {
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.user
    })

    const deleteItem = (item) => {
        dispatch(removeNews(item))
        toast.success("item removed")
    }

    const deleteAll = () => {
        dispatch(deleteNews())
        toast.dismiss("All items Removed")
    }

    console.log("data", data);
    return (
        <div>
            <div className='flex justify-end items-center w-full'>
                <button onClick={() => deleteAll()}
                    className="relative inline-flex items-center justify-center px-3 py-2 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">clear all</span>
                </button>

            </div>

            <div>
                {
                    data.map((item, i) => (
                        <span key={i} className=''>
                            <div className="flex flex-col items-center border border-gray-200 rounded-lg m-auto shadow md:flex-row md:max-w-[80%] bg-gray-50  mb-8 ">
                                <Link href={`/home/${item?.source?.name}`}>
                                    <div className=' h-auto overflow-hidden border-2'>
                                        <Image className="object-cover rounded-t-lg md:h-auto hover:scale-110 overflow-hidden transition-all duration-300  md:rounded-none md:rounded-l-lg" src={item?.image} alt="" width={1000} height={800} />
                                    </div>

                                </Link>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item?.title}</h5>
                                    <p className="mb-3 font-normal text-gray-600 ">{item?.content.substr(0, 253)}</p>
                                    <p className='text-sm text-gray-500'>{item?.description} </p>


                                    <div className='flex justify-between items-center m-auto w-full mt-3'>
                                        <Link href={`/home/${item?.source?.name}`} className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group">
                                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-200 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-10 group-hover:translate-x-0"></span>
                                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">more...</span>
                                        </Link>
                                        <span className='cursor-pointer' onClick={() => deleteItem(i)}>
                                            <FaTrashRestore color='black' size={30}/>
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default CartItems