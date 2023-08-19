import dynamic from "next/dynamic";

const CartContainer = dynamic(() => import("../components/CartItems") , {ssr:false})

export default function index(){
    return <CartContainer/>
}

