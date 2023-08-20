'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../components/EmptyCart'
import CartItems from '../components/CartItems'

const Cart = () => {
    const data = useSelector((state) => {
        return state.user
    })
console.log('data len',data.length);
    return (
        <div className='pt-[100px] container'>

            {
                data.length === 0 ? <EmptyCart /> : <CartItems />
            }

        </div>
    )
}

export default Cart