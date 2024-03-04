"use client";
import { CartCounter } from "@/shopping-cart/components/CartCounter";
import { useState } from "react";
import { Metadata } from "next"

// export const metadata: Metadata = {
//   title: 'Counter Page',
//   description: 'Un contador muy completo',
//   keywords: ' Laptop, PC, Dell'
// }

const CounterPage = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span> Productos en el carrito de compras</span>
      <CartCounter/>
    </div>
  )
}

export default CounterPage