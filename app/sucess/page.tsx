'use client'

import { useCartStore } from "@/store/car-store";
import Link from "next/link";
import { useEffect } from "react";

export default function SucessPage(){
    const{clearCart} = useCartStore();
    useEffect(() => {clearCart()}, [clearCart])
    return <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Payment is Done!</h1>
        <Link href="https://ecommerce-nextjs-fullstackapp.vercel.app/" className="text-blue-600 hover:underline">Continue Shopping</Link>
    </div>
}